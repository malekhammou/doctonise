import React, { useState, createContext, useEffect } from "react";
import { getcurrentUser } from "../services/userService";
export const AppContext = createContext();
export const AppProvider = (props) => {
  const [user, setUser] = useState({});
  const [drawer, setDrawer] = useState(false);
  const [backDrop, setBackDrop] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setUser(getcurrentUser());
  }, []);
  const value = {
    user,
    setUser,
    drawer,
    setDrawer,
    backDrop,
    setBackDrop,
    menu,
    setMenu,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
