import React from "react";
import "../navbar/navbar.css";
import NavbarNavlink from "../../components/navbar-navlink/navbar-navlink";
import { useRef, useContext, useEffect } from "react";
import { AppContext } from "../../context/appContext";

const Menu = ({ className, items }) => {
  const menu = useRef(null);
  const { setMenu } = useContext(AppContext);
  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  function handleClickOutside(event) {
    if (menu.current && !menu.current.contains(event.target)) {
      setMenu(false);
    }
  }

  return (
    <div ref={menu} className={className}>
      {" "}
      {items.map((item) => (
        <NavbarNavlink
          className={item.className.logoutNavlink}
          listItemClassName={item.className.menuOption}
          imgClassName={item.className.optionIconDesktop}
          key={item.destination}
          onClick={item.onClick}
          text={item.text}
          icon={item.icon}
          alt={item.alt}
          destination={item.destination}
        />
      ))}
    </div>
  );
};

export default Menu;
