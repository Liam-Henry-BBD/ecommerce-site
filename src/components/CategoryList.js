import { useContext } from "react"
import { NavigationContext } from "../App"
import "../styles/CategoryList.css"

// Sample category data
const categories = [
  {
    id: "grinders",
    name: "Grinders",
    image: "/landing-img.webp?height=150&width=150",
    description: "Premium grinders for a perfect consistency",
  },
  {
    id: "water-pipes",
    name: "Water Pipes",
    image: "/landing-img.webp?height=150&width=150",
    description: "Quality glass water pipes for a smooth experience",
  },
  {
    id: "papers",
    name: "Rolling Papers",
    image: "/landing-img.webp?height=150&width=150",
    description: "Organic and traditional rolling papers",
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "/landing-img.webp?height=150&width=150",
    description: "Storage, cleaning tools, and more",
  },
]

export function CategoryList() {
  const { navigate } = useContext(NavigationContext)

  return (
    <div className="category-list">
      {categories.map((category) => (
        <div
          key={category.id}
          className="category-card"
          onClick={() => navigate("products", { category: category.id })}
          style={{ cursor: "pointer" }}
        >
          <div className="category-image-container">
            <img src={category.image || `${process.env.PUBLIC_URL}/landing-img.webp` } alt={category.name} className="category-image" />
          </div>
          <div className="category-content">
            <h3 className="category-name">{category.name}</h3>
            <p className="category-description">{category.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
