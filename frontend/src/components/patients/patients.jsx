import React, { useContext, useEffect } from "react";
import { PatientContext } from "../../context/patientContext";
import { AppContext } from "../../context/appContext";
import "./patients.css";
import { getpatients } from "../../services/patientService";
const Patients = () => {
  let { user } = useContext(AppContext);
  let { patients, setPatients } = useContext(PatientContext);
  useEffect(() => {
    async function getAllPatients() {
      if (user._id) {
        const Allpatients = await getpatients(user._id);
        setPatients(Allpatients);
      }
    }

    getAllPatients();
  }, [user._id, setPatients]);
  return (
    <div className="wrapper">
      <div className="patients-list">
        {patients.map((patient) => (
          <div className="patient-item">
            <span>{`${patient.firstname} ${patient.lastname}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patients;
