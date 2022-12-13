import React, { createContext, useState } from "react";
export const NavbarContext = createContext();

const NavbarContextProvider = ({ children }) => {
  const [hover, setHover] = useState(false);
  const [searchState, setSearchState] = useState(false);
  const values = {
    hover,
    setHover,
    searchState,
    setSearchState,
  };
  return (
    <NavbarContext.Provider value={values}>{children}</NavbarContext.Provider>
  );
};

export default NavbarContextProvider;
