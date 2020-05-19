import React, { useState, createContext } from "react";
export const PatientContext = createContext();
export const PatientProvider = (props) => {
  const [patient, setPatient] = useState({});
  const [patients, setPatients] = useState([]);
  const value = { patient, setPatient, patients, setPatients };
  return (
    <PatientContext.Provider value={value}>
      {props.children}
    </PatientContext.Provider>
  );
};
