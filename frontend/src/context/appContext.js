import React, { useState, createContext } from "react";
export const AppContext = createContext();
export const AppProvider = (props) => {
  const [user, setUser] = useState({});
  const [drawer, setDrawer] = useState(false);
  const [backDrop, setBackDrop] = useState(false);
  const value = { user, setUser, drawer, setDrawer, backDrop, setBackDrop };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
