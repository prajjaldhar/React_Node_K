import React, { useState } from "react";
import productdata from "./utility/data";
const App = () => {
   const [data,setdata] = useState([]);
  return (
    <div className="bg-slate-800 min-h-screen text-white text-center">
      <div>
        product Reviews
        {previews.map((product) => (
          <div>
            <p>{product.productName}</p>
            <p>{product.productReviews}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
