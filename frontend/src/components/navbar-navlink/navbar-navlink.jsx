import React from "react";
import "../../commonComponents/navbar/navbar.css";
import { NavLink } from "react-router-dom";
const NavbarNavlink = ({ onClick, text, icon, alt, destination }) => {
  return (
    <NavLink
      onClick={onClick}
      className="navlink-desktop"
      to={`/${destination}`}
    >
      <li className="side-drawer-option-desktop">
        <img
          className="option-icon"
          src={require(`../../photos/${icon}.png`)}
          alt={`${alt}-logo`}
        />
        {text}
      </li>
    </NavLink>
  );
};

export default NavbarNavlink;
