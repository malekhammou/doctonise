import React from "react";
import "./patient-item.css";
import { NavLink } from "react-router-dom";
const PatientItem = ({ patient }) => {
  return (
    <NavLink
      key={patient._id}
      className="patient-navlink"
      to={`/home/patients/${patient._id}`}
    >
      <div key={patient._id} className="patient-item">
        <span>{`${patient.firstname} ${patient.lastname}`}</span>
      </div>
    </NavLink>
  );
};

export default PatientItem;
