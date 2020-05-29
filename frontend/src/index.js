import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/appContext";
import { PatientProvider } from "./context/patientContext";
import { NavbarProvider } from "./context/navbarContext";
import { ConfirmDialogProvider } from "./context/confirmDialogContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <ConfirmDialogProvider>
          <NavbarProvider>
            <PatientProvider>
              <App />
            </PatientProvider>
          </NavbarProvider>
        </ConfirmDialogProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
