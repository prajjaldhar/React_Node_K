import React, { useState } from "react";

const Sum = () => {
  const [a, seta] = useState("");
  const [b, setb] = useState("");
  const [ans, setans] = useState();
  const HandleSubmit = (e) => {
    e.preventDefault();
    setans(parseInt(a) + parseInt(b));
    seta("");
    setb("");
  };
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center">
      <h1 className="text-white font-bold text-center text-4xl p-8">
        Program to calculate sum
      </h1>
      <div className="bg-gray-800 p-8 shadow-2xl w-96 transform transition duration-300 hover:scale-105 border-2 border-blue-500">
        <form
          onSubmit={HandleSubmit}
          className="flex flex-col items-center mb-5"
        >
          <input
            type="text"
            placeholder="Enter the value of a"
            name="a"
            value={a}
            onChange={(e) => {
              seta(e.target.value);
            }}
            className="w-full p-3 border border-gray-300 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-yellow-400"
          />
          <input
            type="text"
            value={b}
            placeholder="Enter the value of b"
            name="b"
            onChange={(e) => {
              setb(e.target.value);
            }}
            className="w-full p-3 border border-gray-300 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-yellow-400"
          />
          <button
            type="submit"
            className="bg-green-400 p-3 w-42 rounded-full text-white font-bold text-xl cursor-pointer hover:bg-green-500"
          >
            Sum
          </button>
          <h1 className="text-white mt-5">
            {ans != null ? `Resulant = ${ans}` : ``}
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Sum;
