import React, { useEffect, useState } from "react";

const MyPlugin = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    FetchData();
  }, []);
  return (
    <div className="h-screen">
      <div className="w-[100%] h-[100%] bg-black shadow-lg-lg p-8">
        {" "}
        <h1 className="font-title text-3xl text-center text-neutral-50 mb-8">
          Customer Reviews
        </h1>
        <div className="grid grid-cols-3 gap-8">
          {data &&
            data.slice(0, 9).map((item, index) => (
              <div key={index} className="bg-neutral-800 p-6 rounded-md">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://tools-api.webcrumbs.org/image-placeholder/50/50/avatars/1"
                    alt="Customer avatar"
                    className="w-[50px] h-[50px] rounded-full object-contain"
                  />
                  <div>
                    <h2 className="text-lg text-neutral-50 font-semibold">
                      {item.id}
                    </h2>
                    <p className="text-sm text-neutral-400">Verified Buyer</p>
                  </div>
                </div>
                <p className="text-neutral-50">{item.title}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyPlugin;
