import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";
import Datepicker from "./datePicker/datePicker";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };
  handleDateChange = (e) => {
    const date = new Date(`${e.year}-${e.month}-${e.day}`);
    const isoDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    ).toISOString();
    const data = { ...this.state.data };
    data.birthday = isoDate;
    this.setState({ data });
  };

  renderButton(label, buttonClass) {
    return (
      <button disabled={this.validate()} className={`btn  ${buttonClass}`}>
        {label}
      </button>
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  renderDateInput(name, label) {
    const { errors } = this.state;

    return (
      <div
        className="form-control "
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1.5em",
          marginBottom: "1em",
        }}
      >
        <Datepicker
          name={name}
          label={label}
          value={this.state.dateObj}
          onChange={this.handleDateChange}
          error={errors[name]}
        />
      </div>
    );
  }
  renderInput(name, label, type = "text", placeholder) {
    const { data, errors } = this.state;

    return (
      <Input
        placeholder={placeholder}
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
