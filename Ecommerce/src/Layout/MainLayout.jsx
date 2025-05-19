import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet /> {/* This will render the child route component */}
      <Footer />
    </>
  );
};

export default MainLayout;
