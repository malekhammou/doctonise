import React, { useContext } from "react";
import "./sidedrawer.css";
import { AppContext } from "../../context/appContext";
import { NavLink } from "react-router-dom";
import useScreenLock from "../../hooks/useScreenLock";

const SideDrawer = () => {
  const { drawer, setDrawer, setBackDrop } = useContext(AppContext);
  useScreenLock();
  return (
    <div className={drawer ? "drawer" : "closed-drawer"}>
      <ul className="side-drawer-options">
        <NavLink
          onClick={() => {
            setDrawer(false);
            setBackDrop(false);
          }}
          className="navlink"
          to="/home"
        >
          <li className="side-drawer-option">
            <img
              className="option-icon"
              src={require("../../photos/home.png")}
              alt="accueil-logo"
            />
            Accueil{" "}
          </li>
        </NavLink>
        <NavLink
          onClick={() => {
            setDrawer(false);
            setBackDrop(false);
          }}
          className="navlink"
          to="/statistiques"
        >
          <li className="side-drawer-option">
            <img
              className="option-icon"
              src={require("../../photos/statistics.png")}
              alt="statistiques-logo"
            />
            Statistiques{" "}
          </li>
        </NavLink>

        <NavLink
          onClick={() => {
            setDrawer(false);
            setBackDrop(false);
          }}
          className="navlink"
          to="/calendrier"
        >
          <li className="side-drawer-option">
            <img
              className="option-icon"
              src={require("../../photos/calendar.png")}
              alt="calendrier-logo"
            />
            Calendrier{" "}
          </li>
        </NavLink>
        <NavLink
          onClick={() => {
            setDrawer(false);
            setBackDrop(false);
          }}
          className="navlink"
          to="/home/patients"
        >
          <li className="side-drawer-option">
            {" "}
            <img
              className="option-icon"
              src={require("../../photos/patient.png")}
              alt="patient-logo"
            />
            Patients
          </li>
        </NavLink>

        <NavLink
          onClick={() => {
            setDrawer(false);
            setBackDrop(false);
          }}
          className="navlink"
          to="/rendez-vous"
        >
          <li className="side-drawer-option">
            {" "}
            <img
              className="option-icon"
              src={require("../../photos/clock.png")}
              alt="rendezvous-logo"
            />
            Rendez-vous
          </li>
        </NavLink>
        <NavLink
          onClick={() => {
            setDrawer(false);
            setBackDrop(false);
          }}
          className="navlink"
          to="/logout"
        >
          <li className="side-drawer-option">
            {" "}
            <img
              className="option-icon"
              src={require("../../photos/logout.png")}
              alt="logout-logo"
            />
            Se déconnecter
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default SideDrawer;
