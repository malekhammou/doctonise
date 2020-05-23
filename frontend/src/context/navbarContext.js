import React, { useState, createContext, useContext } from "react";
import { AppContext } from "./appContext";
export const NavbarContext = createContext();
export const NavbarProvider = (props) => {
  const { drawer, backDrop, setBackDrop, setMenu, setDrawer } = useContext(
    AppContext
  );
  const [elements] = useState([
    {
      onClick: function handleHide() {
        setDrawer(false);
        setBackDrop(false);
        setMenu(false);
      },
      text: "Accueil",
      icon: "home",
      alt: "home",
      destination: "home",
      className: [
        "navlink-desktop",
        "navlink",
        "side-drawer-option",
        "side-drawer-option-desktop",
        "option-icon-desktop",
        "logout-navlink",
        "menu-option",
        "option-icon",
      ],
    },
    {
      onClick: function handleHide() {
        setDrawer(false);
        setBackDrop(false);
        setMenu(false);
      },
      text: "Statistiques",
      icon: "statistics",
      alt: "statistics",
      destination: "statistiques",
      className: [
        "navlink-desktop",
        "navlink",
        "side-drawer-option",
        "side-drawer-option-desktop",
        "option-icon-desktop",
        "logout-navlink",
        "menu-option",
        "option-icon",
      ],
    },
    {
      onClick: function handleHide() {
        setDrawer(false);
        setBackDrop(false);
        setMenu(false);
      },
      text: "Calendrier",
      icon: "calendar",
      alt: "calendar",
      destination: "calendrier",
      className: [
        "navlink-desktop",
        "navlink",
        "side-drawer-option",
        "side-drawer-option-desktop",
        "option-icon-desktop",
        "logout-navlink",
        "menu-option",
        "option-icon",
      ],
    },
    {
      onClick: function handleHide() {
        setDrawer(false);
        setBackDrop(false);
        setMenu(false);
      },
      text: "Patients",
      icon: "patient",
      alt: "patient",
      destination: "home/patients",
      className: [
        "navlink-desktop",
        "navlink",
        "side-drawer-option",
        "side-drawer-option-desktop",
        "option-icon-desktop",
        "logout-navlink",
        "menu-option",
        "option-icon",
      ],
    },
    {
      onClick: function handleHide() {
        setDrawer(false);
        setBackDrop(false);
        setMenu(false);
      },
      text: "Rendez-vous",
      icon: "clock",
      alt: "rendezvous",
      destination: "rendezvous",
      className: [
        "navlink-desktop",
        "navlink",
        "side-drawer-option",
        "side-drawer-option-desktop",
        "option-icon-desktop",
        "logout-navlink",
        "menu-option",
        "option-icon",
      ],
    },
    {
      onClick: function handleHide() {
        setDrawer(false);
        setBackDrop(false);
        setMenu(false);
      },
      text: "Se déconnecter",
      icon: "logout",
      alt: "logout",
      destination: "logout",
      className: [
        "navlink-desktop",
        "navlink",
        "side-drawer-option",
        "side-drawer-option-desktop",
        "option-icon-desktop",
        "logout-navlink",
        "menu-option",
        "option-icon",
      ],
    },
    {
      onClick: function handleHide() {
        setDrawer(false);
        setBackDrop(false);
      },
      text: "Se déconnecter",
      icon: "logout",
      alt: "logout2",
      destination: "logout",
      className: [
        "navlink-desktop",
        "navlink",
        "side-drawer-option",
        "side-drawer-option-desktop",
        "option-icon-desktop",
        "logout-navlink",
        "menu-option",
        "option-icon",
      ],
    },
  ]);
  const handleNavButtonClick = () => {
    setDrawer(!drawer);
    setBackDrop(!backDrop);
    setMenu(false);
  };
  const value = { elements, handleNavButtonClick };
  return (
    <NavbarContext.Provider value={value}>
      {props.children}
    </NavbarContext.Provider>
  );
};
