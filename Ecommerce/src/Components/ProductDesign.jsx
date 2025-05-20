import React from "react";

const ProductDesign = () => {
  return (
    <div className="mt-25">
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717426045/Croma%20Assets/Large%20Appliances/Air%20Cooler/Images/223253_0_bxsm2j.png?tr=w-400"
              alt="Product Image"
              className="w-full rounded-xl shadow-lg"
            />
            <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
              25% OFF
            </span>
          </div>
          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Nothing Watch Pro 2 Smartwatch
            </h1>
            <p className="text-sm text-gray-500">
              Bluetooth Calling | 33.52mm AMOLED Display | IP68 Water Resistant
            </p>
            {/* Pricing */}
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-gray-900">₹4,499</span>
              <span className="text-sm line-through text-gray-500">₹5,999</span>
              <span className="text-sm text-green-600 font-semibold">
                Inclusive of all taxes
              </span>
            </div>
            {/* Add to Cart Button */}
            <button className="w-full bg-indigo-600 text-white text-sm font-medium py-3 rounded-lg hover:bg-indigo-700 transition">
              Add to Cart
            </button>
            {/* Product Description */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Product Description
              </h2>
              <p className="text-sm text-gray-600">
                Experience the future of wearable technology with the Nothing
                Watch Pro 2. Featuring seamless Bluetooth calling, a vibrant
                33.52mm AMOLED display, and IP68 water resistance, this
                smartwatch is designed for both style and functionality.
              </p>
            </div>
            {/* Specifications */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Specifications
              </h2>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Display: 33.52mm AMOLED</li>
                <li>Connectivity: Bluetooth 5.0</li>
                <li>Water Resistance: IP68</li>
                <li>Battery Life: Up to 7 days</li>
                <li>Compatibility: Android &amp; iOS</li>
              </ul>
            </div>
            {/* Customer Reviews */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Customer Reviews
              </h2>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1 text-yellow-500">
                  {/* Star Icons */}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                  </svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                  </svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                  </svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                  </svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600">
                  (4.8/5 based on 1,234 reviews)
                </span>
              </div>
            </div>
            {/* Trust Badges */}
            <div className="flex space-x-4 mt-6">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm5 8l-6 6-3-3 1.5-1.5L9 11l4.5-4.5L15 8z" />
                </svg>
                <span className="text-sm text-gray-600">
                  100% Genuine Products
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDesign;
