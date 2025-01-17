import React, { useState, useEffect } from "react";

const ListComponent = ({ categories }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {isLoading
        ? // Render shimmer placeholders
          Array(categories.length)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="flex justify-center">
                <div className="bg-white h-32 flex shadow-lg rounded-lg w-full sm:w-80 animate-pulse">
                  <div className="bg-gray-300 w-16 h-12 rounded-full m-4"></div>
                  <div className="bg-gray-200 w-full rounded-r-lg flex flex-col justify-center p-4 gap-2">
                    <div className="bg-gray-300 h-6 w-3/4 rounded"></div>
                    <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
                  </div>
                </div>
              </div>
            ))
        : // Render actual categories
          categories.map((category, index) => (
            <div key={index} className="flex justify-center">
              <div className="bg-white h-32 flex shadow-lg rounded-lg w-full sm:w-80">
                <h1 className="bg-black w-16 h-12 text-lg rounded-full flex items-center justify-center relative top-5 lg:relative lg:top-5 text-white m-4">
                  {String(category.id).padStart(2, "0")}
                </h1>
                <div
                  className={`${category.bgcolor} w-full rounded-r-lg flex flex-col justify-center p-4`}
                >
                  <p className="text-xl font-bold text-white">
                    {category.name}
                  </p>
                  <div className="mt-2 flex gap-3 text-white flex-wrap">
                    {category.items.map((x, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="bg-white/20 px-2 py-1 rounded text-[4px] sm:text-[6px] md:text-[10px] inline-block"
                      >
                        {x}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default ListComponent;
