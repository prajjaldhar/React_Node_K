import React from "react";

const FAQ = () => {
  return (
    <div>
      <div className="bg-blue-100">
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-lg shadow-xl shadow-blue-300 p-4">
              <input type="checkbox" id="faq1" className="peer hidden" />
              <label
                htmlFor="faq1"
                className="flex justify-between items-center cursor-pointer"
              >
                <span className="font-medium text-lg">
                  Can I return an opened product?
                </span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 peer-checked:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </label>
              <div className="mt-2 text-sm text-gray-600 hidden peer-checked:block">
                Products should be returned in their original condition. Opened
                products may be subject to inspection before a refund is
                processed.
              </div>
            </div>
            {/* FAQ Item 2 */}
            <div className="bg-white rounded-lg shadow-xl shadow-blue-300 p-4">
              <input type="checkbox" id="faq2" className="peer hidden" />
              <label
                htmlFor="faq2"
                className="flex justify-between items-center cursor-pointer"
              >
                <span className="font-medium text-lg">
                  How will I receive my refund?
                </span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 peer-checked:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </label>
              <div className="mt-2 text-sm text-gray-600 hidden peer-checked:block">
                Refunds are processed to the original payment method within 5-7
                working days after the returned product passes inspection.
              </div>
            </div>
            {/* FAQ Item 3 */}
            <div className="bg-white rounded-lg shadow-xl shadow-blue-300 p-4">
              <input type="checkbox" id="faq3" className="peer hidden" />
              <label
                htmlFor="faq3"
                className="flex justify-between items-center cursor-pointer"
              >
                <span className="font-medium text-lg">
                  Are there any items that cannot be returned?
                </span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 peer-checked:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </label>
              <div className="mt-2 text-sm text-gray-600 hidden peer-checked:block">
                Certain items like software, personal care products, and
                perishable goods are non-returnable. Please refer to our
                detailed return policy for more information.
              </div>
            </div>
            {/* FAQ Item 4 */}
            <div className="bg-white rounded-lg shadow-xl shadow-blue-300 p-4">
              <input type="checkbox" id="faq4" className="peer hidden" />
              <label
                htmlFor="faq4"
                className="flex justify-between items-center cursor-pointer"
              >
                <span className="font-medium text-lg">
                  How do I track my order?
                </span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 peer-checked:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </label>
              <div className="mt-2 text-sm text-gray-600 hidden peer-checked:block">
                You can track your order by logging into your account and
                navigating to the 'My Orders' section.
              </div>
            </div>
            {/* FAQ Item 5 */}
            <div className="bg-white rounded-lg shadow-xl shadow-blue-300 p-4">
              <input type="checkbox" id="faq5" className="peer hidden" />
              <label
                htmlFor="faq5"
                className="flex justify-between items-center cursor-pointer"
              >
                <span className="font-medium text-lg">
                  What payment methods are accepted?
                </span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 peer-checked:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </label>
              <div className="mt-2 text-sm text-gray-600 hidden peer-checked:block">
                We accept various payment methods including credit/debit cards,
                net banking, UPI, and cash on delivery.
              </div>
            </div>
            {/* FAQ Item 6 */}
            <div className="bg-white rounded-lg shadow-xl shadow-blue-300 p-4">
              <input type="checkbox" id="faq6" className="peer hidden" />
              <label
                htmlFor="faq6"
                className="flex justify-between items-center cursor-pointer"
              >
                <span className="font-medium text-lg">
                  What payment methods are accepted?
                </span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 peer-checked:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </label>
              <div className="mt-2 text-sm text-gray-600 hidden peer-checked:block">
                We accept various payment methods including credit/debit cards,
                net banking, UPI, and cash on delivery.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
