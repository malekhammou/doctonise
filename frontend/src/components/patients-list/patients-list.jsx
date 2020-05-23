import React from "react";
import "./patients-list.css";
import PatientItem from "../patient-item/patient-item";

const PatientsList = ({ patients }) => {
  return (
    <div className="patients-list">
      {patients.map((patient) => (
        <PatientItem key={patient._id} patient={patient} />
      ))}
    </div>
  );
};

export default PatientsList;
