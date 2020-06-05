import React, { useContext } from "react";
import "./navbar.css";
import { AppContext } from "../../context/appContext";
import NavbarNavlink from "../../components/navbar-navlink/navbar-navlink";
import NavButton from "../../components/nav-button/nav-button";
import { NavbarContext } from "../../context/navbarContext";
import GreetingMessage from "../greeting-message/greeting-message";
import Menu from "../menu/menu";
const Navbar = () => {
  const { user, menu, setMenu } = useContext(AppContext);
  const { elements, handleNavButtonClick } = useContext(NavbarContext);
  const items = elements.filter(
    (e) => e.alt === "password" || e.alt === "logout2"
  );
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav className="navbar">
      <GreetingMessage user={user} onClick={toggleMenu} />
      <Menu className={menu ? "menu no-select" : "hidden-menu"} items={items} />
      <ul className="side-drawer-options-desktop">
        {elements.map(
          (element) =>
            element.destination !== "logout" &&
            element.destination !== "home/change-password" && (
              <NavbarNavlink
                className={element.className.navlinkDesktop}
                listItemClassName={element.className.sideDrawerOptionDesktop}
                imgClassName={element.className.optionicon}
                key={element.destination}
                onClick={element.onClick}
                text={element.text}
                icon={element.icon}
                alt={element.alt}
                destination={element.destination}
              />
            )
        )}
      </ul>
      <NavButton onClick={handleNavButtonClick} />
    </nav>
  );
};

export default Navbar;
