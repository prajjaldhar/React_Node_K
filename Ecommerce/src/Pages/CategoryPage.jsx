import React from "react";
import ProductCard from "../Components/ProductCard";
import { useParams, Navigate } from "react-router-dom";
import { useProduct } from "../services/ProductContextApi";

const allowedCategories = ["mobile", "laptop", "ac", "cooler"];

const CategoryPage = () => {
  const { category } = useParams();
  console.log(`category from category page>>>>`, category);
  const products = useProduct();

  const filteredProducts = products?.filter(
    (prod) => prod.type.toLowerCase() === category.toLowerCase()
  );
  console.log(filteredProducts);

  if (!allowedCategories.includes(category)) {
    return <Navigate to="*" replace />;
  }

  return (
    <div className="bg-blue-100 mt-25 -mb-20">
      <section className="py-8 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-2xl shadow-blue-300 min-h-screen flex flex-col">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Filters
            </h2>
            {/* Price Range */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Price Range
              </h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Under ₹10,000
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    ₹10,000 - ₹20,000
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    ₹20,000 - ₹30,000
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Above ₹30,000
                  </span>
                </label>
              </div>
              {/* Advertisement Banner */}
              <div className="mt-8 bg-indigo-100 border border-indigo-300 rounded-lg p-4 shadow-md">
                <h3 className="text-sm font-semibold text-indigo-800 mb-2">
                  🔥 Limited Time Offer
                </h3>
                <p className="text-xs text-indigo-700 mb-3">
                  Get up to <span className="font-bold">30% OFF</span> on top
                  smartphones. Hurry, offer ends soon!
                </p>
                <img
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1735496002/Croma%20Assets/Large%20Appliances/Air%20Conditioner/Images/312475_gncie3.png?tr=w-400" // You can replace with your own mobile/product ad banner
                  alt="Ad Banner"
                  className="w-full h-24 object-cover rounded-md mb-3"
                />
                <button className="w-full bg-indigo-600 text-white text-xs py-2 rounded hover:bg-indigo-700 transition">
                  Shop Now
                </button>
              </div>
            </div>
            {/* Brand Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Brand</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                  />
                  <span className="ml-2 text-sm text-gray-600">Samsung</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                  />
                  <span className="ml-2 text-sm text-gray-600">Apple</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                  />
                  <span className="ml-2 text-sm text-gray-600">OnePlus</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                  />
                  <span className="ml-2 text-sm text-gray-600">Vivo</span>
                </label>
              </div>
              <div className="mt-8 bg-yellow-50 border border-yellow-300 rounded-lg p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-yellow-800 mb-2">
                  🎧 Trending Gadgets
                </h3>
                <p className="text-xs text-yellow-700 mb-2">
                  Grab smartwatches and wireless earbuds at crazy discounts!
                </p>
                <img
                  src="https://i.imgur.com/7E2oHq3.png"
                  alt="Gadget Ad"
                  className="w-full h-20 object-cover rounded mb-2"
                />
                <button className="w-full bg-yellow-600 text-white text-xs py-2 rounded hover:bg-yellow-700">
                  Explore Deals
                </button>
              </div>
            </div>
            {/* RAM Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">RAM</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                  />
                  <span className="ml-2 text-sm text-gray-600">4 GB</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                  />
                  <span className="ml-2 text-sm text-gray-600">6 GB</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                  />
                  <span className="ml-2 text-sm text-gray-600">8 GB</span>
                </label>
              </div>
              <div className="mt-8 bg-pink-100 border border-pink-200 rounded-lg p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-pink-800 mb-2">
                  🛍️ New Season Arrivals
                </h3>
                <p className="text-xs text-pink-700 mb-2">
                  Refresh your wardrobe with latest fashion starting ₹499.
                </p>
                <img
                  src="https://i.imgur.com/kElqwsf.png"
                  alt="Fashion Ad"
                  className="w-full h-20 object-cover rounded mb-2"
                />
                <button className="w-full bg-pink-600 text-white text-xs py-2 rounded hover:bg-pink-700">
                  Shop Fashion
                </button>
              </div>
            </div>
            {/* Storage Filter */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Storage
              </h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                  />
                  <span className="ml-2 text-sm text-gray-600">64 GB</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                  />
                  <span className="ml-2 text-sm text-gray-600">128 GB</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                  />
                  <span className="ml-2 text-sm text-gray-600">256 GB</span>
                </label>
              </div>
              <div className="mt-8 bg-blue-100 border border-blue-200 rounded-lg p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-blue-800 mb-2">
                  ✈️ Travel this Summer
                </h3>
                <p className="text-xs text-blue-700 mb-2">
                  Book domestic flights at up to 50% OFF. Limited seats
                  available!
                </p>
                <img
                  src="https://i.imgur.com/KsW9ZtG.png"
                  alt="Travel Ad"
                  className="w-full h-20 object-cover rounded mb-2"
                />
                <button className="w-full bg-blue-600 text-white text-xs py-2 rounded hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          </aside>
          {/* Products Grid */}
          <div className="w-full lg:w-3/4 p-6 bg-gray-100 rounded-xl shadow-2xl shadow-blue-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
