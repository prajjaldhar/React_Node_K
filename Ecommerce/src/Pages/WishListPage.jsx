import React from "react";
import NavBar from "../Components/NavBar";
import WishList from "../Components/WishList";
import Footer from "../Components/Footer";

const WishListPage = () => {
  return (
    <div className="bg-blue-100">
      <NavBar />
      <WishList />
      <Footer />
    </div>
  );
};

export default WishListPage;
