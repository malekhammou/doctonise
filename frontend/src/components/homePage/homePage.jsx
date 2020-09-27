import React, { useContext } from "react";
import Navbar from "../../commonComponents/navbar/navbar";
import SideDrawer from "../../commonComponents/sidedrawer/sidedrawer";
import ProtectedRoute from "../../commonComponents/protectedRoute";
import { Switch, Redirect } from "react-router-dom";
import Patients from "../../components/patients/patients";
import Backdrop from "../../commonComponents/backdrop/backdrop";
import PatientFile from "../patientFile/patientFile";
import { AppContext } from "../../context/appContext";
import AddPatient from "../add-patient/add-patient";
import PatientSettings from "../update-patient/update-patient";
import Password from "../password/password";
import Stats from "../stats/stats";

const HomePage = () => {
  const { drawer, user } = useContext(AppContext);
  return (
    <div className="main-wrapper">
      {" "}
      <Navbar />
      {drawer && <SideDrawer />}
      <Backdrop />
      <Switch>
        <ProtectedRoute
          path="/home/patients/:id/settings"
          exact
          render={(props) => <PatientSettings {...props} userId={user._id} />}
        />
        <ProtectedRoute
          path="/home/patients/:id"
          exact
          component={PatientFile}
        />
        <ProtectedRoute path="/home/patients" exact component={Patients} />
        <ProtectedRoute path="/home/statistiques" exact component={Stats} />

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

        <Redirect from="/home/calendar" to="/not-found" />
        <Redirect from="/home/change-password*" to="/not-found" />
        <Redirect from="/home/newPatient*" to="/not-found" />
        <Redirect from="/home/patients*" to="/not-found" />
      </Switch>
    </div>
  );
};

export default HomePage;
