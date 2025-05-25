import { ProductCard } from "./ProductCard"
import "../styles/FeaturedProducts.css"

// Sample product data
const featuredProducts = [
  {
    id: "premium-grinder",
    name: "Premium 4-Piece Grinder",
    price: 49.99,
    image: "/landing-img.webp?height=200&width=200",
    category: "Grinders",
  },
  {
    id: "glass-water-pipe",
    name: "Handcrafted Glass Water Pipe",
    price: 129.99,
    image: "/landing-img.webp?height=200&width=200",
    category: "Water Pipes",
  },
  {
    id: "organic-papers",
    name: "Organic Hemp Rolling Papers",
    price: 4.99,
    image: "/landing-img.webp?height=200&width=200",
    category: "Rolling Papers",
  },
  {
    id: "storage-container",
    name: "Airtight Storage Container",
    price: 24.99,
    image: "/landing-img.webp?height=200&width=200",
    category: "Accessories",
  },
]

export function FeaturedProducts() {
  return (
    <div className="featured-products">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}
