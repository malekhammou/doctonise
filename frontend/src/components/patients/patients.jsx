import React, { useContext, useEffect } from "react";
import { PatientContext } from "../../context/patientContext";
import { AppContext } from "../../context/appContext";
import "./patients.css";
import { getpatients } from "../../services/patientService";
import SearchBox from "../../commonComponents/searchbox/searchbox";
const Patients = () => {
  let { user } = useContext(AppContext);
  let { patients, setPatients, query, setQuery } = useContext(PatientContext);

  useEffect(() => {
    async function getAllPatients() {
      if (user._id) {
        const Allpatients = await getpatients(user._id);
        setPatients(Allpatients);
      }
    }

    getAllPatients();
  }, [user._id, setPatients]);
  const handleSearch = (query) => {
    setQuery(query);
  };
  let filtered = patients.filter((p) => {
    let fullname = `${p.firstname} ${p.lastname}`;
    return fullname.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="wrapper">
      <div className="patients-wrapper">
        <div className="search-box-wrapper">
          <SearchBox value={query} onChange={handleSearch} />
        </div>
        <div className="patients-list">
          {filtered.map((patient) => (
            <div key={patient._id} className="patient-item">
              <span>{`${patient.firstname} ${patient.lastname}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Patients;
