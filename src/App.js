import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/footer/Footer";
import { CartProvider } from "./Context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <AnimatedRoutes />
        <ScrollToTopButton />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
