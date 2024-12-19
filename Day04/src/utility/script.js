import products from "./data.js";
console.log(products);
// products.map((product) => console.log(product));
const p = products.map((product) => ({
  category: product.category,
  item: product.productName,
}));
console.log(p);
