import "./patientFile.css";
import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../../context/appContext";
import { getPatientById } from "../../services/patientService";
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
  }, [user._id, setPatient, match.params.id]);
  return <h1> {patient.firstname} .</h1>;
};

export default PatientFile;
