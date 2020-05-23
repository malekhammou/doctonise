import React, { useContext, useEffect } from "react";
import { PatientContext } from "../../context/patientContext";
import { AppContext } from "../../context/appContext";
import "./patients.css";
import { getpatients } from "../../services/patientService";
import SearchBox from "../../commonComponents/searchbox/searchbox";
import { NavLink } from "react-router-dom";
import Pagination from "../../utils/paginate";
const Patients = () => {
  let { user, setDrawer, setMenu } = useContext(AppContext);
  let {
    patients,
    setPatients,
    query,
    setQuery,
    currentPage,
    setCurrentPage,
    patientsPerPage,
  } = useContext(PatientContext);

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

    return () => {
      setQuery("");
    };
  }, [user._id, setPatients, setDrawer, setMenu, setQuery]);
  const handleSearch = (query) => {
    setCurrentPage(1);
    setQuery(query);
  };
  let filtered = patients.filter((p) => {
    let fullname = `${p.firstname} ${p.lastname}`;
    return fullname.toLowerCase().includes(query.toLowerCase());
  });
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  let paginated = filtered.slice(indexOfFirstPatient, indexOfLastPatient);
  const numberOfPages = Math.ceil(filtered.length / patientsPerPage);
  let reachedLastPage = currentPage === numberOfPages;
  let reachedFirstPage = currentPage === 1;
  const paginatePrevious = (pageNumber) => {
    setCurrentPage(currentPage - 1);
  };
  const paginateNext = (pageNumber) => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <div className="wrapper">
      <div className="patients-wrapper ">
        <div className="search-box-wrapper">
          <SearchBox value={query} onChange={handleSearch} />
        </div>
        <div className="patients-list">
          {paginated.map((patient) => (
            <NavLink
              key={patient._id}
              className="patient-navlink"
              to={`/home/patients/${patient._id}`}
            >
              <div key={patient._id} className="patient-item">
                <span>{`${patient.firstname} ${patient.lastname}`}</span>
              </div>
            </NavLink>
          ))}
        </div>
        {filtered.length > patientsPerPage && (
          <Pagination
            paginatePrevious={paginatePrevious}
            paginateNext={paginateNext}
            reachedFirstPage={reachedFirstPage}
            reachedLastPage={reachedLastPage}
          />
        )}
      </div>
    </div>
  );
};

export default Patients;
