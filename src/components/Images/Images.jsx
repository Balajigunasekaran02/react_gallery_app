import { Link } from "react-router-dom";
import "./Images.css";
function Images({ imageUrl, title, id }) {
  return (
    <Link to={`/photos/${id}`} className="image_wrapper">
      <img src={imageUrl} alt={title} />
    </Link>
  );
}
export default Images;
