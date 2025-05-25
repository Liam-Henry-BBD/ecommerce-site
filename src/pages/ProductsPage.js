import { useState, useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import "../styles/ProductsPage.css";

// Sample product data
const products = [
  {
    id: "premium-grinder",
    name: "Premium 4-Piece Grinder",
    price: 49.99,
    image: `${process.env.PUBLIC_URL}/landing-img.webp`,
    category: "grinders",
  },
  {
    id: "metal-grinder",
    name: "Metal Herb Grinder",
    price: 29.99,
    image: `${process.env.PUBLIC_URL}/landing-img.webp`,
    category: "grinders",
  },
  {
    id: "glass-water-pipe",
    name: "Handcrafted Glass Water Pipe",
    price: 129.99,
    image: `${process.env.PUBLIC_URL}/landing-img.webp`,
    category: "water-pipes",
  },
  {
    id: "beaker-water-pipe",
    name: "Beaker Base Water Pipe",
    price: 89.99,
    image: `${process.env.PUBLIC_URL}/landing-img.webp`,
    category: "water-pipes",
  },
  {
    id: "organic-papers",
    name: "Organic Hemp Rolling Papers",
    price: 4.99,
    image: `${process.env.PUBLIC_URL}/landing-img.webp`,
    category: "papers",
  },
  {
    id: "king-size-papers",
    name: "King Size Rolling Papers",
    price: 3.99,
    image: `${process.env.PUBLIC_URL}/landing-img.webp`,
    category: "papers",
  },
  {
    id: "storage-container",
    name: "Airtight Storage Container",
    price: 24.99,
    image: `${process.env.PUBLIC_URL}/landing-img.webp`,
    category: "accessories",
  },
  {
    id: "cleaning-kit",
    name: "Complete Cleaning Kit",
    price: 19.99,
    image: `${process.env.PUBLIC_URL}/landing-img.webp`,
    category: "accessories",
  },
];

function ProductsPage({ category }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOption, setSortOption] = useState("featured");

  useEffect(() => {
    let result = [...products];

    // Apply category filter
    if (category) {
      result = result.filter((product) => product.category === category);
    }

    // Apply sorting
    switch (sortOption) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        // In a real app, you would sort by date
        break;
      default:
        // 'featured' - no specific sorting
        break;
    }

    setFilteredProducts(result);
  }, [category, sortOption]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="products-page">
      <div className="container">
        <div className="products-header">
          <div className="products-title-container">
            <h1 className="products-title">
              {category
                ? `${
                    category.charAt(0).toUpperCase() +
                    category.slice(1).replace("-", " ")
                  }`
                : "All Products"}
            </h1>
            <p className="products-subtitle">
              Browse our collection of premium accessories
            </p>
          </div>
          <div className="products-sort">
            <div className="sort-label">
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
                className="filter-icon"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              <span>Sort by:</span>
            </div>
            <select
              className="sort-select"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>No products found. Try a different category or search term.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
