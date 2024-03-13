import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import "./ProductCard.css";
export default function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt="" />
      <div className="product-card-category">
        <p>{product.category}</p>
      </div>
      <div>
        <a href="#" className="product-card-title one-line-ellipsis">
          {product.title}
        </a>
      </div>
      <p className="product-card-price">${product.price}</p>
      <p className="product-card-description two-lines-ellipsis">
        {product.description}
      </p>
      <div className="flex items-center gap-1 product-card-rating">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <span>{product.rating.rate}</span>
      </div>
      <div className="text-center">
        <button
          className="product-card-button"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};
