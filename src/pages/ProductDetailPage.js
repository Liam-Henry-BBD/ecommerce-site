import { useState } from "react"
import { useContext } from "react"
import { NavigationContext } from "../App"
import { ProductCard } from "../components/ProductCard"
import "../styles/ProductDetailPage.css"

// Sample product data
const products = {
  "premium-grinder": {
    id: "premium-grinder",
    name: "Premium 4-Piece Grinder",
    price: 49.99,
    image: `${process.env.PUBLIC_URL}/landing-img.webp?height=400&width=400`,
    category: "Grinders",
    description:
      "Our premium 4-piece grinder is crafted from high-quality aircraft-grade aluminum. The precision-milled teeth ensure a perfect grind every time, while the pollen catcher preserves the most potent parts of your herbs. The magnetic lid provides a secure closure, and the diamond-shaped teeth are designed for durability and efficiency.",
    features: [
      "Aircraft-grade aluminum construction",
      "Precision-milled teeth for consistent grinding",
      "Pollen catcher with fine mesh screen",
      "Magnetic lid for secure closure",
      "Diamond-shaped teeth for efficient grinding",
    ],
    specifications: {
      Material: "Aircraft-grade aluminum",
      Diameter: "2.5 inches",
      Height: "1.75 inches",
      Weight: "4.2 oz",
      Color: "Matte Black",
    },
  },
  "metal-grinder": {
    id: "metal-grinder",
    name: "Metal Herb Grinder",
    price: 29.99,
    image: `${process.env.PUBLIC_URL}/landing-img.webp?height=200&width=200`,
    category: "Grinders",
    description:
      "A durable metal herb grinder with sharp teeth for efficient grinding. This compact grinder is perfect for on-the-go use.",
    features: [
      "Durable metal construction",
      "Sharp teeth for efficient grinding",
      "Compact and portable design",
      "Easy to clean",
    ],
    specifications: {
      Material: "Aluminum alloy",
      Diameter: "2 inches",
      Height: "1 inch",
      Weight: "2.5 oz",
      Color: "Silver",
    },
  },
  "glass-water-pipe": {
    id: "glass-water-pipe",
    name: "Handcrafted Glass Water Pipe",
    price: 129.99,
    image: `${process.env.PUBLIC_URL}/landing-img.webp?height=400&width=400`,
    category: "Water Pipes",
    description:
      "This handcrafted glass water pipe features a unique design and superior filtration for a smooth experience. Made from high-quality borosilicate glass for durability and heat resistance.",
    features: [
      "Handcrafted borosilicate glass",
      "Percolator for superior filtration",
      "Ice catcher for cooler hits",
      "Stable base design",
      "Easy to clean",
    ],
    specifications: {
      Material: "Borosilicate glass",
      Height: "12 inches",
      Base: "4 inches",
      Joint: "14mm",
      Color: "Clear with blue accents",
    },
  },
}

// Sample related products
const relatedProducts = [
  {
    id: "metal-grinder",
    name: "Metal Herb Grinder",
    price: 29.99,
    image: `${process.env.PUBLIC_URL}/landing-img.webp?height=200&width=200`,
    category: "Grinders",
  },
  {
    id: "storage-container",
    name: "Airtight Storage Container",
    price: 24.99,
    image: `${process.env.PUBLIC_URL}/landing-img.webp?height=200&width=200`,
    category: "Accessories",
  },
  {
    id: "cleaning-kit",
    name: "Complete Cleaning Kit",
    price: 19.99,
    image: `${process.env.PUBLIC_URL}/landing-img.webp?height=200&width=200`,
    category: "Accessories",
  },
]

function ProductDetailPage({ productId }) {
  const [quantity, setQuantity] = useState(1)
  const { navigate } = useContext(NavigationContext)

  // For demo purposes, we'll just use the premium-grinder product if the ID doesn't exist
  const product = products[productId] || products["premium-grinder"]

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(`Added ${quantity} ${product.name} to cart`)
    // Navigate to cart page
    navigate("cart")
  }

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="product-detail">
          <div className="product-image-container-large">
            <img src={product.image || `${process.env.PUBLIC_URL}/landing-img.webp`} alt={product.name} className="product-image-large" />
          </div>
          <div className="product-info">
            <div className="product-header">
              <h1 className="product-title">{product.name}</h1>
              <p className="product-category">{product.category}</p>
            </div>

            <div className="product-price-large">R{product.price.toFixed(2)}</div>

            <p className="product-description">{product.description}</p>

            <div className="product-features">
              <h3 className="features-title">Features:</h3>
              <ul className="features-list">
                {product.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <button className="quantity-button" onClick={decreaseQuantity}>
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
                    className="quantity-icon"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <div className="quantity-value">{quantity}</div>
                <button className="quantity-button" onClick={increaseQuantity}>
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
                    className="quantity-icon"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              </div>
              <button className="button primary add-to-cart-button-large" onClick={handleAddToCart}>
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

            <div className="product-divider"></div>

            <div className="product-specifications">
              <h3 className="specifications-title">Specifications:</h3>
              <div className="specifications-grid">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="specification-item">
                    <span className="specification-key">{key}:</span>
                    <span className="specification-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="product-divider"></div>

        <div className="related-products-section">
          <h2 className="section-title">Related Products</h2>
          <div className="related-products">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
