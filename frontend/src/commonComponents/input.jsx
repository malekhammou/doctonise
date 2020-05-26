import React from "react";
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}
        id={name}
        style={{ color: "black" }}
        className="form-control"
      />
      {error && (
        <span
          style={{
            padding: "0",
            border: "none",
            fontSize: "0.8em",
            fontWeight: "500",
            marginTop: "0.35em",
          }}
          className="alert alert-warning"
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
