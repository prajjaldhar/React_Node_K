import React, { useState } from "react";

const Largestof3 = () => {
  const [Numbers, SetNumbers] = useState({
    num1: "",
    num2: "",
    num3: "",
  });
  const [Max, SetMax] = useState("");
  const HandleChange = (e) => {
    SetNumbers({ ...Numbers, [e.target.name]: e.target.value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    let max = Numbers.num1;
    if (max < Numbers.num2) {
      max = Numbers.num2;
    }
    if (max < Numbers.num3) {
      max = Numbers.num3;
    }
    SetMax(max);
    console.log(Numbers);
  };
  console.log(Max);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center">
      <h1 className="text-white font-bold text-4xl p-5">
        Find the Largest Number
      </h1>
      <div className="bg-gray-800 p-8 shadow-2xl w-96 border-2 border-blue-500 rounded-lg">
        <form
          onSubmit={HandleSubmit}
          className="flex flex-col items-center mb-5"
        >
          <input
            type="text"
            name="num1"
            value={Numbers.num1}
            onChange={HandleChange}
            placeholder="Enter first number"
            required
            className="w-full p-3 border border-gray-300 rounded-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-yellow-400"
          />
          <input
            type="text"
            name="num2"
            placeholder="Enter second number"
            value={Numbers.num2}
            onChange={HandleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-yellow-400"
          />
          <input
            type="text"
            name="num3"
            placeholder="Enter third number"
            value={Numbers.num3}
            onChange={HandleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-yellow-400"
          />
          <button
            type="submit"
            className="bg-green-400 p-3 w-42 rounded-full text-white font-bold text-xl cursor-pointer hover:bg-green-500"
          >
            Find Largest
          </button>
          {Max && (
            <h1 className="text-white"> Maximum of 3 numbers is: {Max}</h1>
          )}
        </form>
      </div>
    </div>
  );
};

export default Largestof3;
