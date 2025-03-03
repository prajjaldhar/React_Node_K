import React, { useState, useContext } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import { CartContext } from "../services/CartContext";
import {
  FaHome,
  FaSearch,
  FaTv,
  FaFilm,
  FaList,
  FaRunning,
} from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";

const Navbar = () => {
  const { wishlist } = useContext(CartContext);

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside
      className={`h-screen ${
        isExpanded ? "w-72" : "w-32"
      } transition-all duration-300 p-8 flex flex-col 
       fixed left-0 top-0 z-50 backdrop-blur-lg shadow-2xl text-white `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Logo (Fixed Position) */}
      <div className="mb-10 flex items-center">
        <img
          src="https://img.hotstar.com/image/upload/v1737554969/web-assets/prod/images/rebrand/logo.png"
          alt="Logo"
          className="w-12 h-11"
        />
        <h2
          className={`text-2xl font-bold transition-opacity duration-300 ${
            isExpanded ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          JioHotStar
        </h2>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col gap-9 p-4 text-lg">
        {[
          { icon: <FaHome />, text: "Home", link: "/" },
          { icon: <FaSearch />, text: "Search", link: "/search" },
          { icon: <FaTv />, text: "TV", link: "/tv" },
          { icon: <FaFilm />, text: "Movies", link: "/movies" }, // ✅ Movies link added
          { icon: <FaRunning />, text: "Sports", link: "/sports" },
          { icon: <FaList />, text: "Categories", link: "/categories" },
        ].map(({ icon, text, link }, index) => (
          <li key={index} className="relative">
            <Link
              to={link}
              className="flex items-center gap-6 cursor-pointer hover:text-indigo-400 text-2xl transition-all duration-300"
            >
              <span className="text-2xl">{icon}</span>
              <span
                className={`absolute left-16 whitespace-nowrap text-lg font-semibold transition-opacity duration-300 ${
                  isExpanded ? "opacity-100" : "opacity-0"
                }`}
              >
                {text}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Cart Section */}
      <div className="mt-auto flex items-center">
        <Link to="/wishlist" className="flex items-center gap-2">
          <BsCartFill className="text-3xl hover:scale-110 transition-transform duration-300" />
          <span
            className={`bg-red-600 text-white text-xs px-2 py-1 rounded-full transition-opacity duration-300 ${
              isExpanded ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            {wishlist.length}
          </span>
        </Link>
      </div>
    </aside>
  );
};

export default Navbar;
