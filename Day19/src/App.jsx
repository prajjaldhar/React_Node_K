import React, { useState } from "react";

const App = () => {
  const [a, seta] = useState();
  const [b, setb] = useState();
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center">
      <h1 className="text-white font-bold text-center text-4xl p-8">
        Program to calculate sum
      </h1>
      <div className="bg-gray-800 p-8 shadow-2xl w-96 transform transition duration-300 hover:scale-105 border-2 border-blue-500">
        <input
          type="text"
          placeholder="Enter the value of a"
          name="a"
          onChange={(e) => {
            seta(e.target.value);
          }}
          className="w-full p-3 border border-gray-300 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-yellow-400"
        />
        <input
          type="text"
          placeholder="Enter the value of b"
          name="b"
          onChange={(e) => {
            setb(e.target.value);
          }}
          className="w-full p-3 border border-gray-300 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-yellow-400"
        />
        <h1 className="text-white">
          {a && b
            ? `The sum of ${a} and ${b} = ${parseInt(a) + parseInt(b)}`
            : ``}
        </h1>
      </div>
    </div>
  );
};

export default App;
