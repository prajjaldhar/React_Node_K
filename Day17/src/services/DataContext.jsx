import React, { createContext, useContext, useState } from "react";
import showsdata from "../utility/data.js"; // Move shows data to a separate file

// Create the Context
const DataContext = createContext();

// Provider Component
export const DataProvider = ({ children }) => {
  const [shows, setData] = useState(showsdata);

  return (
    <DataContext.Provider value={{ shows, setData }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom Hook for using DataContext
export const useData = () => useContext(DataContext);
