import React from "react";
import Joi from "joi-browser";
import "./add-patient.css";
import { addPatient } from "../../services/patientService";
import Form from "../../commonComponents/form";
class AddPatientForm extends Form {
  state = {
    data: {
      firstname: "",
      lastname: "",
      email: "",
      height: "",
      weight: "",
      birthday: "",
      bloodFamily: "",
      phone: "",
      gender: "",
    },
    errors: {
      firstname: "",
      lastname: "",
      email: "",
      height: "",
      weight: "",
      birthday: "",
      bloodFamily: "",
      phone: "",
      gender: "",
    },
  };

  schema = {
    firstname: Joi.string()
      .min(2)
      .max(50)
      .required()
      .error(() => {
        return {
          message: "Ce champs est obligatoire.",
        };
      }),
    lastname: Joi.string()
      .min(2)
      .max(50)
      .required()
      .error(() => {
        return {
          message: "Ce champs est obligatoire.",
        };
      }),
    email: Joi.string()
      .email()
      .allow("")
      .error(() => {
        return {
          message: "Veuillez entrer une adresse valide.",
        };
      }),
    height: Joi.number().min(1).max(300).allow(""),
    weight: Joi.number().min(0).max(800).allow(""),
    birthday: Joi.date().allow(""),
    bloodFamily: Joi.string()
      .valid(["A", "AB", "O", "A+", "A-", "AB+", "AB-", "O+", "O-"])
      .allow("")
      .error(() => {
        return {
          message: "A, AB, O, A+, A-, AB+, AB-, O+, O-",
        };
      }),
    gender: Joi.string()
      .valid(["Homme", "Femme"])
      .allow("")
      .error(() => {
        return {
          message: "Homme,Femme",
        };
      }),
    phone: Joi.string().max(20).allow(""),
  };

  doSubmit = async () => {
    try {
      const patient = { ...this.state.data };
      patient.doctorId = this.props.user._id;
      await addPatient(patient);
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
      <div className="add-patient-form-wrapper">
        <form id="add-patient-form" onSubmit={this.handleSubmit}>
          <span className="form-title">Nouveau patient</span>
          {this.renderInput("firstname", "", "text", "Prénom")}
          {this.renderInput("lastname", "", "text", "Nom")}
          {this.renderInput("email", "", "text", "Email")}
          {this.renderInput("height", "", "text", "Taille en CM")}
          {this.renderInput("weight", "", "text", "Poids en KG")}
          {this.renderDateInput("birthday", "birthday")}
          {this.renderInput("bloodFamily", "", "text", "Groupe Sanguin")}
          {this.renderInput("gender", "", "text", "Sexe")}
          {this.renderInput("phone", "", "text", "Téléphone")}
          {this.renderButton("Enregistrer", "add-patient-form-button")}
        </form>
      </div>
    );
  }
}

export default AddPatientForm;
