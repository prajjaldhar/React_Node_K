import React, { useState } from "react";

const Interest = () => {
  const [data, setData] = useState({ principal: "", rate: "", time: "" });
  const [result, setResult] = useState("");
  const HandleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // const CompoundInterest = () => {
  //   console.log("mai compound interest hoon");
  //   console.log(data);
  // };
  // const SimpleInterest = () => {
  //   console.log("mai simple interest hoon");
  //   console.log(data);
  // };
  const CalculateInterest = (IsSimple) => {
    if (data.principal === "" || data.rate === "" || data.time === "")
      return alert("Please Enter the data");
    let principal = parseFloat(data.principal);
    let rate = parseFloat(data.rate);
    let time = parseFloat(data.time);
    if (isNaN(principal) || isNaN(rate) || isNaN(time))
      return alert("Please Enter the valid data");
    if (!IsSimple) {
      let i = (principal * rate * time) / 100;
      return setResult(i.toFixed(2));
    } else {
      let i = principal * Math.pow(1 + rate / 100, time);
      return setResult(i.toFixed(2));
    }
  };
  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4 text-white">
      <div className="bg-slate-900 p-8 rounded-2xl shadow-lg border border-cyan-500 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-cyan-400 mb-6 ">
          Interest Calculator
        </h1>

        <input
          type="text"
          placeholder="Principal (₹)"
          name="principal"
          required
          value={data.principal}
          onChange={HandleChange}
          className="w-full mb-7 p-3 rounded-full bg-slate-800 border border-cyan-500 text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 drop-shadow-[0_0_5px_#22d3ee]"
        />
        <input
          type="text"
          placeholder="Rate of Interest (%)"
          name="rate"
          required
          value={data.rate}
          onChange={HandleChange}
          className="w-full mb-7 p-3 rounded-full bg-slate-800 border border-cyan-500 text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 drop-shadow-[0_0_5px_#22d3ee]"
        />
        <input
          type="text"
          placeholder="Time (Years)"
          name="time"
          required
          value={data.time}
          onChange={HandleChange}
          className="w-full mb-5 p-3 rounded-full bg-slate-800 border border-cyan-500 text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 drop-shadow-[0_0_5px_#22d3ee]"
        />

        <div className="flex justify-between mt-4 gap-4">
          <button
            className="flex-1 px-4 py-2 rounded-md border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-black font-semibold transition-all shadow-lg drop-shadow-[0_0_6px_#ec4899]"
            onClick={() => CalculateInterest(false)}
          >
            Simple Interest
          </button>
          <button
            className="flex-1 px-4 py-2 rounded-md border border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-semibold transition-all shadow-lg drop-shadow-[0_0_6px_#4ade80]"
            onClick={() => CalculateInterest(true)}
          >
            Compound Interest
          </button>
        </div>
        {result && (
          <div
            className="bg-slate-900 p-4 rounded-2xl shadow 
          lg border border-cyan-500 max-w-md w-full mt-4"
          >
            <h2 className="text-lg font-bold text-cyan-400 mb-4">Interest</h2>
            <p className="text-white text-lg font-bold mb-4">₹{result}</p>
            <h2 className="text-lg font-bold text-cyan-400 mb-4">
              Total Payable
            </h2>
            <p className="text-white text-lg font-bold mb-4">
              ₹{parseFloat(data.principal) + parseFloat(result)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Interest;
