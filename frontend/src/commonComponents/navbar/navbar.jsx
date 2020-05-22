import React, { useContext } from "react";
import "./navbar.css";
import { AppContext } from "../../context/appContext";
import { NavLink } from "react-router-dom";
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

  return (
    <nav className="navbar">
      <span className="greeting-message">
        {`${user.firstname} ${user.lastname}`}{" "}
        <div className="online-icon"></div>
        <i
          onClick={() => {
            setMenu(!menu);
          }}
          className="fa fa-sort-desc menu-button"
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
        <NavLink
          onClick={() => {
            setDrawer(false);
            setBackDrop(false);
            setMenu(false);
          }}
          className="navlink-desktop"
          to="/home"
        >
          <li className="side-drawer-option-desktop">
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
            setMenu(false);
          }}
          className="navlink-desktop"
          to="/statistiques"
        >
          <li className="side-drawer-option-desktop">
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
            setMenu(false);
          }}
          className="navlink-desktop"
          to="/calendrier"
        >
          <li className="side-drawer-option-desktop">
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
            setMenu(false);
          }}
          className="navlink-desktop"
          to="/home/patients"
        >
          <li className="side-drawer-option-desktop">
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
            setMenu(false);
          }}
          className="navlink-desktop"
          to="/rendez-vous"
        >
          <li className="side-drawer-option-desktop">
            {" "}
            <img
              className="option-icon"
              src={require("../../photos/clock.png")}
              alt="rendezvous-logo"
            />
            Rendez-vous
          </li>
        </NavLink>
      </ul>
      <button
        id="nav-button"
        onClick={() => {
          setDrawer(!drawer);
          setBackDrop(!backDrop);
          setMenu(false);
        }}
      >
        {" "}
        <div className="button-line"></div>
        <div className="button-line"></div>
        <div className="button-line"></div>
      </button>
    </nav>
  );
};

export default Navbar;
