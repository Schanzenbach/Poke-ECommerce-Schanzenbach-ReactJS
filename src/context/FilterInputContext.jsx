import { createContext, useState } from "react";

export const FilterInputContext = createContext();
export const FilterInputContextProvider = ({ children }) => {
  const [productsName, setProductsName] = useState("");
  const captureProducts = (event) => {
    event.preventDefault();
    setProductsName(event.target.value.toLowerCase());
  };
  const data = { productsName, captureProducts };
  return (
    <FilterInputContext.Provider value={data}>
      {children}
    </FilterInputContext.Provider>
  );
};
