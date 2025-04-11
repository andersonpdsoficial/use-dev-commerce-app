import "./App.css";
import Header from "./components/Header/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterConfig from "./components/Footer/FooterConfig";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ScrollToTop from "./common/utils/ScrollToTop";
import CartPage from "./pages/CartPage";
import WithCart from "./common/utils/withCart";
import { CartProps } from "./common/types/cart";
import { useState } from "react";

function App({ cartItems, cartCount, addToCart, removeFromCart }: CartProps) {
  const [cartCountState, setCartCountState] = useState(cartCount);
  
  const handleSearch = (query: string) => {
    // Implementar a lógica de busca aqui
    console.log('Searching for:', query);
  };

  return (
    <Router>
      <ScrollToTop />
      <Header cartCount={cartCountState} onSearch={handleSearch} />
      <Routes>
        <>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/produto/:id"
            element={<ProductDetailsPage addToCart={addToCart} />}
          />
          <Route
            path="/carrinho"
            element={
              <CartPage
                cartCount={cartCountState}
                cartItems={cartItems}
                removeFromCart={removeFromCart}
              />
            }
          />
        </>
      </Routes>
      <FooterConfig />
    </Router>
  );
}

export default WithCart(App);
