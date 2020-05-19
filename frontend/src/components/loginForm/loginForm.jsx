import React from "react";
import Joi from "joi-browser";
import "./loginForm.css";
import Form from "../../commonComponents/form";
import { login } from "../../services/userService";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: { email: "", password: "" },
  };

  schema = {
    email: Joi.string()
      .email()
      .min(5)
      .max(50)
      .required()
      .label("Username")
      .error(() => {
        return {
          message: "Veuillez entrer une adresse valide.",
        };
      }),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
      .label("Password")
      .error(() => {
        return {
          message: "le mot de passe doit contenir au moins 5 caractéres.",
        };
      }),
  };

  doSubmit = async () => {
    try {
      await login(this.state.data);
      window.location = "/home";
    } catch (exception) {
      if (exception.response && exception.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = exception.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="login-form-wrapper">
        <form id="login-form" onSubmit={this.handleSubmit}>
          {this.renderInput("email", "", "text", "Adresse E-mail")}
          {this.renderInput("password", "", "password", "Mot de passe")}
          {this.renderButton("Se connecter", "login-button")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
