import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-indigo-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Upgrade Your Tech Today
            </h1>
            <p className="text-lg text-gray-600">
              Discover the latest in electronics with unbeatable deals and top
              brands.
            </p>
            <a
              href="#"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
            >
              Shop Now
            </a>
          </div>
          {/* Image */}
          <div className="relative">
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1744697806/Croma%20Assets/CMS/LP%20Page%20Banners/2025/campaigns/Summer%20saving%20days%20april/HP%20Top%20Banner%20new%20ICICI/Sale%20is%20live/HP_summer-sale_15April2025_edf2vv.jpg"
              alt="Electronics Banner"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
