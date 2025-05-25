import { useState, useContext } from "react";
import { NavigationContext } from "../App";
import "../styles/CartPage.css";

// Sample cart data
const initialCartItems = [
  {
    id: "premium-grinder",
    name: "Premium 4-Piece Grinder",
    price: 49.99,
    image: "/landing-img.webp?height=100&width=100",
    quantity: 1,
  },
  {
    id: "organic-papers",
    name: "Organic Hemp Rolling Papers",
    price: 4.99,
    image: "/landing-img.webp?height=100&width=100",
    quantity: 2,
  },
];

function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [discountCode, setDiscountCode] = useState("");
  const { navigate } = useContext(NavigationContext);

  // Calculate cart totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = 5.99;
  const tax = subtotal * 0.15;
  const total = subtotal + shipping + tax;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleApplyDiscount = () => {
    // Discount logic would go here
    console.log(`Applied discount code: ${discountCode}`);
  };

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="cart-title">Your Cart</h1>

        {cartItems.length > 0 ? (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image-container">
                    <img
                      src={item.image || "/landing-img.webp"}
                      alt={item.name}
                      className="cart-item-image"
                    />
                  </div>
                  <div className="cart-item-details">
                    <div className="cart-item-header">
                      <h3 className="cart-item-name">{item.name}</h3>
                      <p className="cart-item-total">
                        R{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <p className="cart-item-price">
                      R{item.price.toFixed(2)} each
                    </p>
                    <div className="cart-item-actions">
                      <div className="quantity-selector small">
                        <button
                          className="quantity-button small"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="quantity-icon small"
                          >
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </button>
                        <div className="quantity-value small">
                          {item.quantity}
                        </div>
                        <button
                          className="quantity-button small"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="quantity-icon small"
                          >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </button>
                      </div>
                      <button
                        className="remove-button"
                        onClick={() => removeItem(item.id)}
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
                          className="remove-icon"
                        >
                          <path d="M3 6h18" />
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                          <line x1="10" y1="11" x2="10" y2="17" />
                          <line x1="14" y1="11" x2="14" y2="17" />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-summary">
              <div className="summary-card">
                <h2 className="summary-title">Order Summary</h2>

                <div className="summary-details">
                  <div className="summary-row">
                    <span className="summary-label">Subtotal</span>
                    <span className="summary-value">
                      R{subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Shipping</span>
                    <span className="summary-value">
                      R{shipping.toFixed(2)}
                    </span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Tax</span>
                    <span className="summary-value">R{tax.toFixed(2)}</span>
                  </div>
                  <div className="summary-divider"></div>
                  <div className="summary-row total">
                    <span className="summary-label">Total</span>
                    <span className="summary-value">R{total.toFixed(2)}</span>
                  </div>
                </div>

                <button className="button primary checkout-button">
                  Proceed to Checkout
                </button>

                <p className="terms-notice">
                  By proceeding, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </div>

              <div className="payment-methods">
                <h3 className="payment-title">We Accept</h3>
                <div className="payment-icons">
                  <div className="payment-icon"></div>
                  <div className="payment-icon"></div>
                  <div className="payment-icon"></div>
                  <div className="payment-icon"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="large-icon"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </div>
            <h2 className="empty-cart-title">Your cart is empty</h2>
            <p className="empty-cart-message">
              Looks like you haven't added any products to your cart yet.
            </p>
            <button
              className="button primary"
              onClick={() => navigate("products")}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
