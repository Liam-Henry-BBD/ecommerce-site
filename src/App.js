import { useState, createContext } from "react";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import "./App.css";

// Create a context for navigation
export const NavigationContext = createContext({
  currentPage: "home",
  currentProductId: null,
  currentCategory: null,
  navigate: () => {},
});

function App() {
  const [navigation, setNavigation] = useState({
    currentPage: "home",
    currentProductId: null,
    currentCategory: null,
  });

  const navigate = (page, params = {}) => {
    setNavigation({
      currentPage: page,
      currentProductId: params.productId || null,
      currentCategory: params.category || null,
    });
  };

  // Render the appropriate page based on the current navigation state
  const renderPage = () => {
    switch (navigation.currentPage) {
      case "home":
        return <HomePage />;
      case "products":
        return <ProductsPage category={navigation.currentCategory} />;
      case "product-detail":
        return <ProductDetailPage productId={navigation.currentProductId} />;
      case "cart":
        return <CartPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <NavigationContext.Provider value={{ ...navigation, navigate }}>
      <Layout>{renderPage()}</Layout>
    </NavigationContext.Provider>
  );
}

export default App;
