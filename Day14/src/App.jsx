import React, { useState, useEffect } from "react";
import ReelCard from "./Components/ReelCard";
import mockData from "./utility/data";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black overflow-auto">
      <div className="space-y-4">
        {/* Shimmer Effect for the first ReelCard */}
        {mockData.length > 0 &&
          mockData.map((reel) => (
            <ReelCard
              key={reel.id}
              profileName={loading ? "" : reel.title}
              profileDescription={loading ? "" : `Duration: ${reel.duration}`}
              videoSrc={loading ? "" : reel.url}
              loading={loading} // Pass loading prop to ReelCard
            />
          ))}
      </div>
    </div>
  );
};

export default App;
