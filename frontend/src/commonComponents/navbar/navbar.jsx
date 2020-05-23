import React, { useContext } from "react";
import "./navbar.css";
import { AppContext } from "../../context/appContext";
import NavbarNavlink from "../../components/navbar-navlink/navbar-navlink";
import NavButton from "../../components/nav-button/nav-button";
import { NavbarContext } from "../../context/navbarContext";
import GreetingMessage from "../greeting-message/greeting-message";
const Navbar = () => {
  const { user, menu, setMenu } = useContext(AppContext);
  const { elements, handleNavButtonClick } = useContext(NavbarContext);
  const element = elements.find((e) => e.alt === "logout2");
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav className="navbar">
      <GreetingMessage user={user} onClick={toggleMenu} />
      <div className={menu ? "menu no-select" : "hidden-menu"}>
        {" "}
        <NavbarNavlink
          className={element.className[5]}
          listItemClassName={element.className[6]}
          imgClassName={element.className[4]}
          key={element.destination}
          onClick={element.onClick}
          text={element.text}
          icon={element.icon}
          alt={element.alt}
          destination={element.destination}
        />
      </div>
      <ul className="side-drawer-options-desktop">
        {elements.map(
          (element) =>
            element.destination !== "logout" && (
              <NavbarNavlink
                className={element.className[0]}
                listItemClassName={element.className[3]}
                imgClassName={element.className[7]}
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
