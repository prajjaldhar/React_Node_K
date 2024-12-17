import React from "react";

const CardComponent = ({ contacts }) => {
  return (
    <>
      {contacts.map((product) => (
        <div className="w-[21rem] h-[32rem] bg-gradient-to-r from-indigo-600 to-indigo-900 m-10 rounded-2xl">
          <h1 className="text-center text-white text-2xl p-6">
            Product Listing
          </h1>
          <img
            className="w-82 mb-3 bg-contain"
            src={product.image}
            alt="img.jpg"
          />
          <p className="text-center text-white mb-3">{product.productdesc}</p>
          <div className="flex space-x-10 p-7">
            <button className="rounded-2xl w-32 h-18 bg-green-600 p-7 text-center text-white text-2xl">
              Add
            </button>
            <button className="rounded-2xl w-[140px] h-18 bg-red-600 p-7 text-center text-white text-2xl">
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardComponent;
