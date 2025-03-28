import React from "react";
import { FaBell } from "react-icons/fa";

const App = () => {
  let arr = [
    {
      id: 1,
      msgContent: "Hello",
    },
    {
      id: 2,
      msgContent: "Hi",
    },
    {
      id: 2,
      msgContent: "Hi",
    },
    {
      id: 2,
      msgContent: "kaise ho",
    },
    {
      id: 2,
      msgContent: "Kab aa rahe ho",
    },
  ];
  const HandleInput = (e) => {
    
  };
  return (
    <div className="bg-slate-900 h-screen w-full">
      <div className="bg-slate-600 p-8">
        <div className="flex justify-end text-white text-xl cursor-pointer group relative">
          Notification <FaBell />
        </div>
      </div>
      <div className="absolute top-24 right-1 group-hover:block ">
        <div className="bg-indigo-400 w-64 h-[350px] rounded-xl p-8">
          <div className="bg-white p-3 rounded-3xl w-54">
            <div className="flex justify-center text-sm cursor-pointer group relative">
              Notification <FaBell />
            </div>
          </div>
          <div>
            <ul className="text-center mt-5">
              {arr.map((item, index) => (
                <li>
                  {index + 1}.{item.msgContent}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* content div */}
      <div className="m-8 bg-white w-96 h-[500px]">
        {/* input box to take elements */}
        <div className="mt-5">
          <input
            type="text"
            name="datacollector"
            className="w-64 h-10 p-5 bg-slate-400 m-3  rounded-2xl"
            placeholder="Enter your message"
            onChange={HandleInput}
          />
          <br />
          <button className="bg-green-500 p-3 rounded-xl">submit</button>
        </div>
      </div>
    </div>
  );
};

export default App;
