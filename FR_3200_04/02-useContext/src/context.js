import React from "react";

const Context = React.createContext();

const Provider = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
export default Provider;
