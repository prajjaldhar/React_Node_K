import React from "react";

const ChildComponent = ({ name, changeparentdata }) => {
  const changedata = () => {
    changeparentdata();
  };
  return (
    <div>
      <h1 className="p-12 font-bold text-xl">Name: {name}</h1>
      <button
        className="bg-green-500 p-3 w-28 m-8 rounded-3xl outline-none text-white"
        onClick={changedata}
      >
        Change
      </button>
    </div>
  );
};

export default ChildComponent;
