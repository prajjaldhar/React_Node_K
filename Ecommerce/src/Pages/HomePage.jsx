import React from "react";
import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import IconCards from "../Components/IconCards";
import ProductCard from "../Components/ProductCard";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";

const HomePage = ({ ...productdata }) => {
  console.log(productdata);

  return (
    <div>
      <NavBar />
      <HeroSection />
      <IconCards />
      <div className="mx-auto p-12 font-bold text-2xl">
        <h1>New Products</h1>
        <div className="lg:flex lg:flex-wrap px-14 mt-5 lg:px-36 lg:gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="mx-auto p-12 font-bold text-2xl">
        <h1>New Products</h1>
        <div className="lg:flex lg:flex-wrap px-14 mt-5 lg:px-36 lg:gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <Banner />
      <div className="mx-auto p-12 font-bold text-2xl">
        <h1>New Products</h1>
        <div className="lg:flex lg:flex-wrap px-14 mt-5 lg:px-36 lg:gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="mx-auto p-12 font-bold text-2xl">
        <h1>New Products</h1>
        <div className="lg:flex lg:flex-wrap px-14 mt-5 lg:px-36 lg:gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <Banner />
      <IconCards />
      <Footer />
    </div>
  );
};

export default HomePage;
