import React, { useState, createContext, useContext } from "react";
import { AppContext } from "./appContext";
export const NavbarContext = createContext();

export const NavbarProvider = (props) => {
  const { setBackDrop, setMenu, setDrawer } = useContext(AppContext);

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
    },
    {
      onClick: function handleHide() {
        setDrawer(false);
        setBackDrop(false);
        setMenu(false);
      },
      text: "Patient",
      icon: "patient",
      alt: "patient",
      destination: "home/patients",
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
    },
  ]);

  const value = { elements };
  return (
    <NavbarContext.Provider value={value}>
      {props.children}
    </NavbarContext.Provider>
  );
};
