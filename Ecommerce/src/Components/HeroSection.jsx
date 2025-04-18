import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-50 md:h-82 lg:h-screen bg-[url('https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1744715049/Croma%20Assets/CMS/LP%20Page%20Banners/2025/HP%20Rotating%20Banners/April/1604205/Desktop/HP_Rotating_iPhone_16April2025_unrfbv.jpg')] bg-cover bg-center flex items-center justify-center mb-14">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      {/* <div className="relative z-10 text-center px-6 text-white max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Discover the Latest in Electronics
        </h1>
        <p className="text-lg mb-6">
          Upgrade your lifestyle with cutting-edge gadgets and unbeatable deals.
        </p>
        <a
          href="#"
          className="inline-block bg-indigo-600 px-6 py-3 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
        >
          Shop Now
        </a>
      </div> */}
    </section>
  );
};

export default HeroSection;
