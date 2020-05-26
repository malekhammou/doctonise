import React from "react";
import Joi from "joi-browser";
import "./update-patient.css";
import { addPatient, getPatientById } from "../../services/patientService";
import { getcurrentUser } from "../../services/userService";
import Form from "../../commonComponents/form";
class PatientSettings extends Form {
  async componentDidMount() {
    const data = await getPatientById(
      await getcurrentUser()._id,
      this.props.match.params.id
    );
    this.setState({ data: this.mapToViewModel(data[0]) });
  }
  formatDate = (isoString) => {
    const dateArray = new Date(isoString)
      .toLocaleDateString()
      .toString()
      .split("/");
    return {
      day: parseInt(dateArray[1], 10),
      month: parseInt(dateArray[0], 10),
      year: parseInt(dateArray[2], 10),
    };
  };
  mapToViewModel(patient) {
    return {
      firstname: patient.firstname,
      lastname: patient.lastname,
      email: patient.email,
      height: patient.height,
      weight: patient.weight,
      birthday: this.formatDate(patient.birthday),
      bloodFamily: patient.birthday,
      phone: patient.phone,
    };
  }
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
      .allow(""),
    phone: Joi.string().max(20).allow(""),
  };

  doSubmit = async () => {
    try {
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
    }
  };

  render() {
    console.log(this.state.data);
    return (
      <div className="add-patient-form-wrapper">
        <form id="update-patient-form" onSubmit={this.handleSubmit}>
          <span className="form-title">
            Modifier les informations du patient
          </span>
          {this.renderInput("firstname", "", "text", "Prénom")}
          {this.renderInput("lastname", "", "text", "Nom")}
          {this.renderInput("email", "", "text", "Email")}
          {this.renderInput("height", "", "text", "Taille en CM")}
          {this.renderInput("weight", "", "text", "Poids en KG")}
          {this.state.data.birthday &&
            this.renderDateInput("birthday", "birthday")}
          {this.renderInput("phone", "", "text", "Téléphone")}
          {this.renderButton("Enregistrer", "update-patient-form-button")}
        </form>
      </div>
    );
  }
}

export default PatientSettings;
