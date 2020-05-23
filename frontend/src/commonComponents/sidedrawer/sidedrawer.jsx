import React, { useContext } from "react";
import "./sidedrawer.css";
import { AppContext } from "../../context/appContext";
import NavbarNavlink from "../../components/navbar-navlink/navbar-navlink";
import useScreenLock from "../../hooks/useScreenLock";
import { NavbarContext } from "../../context/navbarContext";
const SideDrawer = () => {
  const { drawer } = useContext(AppContext);
  const { elements } = useContext(NavbarContext);
  useScreenLock();
  return (
    <div className={drawer ? "drawer" : "closed-drawer"}>
      <ul className="side-drawer-options">
        {elements.map(
          (element) =>
            element.alt !== "logout2" && (
              <NavbarNavlink
                className={element.className[1]}
                listItemClassName={element.className[2]}
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
    </div>
  );
};

export default SideDrawer;
