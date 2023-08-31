import axios from "axios";
import "./ListImages.css";
import { useEffect, useState } from "react";
import Images from "../Images/Images";
function ListImages() {
  const DEFAULT_URL =
    "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20";
  const [imageList, setImageList] = useState([]);
  async function downloadImages() {
    const response = await axios.get(DEFAULT_URL);
    //console.log(response);
    const results = response.data.photos;
    //console.log(results);
    const imageFinalList = results.map((data) => {
      const photos = data;
      //console.log(listImages);
      return {
        id: photos.id,
        title: photos.title,
        description: photos.description,
        imageUrl: photos.url,
      };
    });
    setImageList(imageFinalList);
  }

  useEffect(() => {
    downloadImages();
  }, []);
  return (
    <div className="list_image_wrapper">
      {imageList.map((image) => (
        <Images key={image.id} imageUrl={image.imageUrl} title={image.title} />
      ))}
    </div>
  );
}
export default ListImages;
