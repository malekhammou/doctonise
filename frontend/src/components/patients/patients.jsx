import React, { useContext, useEffect } from "react";
import { PatientContext } from "../../context/patientContext";
import "./patients.css";
import { AppContext } from "../../context/appContext";
import { getpatients } from "../../services/patientService";
import { NavLink } from "react-router-dom";
import AutoCompleteSearch from "../../commonComponents/autocomplete-search/autoCompleteSearch";
import _ from "lodash";
const Patients = () => {
  let { user, setMenu, setDrawer } = useContext(AppContext);
  let { patients, setPatients, setQuery } = useContext(PatientContext);

  useEffect(() => {
    async function getAllPatients() {
      if (user._id) {
        const Allpatients = await getpatients(user._id);
        setPatients(Allpatients);
      }
    }
    setMenu(false);
    setDrawer(false);
    getAllPatients();
  }, [user._id, setPatients, setDrawer, setMenu, setQuery]);

  return (
    <div className="patients-wrapper">
      <NavLink to="/home/newPatient">
        <button className="add-patient-button">
          {" "}
          <img
            className={`add-patient-icon`}
            src={require(`../../photos/add.png`)}
            alt={`add-logo`}
          />
        </button>
      </NavLink>
      <AutoCompleteSearch
        data={_.map(patients, "fullname")}
        placeholder="Trouver un patient"
      />
    </div>
  );
};

export default Patients;
