import PropTypes from "prop-types";
import image from '../assets/news.jpeg'

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" >
      <img src={src?src:image || "placeholder.jpg"} style={{height:"250px",width:"300px"}} className="card-img-top" alt={title || "News Image"} />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,35)}</h5>
        <p className="card-text">{description?description.slice(0,35):"Custom description"}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

// Add PropTypes validation
NewsItem.propTypes = {
  title: PropTypes.string.isRequired, // Title is required and must be a string
  description: PropTypes.string,      // Description is optional but must be a string
  src: PropTypes.string,              // Image URL is optional but must be a string
  url: PropTypes.string.isRequired,   // URL is required and must be a string
};

// Default props (optional)
NewsItem.defaultProps = {
  description: "No description provided.",
  src: "placeholder.jpg", // Fallback image
};

export default NewsItem;
