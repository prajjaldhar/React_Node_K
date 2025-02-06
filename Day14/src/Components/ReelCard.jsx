import React from "react";
import {
  BookmarkIcon,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Send,
} from "lucide-react";

const ReelCard = ({
  key,
  loading,
  profileName,
  profileDescription,
  videoSrc,
}) => {
  return (
    <div key={key} className="relative w-80 h-[500px] bg-gray-900 rounded-xl">
      {loading ? (
        // Shimmer Effect
        <div className="w-full h-full bg-gray-800 animate-pulse"></div>
      ) : (
        // Video
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        ></video>
      )}

      {/* Profile Section */}
      <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-black/40 p-2 rounded-lg">
        {loading ? (
          <div className="w-10 h-10 rounded-full bg-gray-600 animate-pulse"></div>
        ) : (
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-gray-400"
          />
        )}
        <div>
          <p
            className={`text-sm font-semibold ${
              loading
                ? "w-16 h-4 bg-gray-600 rounded animate-pulse"
                : "text-white"
            }`}
          >
            {loading ? "" : profileName}
          </p>
          <p
            className={`text-xs ${
              loading
                ? "w-24 h-3 bg-gray-600 rounded animate-pulse"
                : "text-gray-400"
            }`}
          >
            {loading ? "" : profileDescription}
          </p>
        </div>
      </div>

      {/* Right Side Icons - Centered Vertically */}
      <div className="absolute -right-12 -bottom-22 transform -translate-y-1/2 flex flex-col items-center space-y-6 text-white">
        <Heart
          className="cursor-pointer hover:scale-110 hover:text-red-500 transition-all duration-200"
          size={28}
        />
        <MoreHorizontal
          className="cursor-pointer hover:scale-110 hover:text-gray-400 transition-all duration-200"
          size={28}
        />
        <MessageCircle
          className="cursor-pointer hover:scale-110 hover:text-gray-400 transition-all duration-200"
          size={28}
        />
        <Send
          className="cursor-pointer hover:scale-110 hover:text-blue-400 transition-all duration-200"
          size={28}
        />
        <BookmarkIcon
          className="cursor-pointer hover:scale-110 hover:text-blue-400 transition-all duration-200"
          size={28}
        />
      </div>
    </div>
  );
};

export default ReelCard;
