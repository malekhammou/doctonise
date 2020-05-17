import React from "react";
import LoginForm from "./loginForm/loginForm";
const Startup = () => {
  return (
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
