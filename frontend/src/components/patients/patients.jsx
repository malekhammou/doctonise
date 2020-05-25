import React, { useContext, useEffect } from "react";
import { PatientContext } from "../../context/patientContext";
import { AppContext } from "../../context/appContext";
import SearchBox from "../../commonComponents/searchbox/searchbox";
import Pagination from "../../utils/paginate";
import { getpatients } from "../../services/patientService";
import PatientsList from "../patients-list/patients-list";
const Patients = () => {
  let { user, setMenu, setDrawer } = useContext(AppContext);
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
  let indexOfLastPatient = currentPage * patientsPerPage;
  let indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  let paginated = filtered.slice(indexOfFirstPatient, indexOfLastPatient);
  let numberOfPages = Math.ceil(filtered.length / patientsPerPage);
  let reachedLastPage = currentPage === numberOfPages;
  let reachedFirstPage = currentPage === 1;
  const paginatePrevious = () => {
    !reachedFirstPage && setCurrentPage(currentPage - 1);
  };
  const paginateNext = () => {
    !reachedLastPage && setCurrentPage(currentPage + 1);
  };
  return (
    <div className="patients-wrapper ">
      <div className="search-box-wrapper">
        <SearchBox value={query} onChange={handleSearch} />
        <button className="add-patient-button">
          {" "}
          <img
            className={`add-patient-icon`}
            src={require(`../../photos/add.png`)}
            alt={`add-logo`}
          />
        </button>
      </div>
      <PatientsList patients={paginated} />
      {filtered.length > patientsPerPage && (
        <Pagination
          paginatePrevious={paginatePrevious}
          paginateNext={paginateNext}
          reachedFirstPage={reachedFirstPage}
          reachedLastPage={reachedLastPage}
        />
      )}
    </div>
  );
};

export default Patients;
