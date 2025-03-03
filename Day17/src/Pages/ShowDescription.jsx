import React, { useContext } from "react";
import { useParams } from "react-router-dom"; // To get the show ID from URL
import { useData } from "../services/DataContext"; // Fetch show details
import { CartContext } from "../services/CartContext"; // ✅ Import Wishlist Context
import { FaPlay, FaPlus } from "react-icons/fa"; // Play & Wishlist Icons

const ShowDescriptionPage = () => {
  const { showId } = useParams(); // Get the show ID from the URL
  const { shows } = useData(); // Fetch all shows
  const { addToWishlist, wishlist } = useContext(CartContext); // ✅ Get Wishlist function

  // Find the show based on the ID
  const show = shows.find((s) => s.id === parseInt(showId));

  // If no show is found
  if (!show) {
    return (
      <div className="text-white text-center mt-64 text-7xl font-bold">
        Show Not Found!
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto my-14 text-white grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Column: Show Image */}
      <div className="relative overflow-hidden rounded-lg shadow-xl">
        <img
          src={show.image}
          alt={show.name}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right Column: Show Description */}
      <div>
        <h2 className="text-4xl font-bold mb-4">{show.name}</h2>
        <p className="text-gray-300 text-lg mb-6">{show.description}</p>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 text-lg font-semibold rounded-md transition">
            <FaPlay /> Play
          </button>
          <button
            onClick={() => addToWishlist(show)} // ✅ Add to Wishlist
            className={`flex items-center gap-2 ${
              wishlist.some((w) => w.id === show.id)
                ? "bg-green-600"
                : "bg-gray-800 hover:bg-gray-700"
            } px-6 py-3 text-lg font-semibold rounded-md transition`}
          >
            <FaPlus />{" "}
            {wishlist.some((w) => w.id === show.id)
              ? "Added"
              : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowDescriptionPage;
