import React from "react";

const AddToCart = () => {
  return (
    <div className="p-12 ">
      <section className="bg-gray-50 py-12 shadow-xl shadow-blue-400">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Your Shopping Cart
          </h2>
          {/* Cart Items */}
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-42">
              <img
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717426045/Croma%20Assets/Large%20Appliances/Air%20Cooler/Images/223253_0_bxsm2j.png?tr=w-400"
                alt="Product Image"
                className="w-32 h-32 object-cover rounded-md mb-4 md:mb-0"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  Nothing Watch Pro 2 Smartwatch
                </h3>
                <p className="text-sm text-gray-500">
                  Bluetooth Calling | 33.52mm AMOLED Display | IP68 Water
                  Resistant
                </p>
                <div className="mt-4 flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 rounded">
                    <button className="px-2 py-1 font-bold text-gray-600 hover:text-indigo-600">
                      −
                    </button>
                    <span className="px-4">1</span>
                    <button className="px-2 py-1 font-bold text-gray-600 hover:text-indigo-600">
                      +
                    </button>
                  </div>
                  <span className="text-lg font-bold text-gray-900">
                    ₹4,499
                  </span>
                </div>
              </div>
              <button className="mt-4 md:mt-0 text-red-500 hover:underline">
                Remove
              </button>
            </div>
          </div>
          {/* Order Summary */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Order Summary
            </h3>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Subtotal</span>
              <span>₹4,499</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Shipping</span>
              <span>₹99</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-4">
              <span>Tax</span>
              <span>₹81</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-900 border-t pt-4">
              <span>Total</span>
              <span>₹4,679</span>
            </div>
            <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddToCart;
