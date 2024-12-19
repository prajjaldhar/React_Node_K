import React from "react";
import categories from "./utility/data.js";
import ListComponent from "./Components/ListComponent";

const App = () => {
  return (
    <div className="bg-gradient-to-t from-slate-800 to-slate-900 min-h-screen p-6 sm:p-10 md:p-20 flex justify-center">
      <ListComponent categories={categories} />
    </div>
  );
};

export default App;
