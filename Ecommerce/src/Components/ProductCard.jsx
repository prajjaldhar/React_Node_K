import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ key, product }) => {
  return (
    <div
      key={key}
      className="w-[250px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-8"
    >
      <Link to="/product">
        <img
          className="w-full h-48 object-contain"
          src={product && product.imageUrl}
          alt="Product"
        />
      </Link>
      <div className="p-4 space-y-2">
        <h2 className="text-base font-semibold text-gray-800">
          Minimalist Wooden Chair
        </h2>
        <p className="text-gray-600 text-xs">
          Crafted with precision from sustainable wood, ideal for modern living
          spaces.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-gray-900">$129</span>
          <button className="bg-indigo-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-indigo-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
