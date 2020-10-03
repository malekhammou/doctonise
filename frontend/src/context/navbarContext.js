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
      className: {
        navlinkDesktop: "navlink-desktop",
        navlink: "navlink",
        sideDrawerOption: "side-drawer-option",
        sideDrawerOptionDesktop: "side-drawer-option-desktop",
        optionIconDesktop: "option-icon-desktop",
        logoutNavlink: "logout-navlink",
        menuOption: "menu-option",
        optionicon: "option-icon",
      },
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
      destination: "home/statistiques",
      className: {
        navlinkDesktop: "navlink-desktop",
        navlink: "navlink",
        sideDrawerOption: "side-drawer-option",
        sideDrawerOptionDesktop: "side-drawer-option-desktop",
        optionIconDesktop: "option-icon-desktop",
        logoutNavlink: "logout-navlink",
        menuOption: "menu-option",
        optionicon: "option-icon",
      },
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
      destination: "home/calendar",
      className: {
        navlinkDesktop: "navlink-desktop",
        navlink: "navlink",
        sideDrawerOption: "side-drawer-option",
        sideDrawerOptionDesktop: "side-drawer-option-desktop",
        optionIconDesktop: "option-icon-desktop",
        logoutNavlink: "logout-navlink",
        menuOption: "menu-option",
        optionicon: "option-icon",
      },
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
      className: {
        navlinkDesktop: "navlink-desktop",
        navlink: "navlink",
        sideDrawerOption: "side-drawer-option",
        sideDrawerOptionDesktop: "side-drawer-option-desktop",
        optionIconDesktop: "option-icon-desktop",
        logoutNavlink: "logout-navlink",
        menuOption: "menu-option",
        optionicon: "option-icon",
      },
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
      className: {
        navlinkDesktop: "navlink-desktop",
        navlink: "navlink",
        sideDrawerOption: "side-drawer-option",
        sideDrawerOptionDesktop: "side-drawer-option-desktop",
        optionIconDesktop: "option-icon-desktop",
        logoutNavlink: "logout-navlink",
        menuOption: "menu-option",
        optionicon: "option-icon",
      },
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
      className: {
        navlinkDesktop: "navlink-desktop",
        navlink: "navlink",
        sideDrawerOption: "side-drawer-option",
        sideDrawerOptionDesktop: "side-drawer-option-desktop",
        optionIconDesktop: "option-icon-desktop",
        logoutNavlink: "logout-navlink",
        menuOption: "menu-option",
        optionicon: "option-icon",
      },
    },
    {
      onClick: function handleHide() {
        setDrawer(false);
        setBackDrop(false);
      },
      text: "Changer mot de passe",
      icon: "password",
      alt: "password",
      destination: "home/change-password",
      className: {
        navlinkDesktop: "navlink-desktop",
        navlink: "navlink",
        sideDrawerOption: "side-drawer-option",
        sideDrawerOptionDesktop: "side-drawer-option-desktop",
        optionIconDesktop: "option-icon-desktop",
        logoutNavlink: "logout-navlink",
        menuOption: "menu-option",
        optionicon: "option-icon",
      },
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
