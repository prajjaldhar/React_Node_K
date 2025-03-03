import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // ✅ Import Search Icon
import ProductList from "../Components/ProductList";
import { useData } from "../services/DataContext"; // ✅ Get shows data

const SearchPage = () => {
  const { shows } = useData(); // ✅ Get all shows
  const [searchTerm, setSearchTerm] = useState(""); // ✅ State for search input

  // Function to filter shows based on search input
  const filteredShows = shows.filter(
    (show) => show.name.toLowerCase().includes(searchTerm.toLowerCase()) // ✅ Case-insensitive search
  );

  return (
    <>
      {/* Search Bar */}
      <div className="relative p-3 flex">
        <input
          type="text"
          placeholder="Search Movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // ✅ Update state on input change
          className="bg-slate-800 text-white text-xl p-5 pl-20 w-full rounded-md outline-none"
        />
        <FaSearch className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
      </div>
      {/* Display Filtered Results */}
      <ProductList shows={filteredShows} /> {/* ✅ Pass filtered shows */}
    </>
  );
};

export default SearchPage;
