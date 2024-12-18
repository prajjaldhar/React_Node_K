import categories from "./data.js";

const it = categories.flatMap((category) =>
  category.items.map((item) => ({
    category: category.name,
    item:item,
  }))
);

console.log(it);
