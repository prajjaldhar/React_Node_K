import React from "react";
import { CartProvider } from "./services/CartContext";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";

const App = () => {
  return (
    <CartProvider>
      <div className="h-screen bg-gradient-to-r from-slate-950 to-black flex">
        {/* Navbar with Fixed Sidebar */}
        <div className="w-20 hover:w-64 transition-all duration-300">
          <Navbar />
        </div>

        {/* Main Content: Product List */}
        <div className="flex-1 overflow-y-auto p-6">
          <ProductList />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
