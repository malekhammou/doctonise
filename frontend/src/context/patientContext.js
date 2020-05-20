import React, { useState, createContext } from "react";
export const PatientContext = createContext();
export const PatientProvider = (props) => {
  const [patients, setPatients] = useState([]);
  const [query, setQuery] = useState("");
  const value = { patients, setPatients, query, setQuery };
  return (
    <PatientContext.Provider value={value}>
      {props.children}
    </PatientContext.Provider>
  );
};
