import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 mt-20 text-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-xl font-bold text-indigo-600">CromaX</h2>
            <p className="mt-4 text-sm">
              Your one-stop shop for the latest electronics and gadgets.
            </p>
          </div>
          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Shop
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/mobiles" className="hover:text-indigo-600">
                  Mobiles
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600">
                  Laptops
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600">
                  TVs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600">
                  Accessories
                </a>
              </li>
            </ul>
          </div>
          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Support
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:text-indigo-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-indigo-600">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-indigo-600">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/ordertracking" className="hover:text-indigo-600">
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact & Social Media */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Contact
            </h3>
            <p className="mt-4 text-sm">
              123 Tech Street, Jaipur, Rajasthan, India
            </p>
            <p className="mt-2 text-sm">Email: support@cromax.com</p>
            <p className="mt-2 text-sm">Phone: +91 98765 43210</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-indigo-600">
                {/* Facebook Icon */}
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-2.9h2v-2.2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.9h2.3l-.4 2.9h-1.9v7A10 10 0 0022 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600">
                {/* Twitter Icon */}
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 19c7.5 0 11.6-6.2 11.6-11.6v-.5A8.3 8.3 0 0022 5.9a8.1 8.1 0 01-2.4.7 4.1 4.1 0 001.8-2.3 8.2 8.2 0 01-2.6 1 4.1 4.1 0 00-7 3.7A11.6 11.6 0 013 4.8a4.1 4.1 0 001.3 5.5 4 4 0 01-1.9-.5v.1a4.1 4.1 0 003.3 4 4.1 4.1 0 01-1.9.1 4.1 4.1 0 003.8 2.8A8.3 8.3 0 012 17.5a11.7 11.7 0 006 1.8" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600">
                {/* Instagram Icon */}
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="bg-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>© 2025 CromaX. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link to="/privacy" className="hover:text-indigo-600">
                Privacy Policy
              </Link>
              <Link to="/termsandcondition" className="hover:text-indigo-600">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
