import React, { useContext } from "react";
import "./navbar.css";
import { AppContext } from "../../context/appContext";
const Navbar = () => {
  const { drawer, setDrawer, backDrop, setBackDrop } = useContext(AppContext);
  return (
    <nav className="navbar">
      <button
        id="nav-button"
        onClick={() => {
          setDrawer(!drawer);
          setBackDrop(!backDrop);
        }}
      >
        {" "}
        <div className="button-line"></div>
        <div className="button-line"></div>
        <div className="button-line"></div>
      </button>
    </nav>
  );
};

export default Navbar;
