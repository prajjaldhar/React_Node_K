import React, { useState } from "react";

const Sum = () => {
  const [a, seta] = useState("");
  const [b, setb] = useState("");
  const [ans, setAns] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    // console.log(parseInt(a) + parseInt(b));
    setAns(parseInt(a) + parseInt(b));
    seta("");
    setb("");
  };
  return (
    <div className="bg-slate-700 text-white min-h-screen flex justify-center items-center">
      <div className="bg-amber-400 w-2xl h-fit p-5">
        <h1 className="text-black font-bold text-center text-2xl">
          Program to Calculate Sum
        </h1>
        <form
          onSubmit={HandleSubmit}
          className="flex flex-col m-8 items-center justify-center"
        >
          <input
            className="bg-blue-300 p-4 w-3/6 rounded-full mb-5 placeholder-black"
            type="text"
            required
            value={a}
            onChange={(e) => seta(e.target.value)}
            placeholder="Enter the value of a"
          />
          <input
            className="bg-blue-300 p-4 w-3/6 rounded-full placeholder-black"
            type="text"
            required
            value={b}
            onChange={(e) => setb(e.target.value)}
            placeholder="Enter the value of a"
          />
          <button
            type="submit"
            className="bg-green-500 p-4 w-1/4 font-bold rounded-full mt-5 hover:bg-green-500 cursor-pointer"
          >
            Sum
          </button>
          <p className="text-black font-bold text-2xl mt-5">
            {ans && `Result: ${ans}`}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Sum;
