import React from "react";
import products from "./utility/data";

const App = () => {
  const productcat = products.flatMap((product) =>
    product.productName.map((item) => ({
      category: product.category,
      item,
    }))
  );
  console.log(productcat);
  return (
    <div>
      <h1>Product Categories</h1>
      {productcat.map((prod) => (
        <div>
          {prod.category}
          {prod.item}
        </div>
      ))}
    </div>
  );
};

export default App;
