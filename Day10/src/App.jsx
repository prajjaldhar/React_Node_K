import React, { useState } from "react";
import ChildComponent from "./Component/ChildComponent";

const App = () => {
  const [name, setName] = useState("Prajjal");
  const [isToggle, setToggle] = useState(true);
  const changeparentdata = () => {
    if (isToggle) {
      setName("Prajjal changed");
      setToggle(!isToggle);
    } else {
      setName("Prajjal");
      setToggle(!isToggle);
    }
  };
  return (
    <div>
      <h1 className="text-center font-bold text-4xl">My Portfolio</h1>

      <ChildComponent name={name} changeparentdata={changeparentdata} />
    </div>
  );
};

export default App;
