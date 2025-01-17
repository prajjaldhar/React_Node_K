import React, { useState, useEffect } from "react";
import products from "./utility/data";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const productcat = products.flatMap((product) =>
    product.productName.map((item) => ({
      category: product.category,
      item,
    }))
  );

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-950 min-h-screen p-6">
      <h1 className="text-3xl text-white font-bold mb-6 text-center">
        Product Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading
          ? // Render shimmer placeholders
            Array(productcat.length)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-blue-300 animate-pulse p-4 rounded-lg shadow-xl flex items-center justify-between"
                >
                  <span className="bg-gray-300 h-6 w-1/3 rounded-xl"></span>
                  <span className="bg-gray-300 h-6 w-20 rounded-xl"></span>
                </div>
              ))
          : // Render actual product categories
            productcat.map((prod, index) => (
              <div
                key={index}
                className="bg-blue-300 hover:scale-105 cursor-pointer p-4 rounded-lg shadow-xl hover:drop-shadow-[0_10px_10px_rgba(255,0,0,0.6)] flex items-center justify-between"
              >
                <span className="text-lg font-semibold">{prod.category}</span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full">
                  {prod.item}
                </span>
              </div>
            ))}
      </div>
    </div>
  );
};

export default App;
