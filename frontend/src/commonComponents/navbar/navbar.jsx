import React, { useContext } from "react";
import "./navbar.css";
import { AppContext } from "../../context/appContext";
const Navbar = () => {
  const { user, drawer, setDrawer, backDrop, setBackDrop } = useContext(
    AppContext
  );

  return (
    <nav className="navbar">
      <span className="greeting-message">
        {`${user.firstname} ${user.lastname}`}{" "}
        <div className="online-icon"></div>
      </span>
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
