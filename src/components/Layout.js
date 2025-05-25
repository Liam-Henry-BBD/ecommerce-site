import { useContext } from "react"
import { NavigationContext } from "../App"
import "../styles/Layout.css"

function Layout({ children }) {
  const { navigate, currentPage, currentCategory } = useContext(NavigationContext)

  // Get cart items from localStorage or state management
  const cartItemCount = 0 // Replace with actual cart count

  return (
    <div className="layout">
      <header className="header">
        <div className="container header-container">
          <a
            href="#"
            className="logo"
            onClick={(e) => {
              e.preventDefault()
              navigate("home")
            }}
          >
            <span>Next Level .Inc</span>
          </a>
          <nav className="nav">
            <a
              href="#"
              className={`nav-link ${currentPage === "products" && !currentCategory ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                navigate("products")
              }}
            >
              All Products
            </a>
            <a
              href="#"
              className={`nav-link ${currentPage === "products" && currentCategory === "grinders" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                navigate("products", { category: "grinders" })
              }}
            >
              Grinders
            </a>
            <a
              href="#"
              className={`nav-link ${currentPage === "products" && currentCategory === "water-pipes" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                navigate("products", { category: "water-pipes" })
              }}
            >
              Water Pipes
            </a>
            <a
              href="#"
              className={`nav-link ${currentPage === "products" && currentCategory === "papers" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                navigate("products", { category: "papers" })
              }}
            >
              Rolling Papers
            </a>
            <a
              href="#"
              className={`nav-link ${currentPage === "products" && currentCategory === "accessories" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                navigate("products", { category: "accessories" })
              }}
            >
              Accessories
            </a>
          </nav>
          <div className="cart-wrapper">
            <a
              href="#"
              className="cart-button"
              onClick={(e) => {
                e.preventDefault()
                navigate("cart")
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cart-icon"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <span className="cart-count">{cartItemCount}</span>
            </a>
          </div>
        </div>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-section">
            <div className="footer-title">Next Level .Inc</div>
            <p className="footer-text">Premium accessories for cannabis enthusiasts.</p>
          </div>
          <div className="footer-section">
            <div className="footer-heading">Shop</div>
            <nav className="footer-nav">
              <a
                href="#"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault()
                  navigate("products")
                }}
              >
                All Products
              </a>
              <a
                href="#"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault()
                  navigate("products", { category: "grinders" })
                }}
              >
                Grinders
              </a>
              <a
                href="#"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault()
                  navigate("products", { category: "water-pipes" })
                }}
              >
                Water Pipes
              </a>
              <a
                href="#"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault()
                  navigate("products", { category: "papers" })
                }}
              >
                Rolling Papers
              </a>
              <a
                href="#"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault()
                  navigate("products", { category: "accessories" })
                }}
              >
                Accessories
              </a>
            </nav>
          </div>
          <div className="footer-section">
            <div className="footer-heading">Company</div>
            <nav className="footer-nav">
              <a href="#" className="footer-link">
                About
              </a>
              <a href="#" className="footer-link">
                Contact
              </a>
              <a href="#" className="footer-link">
                FAQ
              </a>
              <a href="#" className="footer-link">
                Shipping & Returns
              </a>
            </nav>
          </div>
          <div className="footer-section">
            <div className="footer-heading">Legal</div>
            <nav className="footer-nav">
              <a href="#" className="footer-link">
                Terms of Service
              </a>
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
              <a href="#" className="footer-link">
                Cookie Policy
              </a>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-container">
            <p className="footer-copyright">© 2025 Next Level .Inc. All rights reserved.</p>
            <p className="footer-disclaimer">For adults 21+ only. Products intended for legal use only.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
