import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sum from "./Components/Sum";
import Mul from "./Components/Mul";

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
            </ul>
          </nav>
        <Routes>
          <Route path="/sum" element={<Sum />} />
          <Route path="/mul" element={<Mul />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
