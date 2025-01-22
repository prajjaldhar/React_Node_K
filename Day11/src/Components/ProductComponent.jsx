import React, { useState } from "react";
import products from "../utility/data";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const [counts, setCounts] = useState({});

  // Handle Increment
  const handleIncrement = (index) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [index]: (prevCounts[index] || 0) >= 5 ? 5 : (prevCounts[index] || 0) + 1,
    }));
  };

  // Handle Decrement
  const handleDecrement = (index) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [index]: (prevCounts[index] || 0) <= 0 ? 0 : (prevCounts[index] || 0) - 1,
    }));
  };
  return (
    <div>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">
          Responsive Product Card Grid
        </h1>
        <h1 className="text-3xl">Tailwind CSS</h1>
      </div>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products.map((product, index) => (
          <Link to="/product-details">
            <div
              key={product.id}
              className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            >
              <a href="#">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    {product.brand}
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {product.name}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black my-3">
                      ${product.price}
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 ml-2">
                        ${product.originalPrice}
                      </p>
                    </del>
                  </div>
                  <div className="gap-2 flex items-center">
                    <button
                      className="font-bold text-xl"
                      onClick={() => handleIncrement(index)}
                    >
                      +
                    </button>
                    <span className="relative">{counts[index] || 0}</span>
                    <button
                      className="font-bold text-xl"
                      onClick={() => handleDecrement(index)}
                    >
                      -
                    </button>
                  </div>
                  <div className="mt-4">
                    <button className="bg-orange-500 text-white rounded-full p-3 w-full">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default ProductComponent;
