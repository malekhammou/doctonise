import "./patientFile.css";
import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../../context/appContext";
import { getPatientById } from "../../services/patientService";
import { NavLink } from "react-router-dom";
const PatientFile = ({ match }) => {
  const [patient, setPatient] = useState([]);
  const { user } = useContext(AppContext);
  useEffect(() => {
    async function getPatient() {
      if (user._id) {
        const patient = await getPatientById(user._id, match.params.id);
        setPatient(patient[0]);
      }
    }
    getPatient();
  }, [user._id, match.params.id]);
  return (
    <div className="main">
      <div className="patient-header">
        {" "}
        <span className="full-name">
          {" "}
          {patient.firstname} {patient.lastname}
        </span>
        <NavLink to={`/home/patients/${patient._id}/settings`}>
          <button className="update-patient-button">
            {" "}
            <img
              className={`update-patient-icon`}
              src={require(`../../photos/settings.png`)}
              alt={`update-logo`}
            />
          </button>
        </NavLink>
      </div>

      <div className="infos">
        {patient.email && (
          <p className="info">
            <span className="label">Email</span>{" "}
            <span className="detail">{patient.email}</span>
          </p>
        )}
        {patient.height && (
          <p className="info">
            <span className="label">Taille</span>{" "}
            <span className="detail">{patient.height} cm</span>
          </p>
        )}
        {patient.weight && (
          <p className="info">
            <span className="label">Poids</span>{" "}
            <span className="detail">{patient.weight} kg</span>
          </p>
        )}
        {patient.birthday && (
          <p className="info">
            <span className="label">Date de naissance</span>{" "}
            <span className="detail">{patient.birthday}</span>
          </p>
        )}
        {patient.bloodFamily && (
          <p className="info">
            <span className="label">Groupe sanguin</span>{" "}
            <span className="detail">{patient.bloodFamily}</span>
          </p>
        )}
        {patient.firstAppointment && (
          <p className="info">
            <span className="label">Premiére visite</span>{" "}
            <span className="detail">{patient.firstAppointment}</span>
          </p>
        )}
        {patient.phone && (
          <p className="info">
            <span className="label">Téléphone</span>{" "}
            <span className="detail">{patient.phone}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default PatientFile;
