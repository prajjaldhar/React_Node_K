import React from "react";
import NavBar from "../Components/NavBar";
import OrderTracking from "../Components/OrderTracking";
import Footer from "../Components/Footer";

const OrderTackingPage = () => {
  return (
    <div className="bg-blue-100">
      <NavBar />
      <OrderTracking />
      <Footer />
    </div>
  );
};

export default OrderTackingPage;
