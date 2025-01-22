import React from "react";
import Homepage from "./Pages/Homepage";
import AllProductsPage from "./Pages/AllProductsPage";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/all-products" element={<AllProductsPage />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
