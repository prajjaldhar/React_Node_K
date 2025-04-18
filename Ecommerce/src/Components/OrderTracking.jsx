import React from "react";

const OrderTracking = () => {
  return (
    <div className="bg-blue-100">
      <section className="max-w-4xl mx-auto px-4 shadow-x py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Track Your Order
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form action="#" method="POST" className="space-y-4">
            <div>
              <label
                htmlFor="orderNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Order Number
              </label>
              <input
                type="text"
                id="orderNumber"
                name="orderNumber"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Track Order
              </button>
            </div>
          </form>
        </div>
        {/* Order Status Section (Example) */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Order Status</h3>
          <div className="space-y-2">
            <p>
              <strong>Order Number:</strong> #CROMA123456
            </p>
            <p>
              <strong>Placed On:</strong> April 15, 2025
            </p>
            <p>
              <strong>Estimated Delivery:</strong> April 20, 2025
            </p>
            <p>
              <strong>Current Status:</strong>{" "}
              <span className="text-green-600 font-medium">Shipped</span>
            </p>
          </div>
          {/* Bubble Stepper */}
          <div className="mt-6">
            <div className="flex items-center justify-between">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  1
                </div>
                <span className="mt-2 text-sm">Order Placed</span>
              </div>
              {/* Connector */}
              <div className="flex-1 h-0.5 bg-blue-600 mx-2" />
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  2
                </div>
                <span className="mt-2 text-sm">Processing</span>
              </div>
              {/* Connector */}
              <div className="flex-1 h-0.5 bg-blue-600 mx-2" />
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  3
                </div>
                <span className="mt-2 text-sm">Shipped</span>
              </div>
              {/* Connector */}
              <div className="flex-1 h-0.5 bg-gray-300 mx-2" />
              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center">
                  4
                </div>
                <span className="mt-2 text-sm">Out for Delivery</span>
              </div>
              {/* Connector */}
              <div className="flex-1 h-0.5 bg-gray-300 mx-2" />
              {/* Step 5 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center">
                  5
                </div>
                <span className="mt-2 text-sm">Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderTracking;
