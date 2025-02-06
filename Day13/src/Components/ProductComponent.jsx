import React from "react";
import categories from "../utility/data";
import Products from "./Products";
import ProductShimmer from "./ProductShimmer";
import { useState } from "react";
import { useEffect } from "react";

const ProductComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(true), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {isLoading
        ? categories.map((category, index) => (
            <>
              <Products category={category} index={index} />
            </>
          ))
        : categories.map((category, index) => (
            <>
              <ProductShimmer category={category} index={index} />
            </>
          ))}
    </div>
  );
};

export default ProductComponent;
