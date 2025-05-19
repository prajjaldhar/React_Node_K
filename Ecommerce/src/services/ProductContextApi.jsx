import React, { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function getP() {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/prajjaldhar/75abb8ecd414199a4054866411c357bd/raw/b72ca0ad96c1a1a7551f8d57ecdfeb2d8504df63/productdata.json"
        );
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
          console.log(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    getP();
  }, []);
  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
