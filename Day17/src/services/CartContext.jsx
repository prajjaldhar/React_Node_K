import React, { createContext, useState } from "react";

// 1. Context banaya
export const CartContext = createContext();

// 2. Context Provider banaya
export const CartProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]); // ✅ Wishlist state

  // ✅ Function to add items to wishlist
  const addToWishlist = (item) => {
    // Prevent duplicate wishlist entries
    if (!wishlist.some((w) => w.id === item.id)) {
      setWishlist([...wishlist, item]);
    }
  };

  return (
    <CartContext.Provider value={{ wishlist, addToWishlist }}>
      {children}
    </CartContext.Provider>
  );
};
