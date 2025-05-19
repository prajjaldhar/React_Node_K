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
          return "signup - Croma";
        case "/home":
          return "Home - Croma";
        default:
          return "Croma";
      }
    };
    document.title = getTitleFromPath(pathname);
  }, [pathname]);

  return null;
};

export default TitleManager;
