import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import ProductCard from "../Components/ProductCard";

const MobilesPage = () => {
  return (
    <div className="bg-blue-100">
      <NavBar />
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-2xl shadow-blue-300">
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
            </div>
          </aside>
          {/* Products Grid */}
          <div className="mx-auto p-8 bg-gray-100 rounded-xl shadow-2xl shadow-blue-300">
            <div className="flex flex-wrap gap-8">
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MobilesPage;
