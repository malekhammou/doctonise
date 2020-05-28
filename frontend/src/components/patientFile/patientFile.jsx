import "./patientFile.css";
import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../../context/appContext";
import { PatientSettings } from "../../context/patientSettingsContext";
import { getPatientById } from "../../services/patientService";
import { NavLink } from "react-router-dom";
const PatientFile = ({ match }) => {
  const [patient, setPatient] = useState([]);
  const { user } = useContext(AppContext);
  const { settingsMenu, setSettingsMenu } = useContext(PatientSettings);

  useEffect(() => {
    async function getPatient() {
      if (user._id) {
        const patient = await getPatientById(user._id, match.params.id);
        setPatient(patient[0]);
      }
    }
    setSettingsMenu("bottom-items-hidden");
    getPatient();
  }, [user._id, match.params.id, setSettingsMenu]);
  return (
    <div className="main">
      <div className="patient-header">
        {" "}
        <div className="top-items">
          <span className="full-name">
            {" "}
            {patient.firstname} {patient.lastname}
          </span>

          <button
            className="settings-button"
            onClick={() => {
              settingsMenu === "bottom-items-hidden"
                ? setSettingsMenu("bottom-items")
                : setSettingsMenu("bottom-items-hidden");
            }}
          >
            {" "}
            <img
              className={`settings-icon`}
              src={require(`../../photos/settings.png`)}
              alt={`update-logo`}
            />
          </button>
        </div>
        <div className={settingsMenu}>
          <NavLink to={`/home/patients/${patient._id}/settings`}>
            <button className="update-patient-button">
              {" "}
              <img
                className={`update-patient-icon`}
                src={require(`../../photos/edit.png`)}
                alt={`update-logo`}
              />
            </button>
          </NavLink>
          <NavLink to={`/home/patients/${patient._id}/settings`}>
            <button className="remove-patient-button">
              {" "}
              <img
                className={`remove-patient-icon`}
                src={require(`../../photos/remove.png`)}
                alt={`update-logo`}
              />
            </button>
          </NavLink>
        </div>
      </div>
      <div className="options"></div>
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
