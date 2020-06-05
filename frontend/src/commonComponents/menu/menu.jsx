import React from "react";
import "../navbar/navbar.css";
import NavbarNavlink from "../../components/navbar-navlink/navbar-navlink";
const Menu = ({ className, items }) => {
  return (
    <div className={className}>
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
