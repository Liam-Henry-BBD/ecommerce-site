import { useContext } from "react";
import { NavigationContext } from "../App";
import "../styles/ProductCard.css";

export function ProductCard({ id, name, price, image, category }) {
  const { navigate } = useContext(NavigationContext);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    // Add to cart logic here
    console.log(`Added ${name} to cart`);
  };

  return (
    <div
      className="product-card"
      onClick={() => navigate("product-detail", { productId: id })}
      style={{ cursor: "pointer" }}
    >
      <div className="product-image-container">
        <img
          src={image || "/landing-img.webp"}
          alt={name}
          className="product-image"
        />
      </div>
      <div className="product-content">
        <h3 className="product-name">{name}</h3>
        <p className="product-category">{category}</p>
      </div>
      <div className="product-footer">
        <div className="product-price">R{price.toFixed(2)}</div>
        <button
          className="button primary add-to-cart-button"
          onClick={handleAddToCart}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cart-icon-small"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
