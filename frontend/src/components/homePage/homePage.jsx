import React, { useContext } from "react";
import Navbar from "../../commonComponents/navbar/navbar";
import SideDrawer from "../../commonComponents/sidedrawer/sidedrawer";
import ProtectedRoute from "../../commonComponents/protectedRoute";
import { Switch, Redirect } from "react-router-dom";
import Patients from "../../components/patients/patients";
import Backdrop from "../../commonComponents/backdrop/backdrop";
import PatientFile from "../patientFile/patientFile";
import { AppContext } from "../../context/appContext";
const HomePage = () => {
  const { drawer } = useContext(AppContext);
  return (
    <div className="main-wrapper">
      {" "}
      <Navbar />
      {drawer && <SideDrawer />}
      <Backdrop />
      <Switch>
        <ProtectedRoute
          path="/home/patients/:id"
          exact
          component={PatientFile}
        />
        <ProtectedRoute path="/home/patients" exact component={Patients} />
        <Redirect from="/home/patients*" to="/not-found" />
      </Switch>
    </div>
  );
};

export default HomePage;
