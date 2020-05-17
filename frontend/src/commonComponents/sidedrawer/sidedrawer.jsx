import React, { useContext } from "react";
import "./sidedrawer.css";
import { AppContext } from "../../context/appContext";

const SideDrawer = () => {
  const { drawer } = useContext(AppContext);
  return <div className={drawer ? "drawer" : "closed-drawer"}></div>;
};

export default SideDrawer;
