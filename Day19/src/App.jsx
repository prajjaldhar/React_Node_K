import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sum from "./Components/Sum";
import Mul from "./Components/Mul";
import Factorial from "./Components/Factorial";
import Largestof3 from "./Components/Largestof3";

const App = () => {
  return (
    <Router>
      <div className="bg-slate-900 min-h-screen text-white">
        <nav className="p-5">
          <ul className="flex justify-center">
            <li className="mx-4 text-2xl">
              <Link to="/sum">Sum</Link>
            </li>
            <li className="mx-4 text-2xl">
              <Link to="/mul">Mul</Link>
            </li>
            <li className="mx-4 text-2xl">
              <Link to="/factorial">Fact</Link>
            </li>
            <li className="mx-4 text-2xl">
              <Link to="/largestof3">LargestOf3</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/sum" element={<Sum />} />
          <Route path="/mul" element={<Mul />} />
          <Route path="/factorial" element={<Factorial />} />
          <Route path="/largestof3" element={<Largestof3 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
