import React, { useState } from "react";

function SlidingPanel() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative h-screen flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-72 w-full text-center bg-gray-900 text-white transform transition-all duration-700 ease-in-out z-20 lg:h-full lg:w-60 sm:w-1/2 ${
          isOpen
            ? "lg:translate-x-0 sm:translate-y-0"
            : "lg:-translate-x-full sm:-translate-y-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mt-16 mb-8">ChatGPT Sidebar</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
              <span>🏠</span>
              <span>Home</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
              <span>📄</span>
              <span>My Files</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
              <span>⚙️</span>
              <span>Settings</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
              <span>❓</span>
              <span>Help</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={togglePanel}
        className="fixed top-4 left-4 z-30 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
      >
        {isOpen ? (
          // Close Icon (X)
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          // Hamburger Menu Icon
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        )}
      </button>

      {/* Main Content */}
      <div
        className={`flex-1 p-8 transition-all duration-500 ${
          isOpen ? "ml-60" : "ml-12"
        } lg:ml-60 sm:ml-1/2`}
      >
        <h1 className="text-3xl font-bold mb-4">Main Content Area</h1>
        <p>
          Welcome to the main content area! This content shifts when the sidebar
          is opened or closed.
        </p>
      </div>
    </div>
  );
}

export default SlidingPanel;
