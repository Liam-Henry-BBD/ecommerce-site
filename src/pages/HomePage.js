import { useContext } from "react";
import { NavigationContext } from "../App";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { CategoryList } from "../components/CategoryList";
import "../styles/HomePage.css";

function HomePage() {
  const { navigate } = useContext(NavigationContext);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Premium Accessories for Cannabis Enthusiasts
              </h1>
              <p className="hero-description">
                Discover our curated collection of high-quality grinders, water
                pipes, rolling papers, and more.
              </p>
              <div className="hero-actions">
                <button
                  className="button primary"
                  onClick={() => navigate("products")}
                >
                  Shop Now
                </button>
              </div>
            </div>
            <div className="hero-image-container">
              <img
                src={`${process.env.PUBLIC_URL}/landing-img.webp?height=400&width=400`}
                alt="Featured Products"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="category-section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <CategoryList />
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <FeaturedProducts />
        </div>
      </section>

      <section className="quality-section">
        <div className="container">
          <div className="quality-content">
            <div className="quality-image-container">
              <img
                src={`${process.env.PUBLIC_URL}/landing-img.webp?height=400&width=400`}
                alt="Quality Promise"
                className="quality-image"
              />
            </div>
            <div className="quality-text">
              <h2 className="quality-title">Our Quality Promise</h2>
              <p className="quality-description">
                We carefully select each product in our inventory to ensure
                durability, functionality, and value. All our accessories are
                made from high-quality materials and designed to enhance your
                experience.
              </p>
              <button className="button secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
