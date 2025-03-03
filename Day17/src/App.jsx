import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./services/CartContext";
import { DataProvider } from "./services/DataContext";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import MoviesPage from "./Pages/MoviesPage";
import SearchPage from "./Pages/SearchPage";
import ShowDescriptionPage from "./Pages/ShowDescription";
import WishListPage from "./Pages/WishListItems";

const App = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <CartProvider>
      <DataProvider>
        <Router>
          <div className="h-screen bg-gradient-to-r from-slate-950 to-black flex relative">
            {/* Navbar with Fixed Sidebar */}
            <div
              className={`absolute cursor-pointer h-full top-0 left-0 bg-slate-950 transition-all duration-300 ${
                isExpanded ? "w-64" : "w-22"
              }`}
              onMouseEnter={() => setIsExpanded(true)}
              onMouseLeave={() => setIsExpanded(false)}
            >
              <Navbar />
            </div>

            {/* Main Content with Routing */}
            <div className="flex-1 overflow-y-auto p-6 ml-28">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/wishlist" element={<WishListPage />} />
                <Route path="/show/:showId" element={<ShowDescriptionPage />} />
              </Routes>
            </div>
          </div>
        </Router>
      </DataProvider>
    </CartProvider>
  );
};

export default App;
