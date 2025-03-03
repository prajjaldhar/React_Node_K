import React, { useContext } from "react";
import ProductList from "../Components/ProductList";
import { CartContext } from "../services/CartContext";

const WishListPage = () => {
  const { wishlist } = useContext(CartContext);
  console.log(wishlist);
  return (
    <>
      <ProductList shows={wishlist} />
    </>
  );
};

export default WishListPage;
