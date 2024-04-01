/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const value = {count, setCount}

  return (
    <ShoppingCartContext.Provider
      value={value}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
