import React from "react";
import ProductList from "../Components/ProductList";
import { useData } from "../services/DataContext";

const MoviesPage = () => {
  const { shows } = useData();
  return (
    <>
      <ProductList shows={shows} />
    </>
  );
};

export default MoviesPage;
