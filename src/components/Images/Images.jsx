import "./Images.css";
function Images({ imageUrl, title }) {
  return (
    <div className="image_wrapper">
      <img src={imageUrl} alt={title} />
    </div>
  );
}
export default Images;
