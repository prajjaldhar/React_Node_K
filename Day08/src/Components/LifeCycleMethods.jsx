import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const LifeCycleMethods = () => {
  const [datas, setData] = useState(null);
  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    FetchData();
  }, []);
  return (
    <div>
      LifeCycleMethods
      {datas &&
        datas.map((d, index) => (
          <div key={index}>
            <h1> {d.title} </h1>
            <h2> {d.body} </h2>
          </div>
        ))}
    </div>
  );
};

export default LifeCycleMethods;
