import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="bg-white shadow-gray-900 fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/home" className="text-2xl font-bold text-indigo-600">
                CromaX
              </Link>
            </div>
            {/* Search Bar */}
            <div className="w-full max-w-md mx-6 hidden md:block">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {/* Right Icons */}
            <div className="flex items-center space-x-6 relative">
              <div className="relative group hidden md:inline">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-indigo-600 font-medium text-sm"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" y1="12" x2="3" y2="12" />
                  </svg>
                </Link>
                <div className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all text-xs bg-black text-white px-2 py-1 rounded-md">
                  Login
                </div>
              </div>

              {/* Wishlist Icon */}
              <div className="relative group">
                <Link
                  to="/wishlist"
                  className="text-gray-700 hover:text-indigo-600 relative"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.8 4.6c-1.5-1.4-4-1.4-5.5 0l-.8.8-.8-.8c-1.5-1.4-4-1.4-5.5 0-1.6 1.5-1.6 4 0 5.5l6.3 6.2 6.3-6.2c1.6-1.5 1.6-4 0-5.5z" />
                  </svg>
                </Link>
                <div className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all text-xs bg-black text-white px-2 py-1 rounded-md">
                  Wishlist
                </div>
              </div>

              {/* Cart Icon */}
              <div className="relative group">
                <Link
                  to="/checkout"
                  className="text-gray-700 hover:text-indigo-600 relative"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                    <circle cx={9} cy={21} r={1} />
                    <circle cx={20} cy={21} r={1} />
                  </svg>
                </Link>
                <div className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all text-xs bg-black text-white px-2 py-1 rounded-md">
                  Cart
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Categories */}
          <div className="hidden md:flex justify-center space-x-8 py-2 border-t border-gray-200 text-sm text-gray-700">
            <Link to="/mobiles" className="hover:text-indigo-600">
              Mobiles
            </Link>
            <a href="#" className="hover:text-indigo-600">
              Laptops
            </a>
            <a href="#" className="hover:text-indigo-600">
              TVs
            </a>
            <a href="#" className="hover:text-indigo-600">
              Appliances
            </a>
            <a href="#" className="hover:text-indigo-600">
              Accessories
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
