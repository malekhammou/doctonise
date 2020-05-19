import React from "react";
import LoginForm from "./loginForm/loginForm";
import { Redirect } from "react-router-dom";
const Startup = () => {
  return localStorage.getItem("token") ? (
    <Redirect to="/home" />
  ) : (
    <div className="main-wrapper">
      <img
        className="logo"
        src={require("../photos/logo.jpg")}
        alt="doctonise-logo"
      />
      <LoginForm />
    </div>
  );
};

export default Startup;
