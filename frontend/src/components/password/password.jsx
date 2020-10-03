import React from "react";
import Joi from "joi-browser";
import "./password.css";
import { changePassword } from "../../services/userService";
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
      })
      .valid(Joi.ref("newPassword"))
      .options({
        language: {
          any: {
            allowOnly: "!!Passwords do not match",
          },
        },
      }),
  };

  doSubmit = async () => {
    try {
      const user = {
        email: this.props.user.email,
        currentPassword: this.state.data.currentPassword,
        newPassword: this.state.data.newPassword,
      };
      await changePassword(user);
      window.location = "/home";
    } catch (exception) {
      if (exception.response && exception.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.newPassword = exception.response.data;
        this.setState({ errors });
      }
    }
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
          {this.renderButton("Enregistrer", "change-password-button")}
        </form>
      </div>
    );
  }
}

export default Password;
