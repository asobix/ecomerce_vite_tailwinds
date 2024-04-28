/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //Shopping Cart ~ Increment quantity
  const [count, setCount] = useState(0);
  //Product Detail ~ Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  //Product Detail ~ Show Product
  const [productToShow, setProductToShow] = useState({});
  //Values Context
  const value = {count, setCount, openProductDetail,closeProductDetail,isProductDetailOpen,productToShow, setProductToShow}
  

  return (
    <ShoppingCartContext.Provider
      value={value}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
