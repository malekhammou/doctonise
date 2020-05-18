import React, { useContext } from "react";
import "./sidedrawer.css";
import { AppContext } from "../../context/appContext";
import { NavLink } from "react-router-dom";

const SideDrawer = () => {
  const { drawer } = useContext(AppContext);
  return (
    <div className={drawer ? "drawer" : "closed-drawer"}>
      <ul className="side-drawer-options">
        <li className="side-drawer-option">
          <img
            className="option-icon"
            src={require("../../photos/statistics.png")}
            alt="doctonise-logo"
          />
          Statistiques{" "}
        </li>
        <li className="side-drawer-option">
          <img
            className="option-icon"
            src={require("../../photos/calendar.png")}
            alt="doctonise-logo"
          />
          Calendrier{" "}
        </li>
        <li className="side-drawer-option">
          {" "}
          <img
            className="option-icon"
            src={require("../../photos/patient.png")}
            alt="doctonise-logo"
          />
          Patients
        </li>

        <li className="side-drawer-option">
          {" "}
          <img
            className="option-icon"
            src={require("../../photos/clock.png")}
            alt="doctonise-logo"
          />
          Rendez-vous
        </li>
        <NavLink className="navlink" to="/logout">
          <li className="side-drawer-option">
            {" "}
            <img
              className="option-icon"
              src={require("../../photos/logout.png")}
              alt="doctonise-logo"
            />
            Se déconnecter
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default SideDrawer;
