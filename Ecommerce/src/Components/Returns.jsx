import React from "react";

const Returns = () => {
  return (
    <div className="bg-blue-100">
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Returns &amp; Support
          </h2>
          {/* Return Policy Overview */}
          <div className="bg-white p-6 rounded-lg shadow-xl shadow-blue-400 mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Return Policy Overview
            </h3>
            <p className="text-gray-600 mb-2">
              At Croma, we strive to ensure customer satisfaction. If you're not
              satisfied with your purchase, you can return most items within 7
              days of delivery. Please ensure the product is in its original
              condition with all accessories and packaging intact.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                Mobile Phones, Laptops, Tablets, and Accessories: 7-day return
                window
              </li>
              <li>Product must be unused and in original packaging</li>
              <li>
                Refunds processed within 5-7 working days after inspection
              </li>
            </ul>
          </div>
          {/* How to Initiate a Return */}
          <div className="bg-white p-6 rounded-lg shadow-xl shadow-blue-400 mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              How to Initiate a Return
            </h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Log in to your Croma account and navigate to 'My Orders'.</li>
              <li>
                Select the order you wish to return and click on 'Return Item'.
              </li>
              <li>
                Choose the reason for return and provide any additional details.
              </li>
              <li>Our support team will contact you to schedule a pickup.</li>
              <li>
                Once the product is received and inspected, the refund will be
                processed.
              </li>
            </ol>
          </div>
          {/* Contact Support */}
          <div className="bg-white p-6 rounded-lg shadow-xl shadow-blue-400 mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Need Assistance?
            </h3>
            <p className="text-gray-600 mb-2">
              If you have any questions or need further assistance, feel free to
              reach out to our customer support team.
            </p>
            <ul className="text-gray-600">
              <li>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+917207666000"
                  className="text-indigo-600 hover:underline"
                >
                  +91 7207-666-000
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:customersupport@croma.com"
                  className="text-indigo-600 hover:underline"
                >
                  customersupport@croma.com
                </a>
              </li>
              <li>
                <strong>WhatsApp:</strong> Send 'Hi' to{" "}
                <a
                  href="https://wa.me/919452594525"
                  className="text-indigo-600 hover:underline"
                >
                  9452594525
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Returns;
