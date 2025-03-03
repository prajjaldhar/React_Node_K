import React from "react";
import ProductList from "../Components/ProductList";
import { useData } from "../services/DataContext";

const HomePage = () => {
  const { shows } = useData();
  return (
    <>
      <ProductList shows={shows} />
    </>
  );
};

export default HomePage;
