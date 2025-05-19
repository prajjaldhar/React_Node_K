import React from "react";
import ProductCard from "./ProductCard";

const WishList = () => {
  return (
    <div className="p-12">
      <div className="bg-gray-100 shadow-blue-300 shadow-2xl">
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              My Wishlist
            </h2>
            {/* Wishlist Items */}
            <div className="flex flex-wrap gap-3 p-5 mb space-x-8">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WishList;
