import React from "react";
import NavBar from "../Components/NavBar";
import AddToCart from "../Components/AddToCart";
import Footer from "../Components/Footer";

const CheckOut = () => {
  return (
    <div className="bg-blue-100">
      <NavBar />
      <AddToCart />
      <Footer />
    </div>
  );
};

export default CheckOut;
