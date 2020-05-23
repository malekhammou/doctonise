import React, { useContext } from "react";
import "./navbar.css";
import { AppContext } from "../../context/appContext";
import { NavLink } from "react-router-dom";
import NavbarNavlink from "../../components/navbar-navlink/navbar-navlink";
import NavButton from "../../components/nav-button/nav-button";
import { NavbarContext } from "../../context/navbarContext";
const Navbar = () => {
  const {
    user,
    drawer,
    setDrawer,
    backDrop,
    setBackDrop,
    menu,
    setMenu,
  } = useContext(AppContext);
  const { elements } = useContext(NavbarContext);

  const handleNavButtonClick = () => {
    setDrawer(!drawer);
    setBackDrop(!backDrop);
    setMenu(false);
  };
  return (
    <nav className="navbar">
      <span className="greeting-message">
        {`${user.firstname} ${user.lastname}`}{" "}
        <div className="online-icon"></div>
        <i
          onClick={() => {
            setMenu(!menu);
          }}
          className="fa fa-sort-desc menu-button fa-lg"
        ></i>
      </span>
      <div className={menu ? "menu no-select" : "hidden-menu"}>
        {" "}
        <NavLink
          onClick={() => {
            setDrawer(false);
            setBackDrop(false);
          }}
          className="logout-navlink"
          to="/logout"
        >
          <li className="menu-option">
            {" "}
            <img
              className="option-icon-desktop"
              src={require("../../photos/logout.png")}
              alt="logout-logo"
            />
            Se déconnecter
          </li>
        </NavLink>
      </div>
      <ul className="side-drawer-options-desktop">
        {elements &&
          elements.map((element) => (
            <NavbarNavlink
              key={element.destination}
              onClick={element.onClick}
              text={element.text}
              icon={element.icon}
              alt={element.alt}
              destination={element.destination}
            />
          ))}
      </ul>
      <NavButton onClick={handleNavButtonClick} />
    </nav>
  );
};

export default Navbar;
