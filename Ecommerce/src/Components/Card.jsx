import React from "react";

const Card = () => {
  return (
    <div>
      <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1744726772/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Whats%20Hot/April/16042025/Desktop/HP_Whats_Hot_AC_16April2025_grmquv.jpg"
            alt="Product Image"
          />
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
            25% OFF
          </span>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-sm font-medium text-gray-800">
            Nothing Watch Pro 2 Smartwatch
          </h3>
          <p className="text-xs text-gray-500">
            Bluetooth Calling, 33.52mm AMOLED Display, IP68 Water Resistant
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">₹4,499</span>
            <span className="text-sm line-through text-gray-500">₹5,999</span>
          </div>
          <button className="w-full bg-indigo-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-indigo-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
