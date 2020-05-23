import React from "react";
import "../../commonComponents/navbar/navbar.css";
const NavButton = ({ onClick }) => {
  return (
    <button id="nav-button" onClick={onClick}>
      {" "}
      <div className="button-line"></div>
      <div className="button-line"></div>
      <div className="button-line"></div>
    </button>
  );
};

export default NavButton;
