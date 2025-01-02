import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [soap, setSoap] = useState(true);
  const [count, setCount] = useState(36);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");

  let total = 159;

  useEffect(() => {
    // data fetched
    // store the response in products
  }, []);

  return (
    <Context.Provider
      value={{ soap, setSoap, count, total, setCount, setName, name }}
    >
      {children}
    </Context.Provider>
  );
};

export const useShop = () => {
  return useContext(Context);
};
