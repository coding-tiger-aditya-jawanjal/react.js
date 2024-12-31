import { Link } from "react-router-dom";
import "../styles/productCard.css";

const ProductCard = ({ e }) => {
  return (
    <div className="card-item">
      <img src={e.image} alt={e.title} className="image" />
      <Link to={`/product/${e.id}`} className="link">
        <h1 className="card-heading">{e.title.substring(0, 20) + "..."}</h1>
      </Link>
      <p className="description">{e.description.substring(0, 100) + "..."}</p>
      <p className="price">{"$ " + e.price}</p>
      <button className="add">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
