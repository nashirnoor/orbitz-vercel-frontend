import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../components/home/Home";
import AboutUs from "../components/about-us/AboutUs";
import ContactUs from "../components/contact-us/ContactUs";
import ProductCategories from "./CategorySection/CategorySection";
import ProductListing from "./ProductList/ProductList";
import Cart from "./Cart/Cart";
import OurBrand from "./OurBrand/OurBrand";
import ProductDetails from "./ProductDetails/ProductDetails";

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/products" element={<ProductCategories />} />
        <Route path="/products/:cat_name" element={<ProductListing />} />
        <Route path="/products/:cat_name/:name" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/our-brand" element={<OurBrand />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
