import React from "react";

const CardComponent = ({ contacts }) => {
  return (
    <>
      {contacts.map((product) => (
        <div className=" hover:shadow-yellow-500 shadow-xl cursor-pointer w-[21rem] h-[32rem] bg-gradient-to-r from-indigo-600 to-indigo-900 rounded-2xl p-8 m-8 ml-16">
          <h1 className="text-center text-white text-2xl p-6">
            Product Listing
          </h1>
          <img
            className="w-82 mb-3 bg-contain"
            src={product.image}
            alt="img.jpg"
          />
          <p className="text-center text-white mb-3">{product.productdesc}</p>
          <div className="flex space-x-5 p-5">
            <button className="rounded-2xl w-32 h-10 bg-green-500 p-7 text-center text-white text-2xl">
              <span className="text-center font-bold relative -top-4"> + </span>
            </button>
            <button className="rounded-2xl w-[140px] h-10 bg-red-600 p-7 text-white text-2xl">
              <span className="text-center font-bold relative -top-4"> - </span>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardComponent;
