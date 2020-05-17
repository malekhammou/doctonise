import React, { useContext } from "react";
import "./navbar.css";
import { AppContext } from "../../context/appContext";
const Navbar = () => {
  const { drawer, setDrawer, backDrop, setBackDrop } = useContext(AppContext);
  return (
    <nav className="navbar">
      <button
        className="btn btn-primary"
        onClick={() => {
          setDrawer(!drawer);
          setBackDrop(!backDrop);
        }}
      >
        {" "}
        TEST
      </button>
    </nav>
  );
};

export default Navbar;
