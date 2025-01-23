import React from "react";
import Homepage from "./Pages/Homepage";
import AllProductsPage from "./Pages/AllProductsPage";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails";
import ScrollToTop from "./Validation/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/all-products" element={<AllProductsPage />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
