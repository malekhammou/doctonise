import React, { useState, createContext } from "react";
export const PatientContext = createContext();
export const PatientProvider = (props) => {
  const [patients, setPatients] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [patientsPerPage, setPatientsPerPage] = useState(8);
  const value = {
    patients,
    setPatients,
    query,
    setQuery,
    currentPage,
    setCurrentPage,
    patientsPerPage,
    setPatientsPerPage,
  };
  return (
    <PatientContext.Provider value={value}>
      {props.children}
    </PatientContext.Provider>
  );
};
