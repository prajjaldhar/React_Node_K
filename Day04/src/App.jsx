import React from "react";
import products from "./utility/data";

const App = () => {
  const productcat = products.flatMap((product) =>
    product.productName.map((item) => ({
      category: product.category,
      item,
    }))
  );

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-950   min-h-screen p-6">
      <h1 className="text-3xl text-white font-bold mb-6 text-center">
        Product Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productcat.map((prod, index) => (
          <div
            key={index}
            className="bg-blue-300 p-4 rounded-lg shadow-md flex items-center justify-between"
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
