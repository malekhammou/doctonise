import React, { useState, createContext } from "react";
export const PatientSettings = createContext();
export const PatientSettingsProvider = (props) => {
  const [settingsMenu, setSettingsMenu] = useState("bottom-items-hidden");

  const value = {
    settingsMenu,
    setSettingsMenu,
  };
  return (
    <PatientSettings.Provider value={value}>
      {props.children}
    </PatientSettings.Provider>
  );
};
