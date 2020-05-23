import React, { useContext } from "react";
import "./backdrop.css";
import { AppContext } from "../../context/appContext";
const Backdrop = () => {
  const { backDrop, setBackDrop, setDrawer } = useContext(AppContext);
  return (
    <div
      className={backDrop ? "backdrop" : "closed-backdrop"}
      onClick={() => {
        setDrawer(false);
        setBackDrop(false);
      }}
    ></div>
  );
};

export default Backdrop;
