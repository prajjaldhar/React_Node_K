import React from "react";
import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import IconCards from "../Components/IconCards";
import ProductCard from "../Components/ProductCard";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import { useProduct } from "../services/ProductContextApi";

const HomePage = () => {
  const products = useProduct();
  console.log("products>>>>>", products);
  const Ac = products.filter((product) => product.type === "Ac");
  const Mobiles = products.filter((product) => product.type === "Mobile");
  const Laptops = products.filter((product) => product.type === "Laptop");
  const Coolers = products.filter((product) => product.type === "Cooler");
  return (
    <div>
      <HeroSection />
      <IconCards />
      <div className="mx-auto p-12 font-bold text-2xl">
        <h1>New AC</h1>
        <div className="lg:flex lg:flex-wrap px-14 mt-5 lg:px-36 lg:gap-6">
          {products &&
            Ac.slice(0, 8).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
      </div>
      <div className="mx-auto p-12 font-bold text-2xl">
        <h1>New Products</h1>
        <div className="lg:flex lg:flex-wrap px-14 mt-5 lg:px-36 lg:gap-6">
          {products &&
            Mobiles.slice(0, 8).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
      </div>
      <Banner />
      <div className="mx-auto p-12 font-bold text-2xl">
        <h1>New Laptops</h1>
        <div className="lg:flex lg:flex-wrap px-14 mt-5 lg:px-36 lg:gap-6">
          {products &&
            Laptops.slice(0, 8).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
      </div>
      <div className="mx-auto p-12 font-bold text-2xl">
        <h1>New Coolers</h1>
        <div className="lg:flex lg:flex-wrap px-14 mt-5 lg:px-36 lg:gap-6">
          {products &&
            Coolers.slice(0, 8).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
      </div>
      <Banner />
      <IconCards />
    </div>
  );
};

export default HomePage;
