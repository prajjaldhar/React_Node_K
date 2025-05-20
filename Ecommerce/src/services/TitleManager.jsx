import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TitleManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const getTitleFromPath = (pathname) => {
      switch (pathname) {
        case "/":
          return "Login - Croma";
        case "/signup":
          return "Signup - Croma";
        case "/home":
          return "Home - Croma";
        case "/product":
          return "Product Description - Croma";
        case "/checkout":
          return "Checkout - Croma";
        case "/wishlist":
          return "Wishlist - Croma";
        case "/mobile":
          return "Mobiles - Croma";
        case "/laptop":
          return "Laptop - Croma";
        case "/cooler":
          return "Cooler - Croma";
        case "/ac":
          return "AC - Croma";
        case "/returns":
          return "Returns & Refunds - Croma";
        case "/faqs":
          return "FAQs - Croma";
        case "/contact":
          return "Contact Us - Croma";
        case "/ordertracking":
          return "Track Your Order - Croma";
        case "/privacy":
          return "Privacy Policy - Croma";
        default:
          return "Croma";
      }
    };

    document.title = getTitleFromPath(pathname);
  }, [pathname]);

  return null;
};

export default TitleManager;
