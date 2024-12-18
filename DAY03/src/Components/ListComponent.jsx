import React from "react";

const ListComponent = ({ categories }) => {
 

  return (
    <>
      {categories.map((category, index) => (
        <div key={index} className="p-6 relative left-28">
          <div className="bg-white w-80 h-24 flex">
            <h1 className="bg-black w-16 h-14 text-xl rounded-full relative top-4 left-3 text-center p-3 text-white">
              {category.id}
            </h1>
            <div className={`${category.bgcolor} w-full relative left-10`}>
              <p className="relative top-4 left-16 text-xl font-bold text-white">
                {category.name}
              </p>
              <div className="relative top-4 left-5 flex gap-5 text-white">
                {category.items.map((x) => (
                  <div>{x}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListComponent;
