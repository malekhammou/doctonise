import React from "react";
import "./add-patient.css";
import { useEffect } from "react";
const AddPatient = () => {
  useEffect(() => console.log("Hello"));
  return (
    <div className="form-wrapper">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
        doloribus provident, architecto iure quam similique facere nihil
        laudantium atque iste placeat quod corporis ea necessitatibus sunt sed
        reiciendis quisquam. Dolor!
      </p>
    </div>
  );
};

export default AddPatient;
