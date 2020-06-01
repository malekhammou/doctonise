import React from "react";
import Joi from "joi-browser";
import "./password.css";
import Form from "../../commonComponents/form";
class Password extends Form {
  state = {
    data: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    errors: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  };

  schema = {
    currentPassword: Joi.string()
      .min(2)
      .max(50)
      .required()
      .error(() => {
        return {
          message: "Ce champs est obligatoire.",
        };
      }),
    newPassword: Joi.string()
      .min(2)
      .max(50)
      .required()
      .error(() => {
        return {
          message: "Ce champs est obligatoire.",
        };
      }),
    confirmNewPassword: Joi.string()
      .min(2)
      .max(50)
      .required()
      .error(() => {
        return {
          message: "Ce champs est obligatoire.",
        };
      }),
  };

  doSubmit = async () => {
    /*   try {
      const patient = { ...this.state.data };
      patient.doctorId = this.props.user._id;
      await addPatient(patient);
      window.location = "/home/patients";
    } catch (exception) {
      if (exception.response && exception.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = exception.response.data;
        this.setState({ errors });
      }
    } */
  };

  render() {
    return (
      <div className="add-patient-form-wrapper">
        <form id="change-password-form" onSubmit={this.handleSubmit}>
          <span className="form-title">Changer votre mot de passe</span>
          {this.renderInput(
            "currentPassword",
            "",
            "password",
            "Mot de passe actuel"
          )}
          {this.renderInput(
            "newPassword",
            "",
            "password",
            "Nouveau mot de passe"
          )}
          {this.renderInput(
            "confirmNewPassword",
            "",
            "password",
            " Confirmer le nouveau mot de passe"
          )}
        </form>
      </div>
    );
  }
}

export default Password;
