import React from "react";
import "../../commonComponents/navbar/navbar.css";
import { NavLink } from "react-router-dom";
const NavbarNavlink = ({
  onClick,
  text,
  icon,
  alt,
  destination,
  className,
  listItemClassName,
  imgClassName,
}) => {
  return (
    <NavLink
      onClick={onClick}
      className={`${className}`}
      to={`/${destination}`}
    >
      <li className={`${listItemClassName}`}>
        <img
          className={`${imgClassName}`}
          src={require(`../../photos/${icon}.png`)}
          alt={`${alt}-logo`}
        />
        {text}
      </li>
    </NavLink>
  );
};

export default NavbarNavlink;
