import React from "react";
import { useParams } from "react-router-dom";
import products from "../utility/data";

const ProductInfo = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  console.log(product);
  console.log(id);
  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <img
          className="w-full"
          alt="image of a girl posing"
          src={product.imageUrl}
        />
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none ">{product.brand}</p>
          <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 mt-2">
            {product.productName}
          </h1>
        </div>

        <div>
          <p className="xl:pr-48 text-base lg:leading-tight leading-normal  mt-7">
            {product.description}
          </p>
          <p className="text-base leading-4 mt-7">
            Product Code: 8BN321AF2IF0NYA
          </p>
          <p className="text-base leading-4 mt-4 ">Length: 13.2 inches</p>
          <p className="text-base leading-4 mt-4 ">Height: 10 inches</p>
          <p className="text-base leading-4 mt-4 ">Depth: 5.1 inches</p>
          <p className="md:w-96 text-base leading-normal  mt-4">
            Composition: 100% calf leather, inside: 100% lamb leather
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
