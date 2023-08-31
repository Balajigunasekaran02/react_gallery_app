import { Link, useParams } from "react-router-dom";
import "./ImageDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
function ImageDetails() {
  const { id } = useParams();
  const Image_DETAIL_URL =
    "https://api.slingacademy.com/v1/sample-data/photos/";
  const [imageDetail, setImageDetail] = useState(null);
  async function downloadDetails() {
    const response = await axios.get(Image_DETAIL_URL + id);
    const imageData = response.data.photo;
    //console.log(imageData);

    setImageDetail({
      id: imageData.id,
      title: imageData.title,
      description: imageData.description,
      imageUrl: imageData.url,
    });
  }

  useEffect(() => {
    downloadDetails();
  }, []);

  return (
    imageDetail && (
      <>
        <Link className="back-link" to="/">
          &#8592; Back
        </Link>
        <div className="image_details_wrapper">
          <h1 className="title">{imageDetail.title}</h1>
          <div className="card_img">
            <img src={imageDetail.imageUrl} alt={imageDetail.title} />
          </div>
          <p>{imageDetail.description}</p>
        </div>
      </>
    )
  );
}
export default ImageDetails;
