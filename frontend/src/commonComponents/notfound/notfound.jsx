import React from "react";
import "./notfound.css";
const NotFound = () => {
  return (
    <div className="main-wrapper">
      <img
        className="not-found"
        src={require("../../photos/not-found.png")}
        alt="notfound-logo"
      />
    </div>
  );
};

export default NotFound;
