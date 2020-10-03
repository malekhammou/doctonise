import React, { useContext, useEffect } from "react";
import "./homePage.css";
import _ from "lodash";
import { PatientContext } from "../../context/patientContext";
import { Switch, Redirect } from "react-router-dom";
import { getpatients } from "../../services/patientService";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../context/appContext";
import Navbar from "../../commonComponents/navbar/navbar";
import SideDrawer from "../../commonComponents/sidedrawer/sidedrawer";
import ProtectedRoute from "../../commonComponents/protectedRoute";
import Backdrop from "../../commonComponents/backdrop/backdrop";
import PatientFile from "../patientFile/patientFile";
import AutoCompleteSearch from "../../commonComponents/autocomplete-search/autoCompleteSearch";
import AddPatient from "../add-patient/add-patient";
import PatientSettings from "../update-patient/update-patient";
import Password from "../password/password";
import Stats from "../stats/stats";

const HomePage = () => {
  const { drawer, user, setMenu, setDrawer } = useContext(AppContext);
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
    <div className="main-wrapper">
      {" "}
      <Navbar />
      {drawer && <SideDrawer />}
      <Backdrop />
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
          data={_.map(
            patients,
            _.partial(_.ary(_.pick, 2), _, ["fullname", "_id"])
          )}
          placeholder="Trouver un patient"
        />
      </div>
      <Switch>
        <ProtectedRoute
          path="/home/newPatient"
          exact
          render={(props) => <AddPatient {...props} user={user} />}
        />
        <ProtectedRoute
          path="/home/change-password"
          exact
          render={(props) => <Password {...props} user={user} />}
        />
        <ProtectedRoute path="/home/statistiques" exact component={Stats} />
        <Redirect from="/home/calendar" to="/not-found" />
        <ProtectedRoute
          path="/home/:id/settings"
          exact
          render={(props) => <PatientSettings {...props} userId={user._id} />}
        />
        <ProtectedRoute path="/home/:id" exact component={PatientFile} />

        <Redirect from="/home/change-password*" to="/not-found" />
      </Switch>
    </div>
  );
};

export default HomePage;
