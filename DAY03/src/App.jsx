import React from "react";
import categories from "./utility/data.js";
import ListComponent from "./Components/ListComponent";

const App = () => {
  return (
    <div className="bg-gradient-to-t from-slate-800 to-slate-900 h-screen p-20 lg:flex lg:flex-wrap gap-6">
      <ListComponent categories={categories} />
    </div>
  );
};

export default App;
