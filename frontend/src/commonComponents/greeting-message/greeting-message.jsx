import React from "react";
import "../navbar/navbar.css";
const GreetingMessage = ({ user, onClick }) => {
  return (
    <span className="greeting-message">
      {`${user.firstname} ${user.lastname}`} <div className="online-icon"></div>
      <i onClick={onClick} className="fa fa-sort-desc menu-button fa-lg"></i>
    </span>
  );
};

export default GreetingMessage;
