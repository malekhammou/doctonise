import React from "react";
import Joi from "joi-browser";
import "./update-patient.css";
import { getPatientById, updatePatient } from "../../services/patientService";
import { getcurrentUser } from "../../services/userService";
import ConfirmDialog from "../../commonComponents/confirmDialog";
import { formatDate } from "../../utils/date";
import Form from "../../commonComponents/form";
class PatientSettings extends Form {
  async componentDidMount() {
    const data = await getPatientById(
      await getcurrentUser()._id,
      this.props.match.params.id
    );
    this.setState({
      data: this.mapToViewModel(data[0]).patient,
      dateObj: this.mapToViewModel(data[0]).dateObj,
    });
  }
  mapToViewModel(patient) {
    return {
      dateObj: formatDate(patient.birthday),
      patient: {
        firstname: patient.firstname,
        lastname: patient.lastname,
        email: patient.email,
        height: patient.height,
        weight: patient.weight,
        birthday: patient.birthday,
        bloodFamily: patient.bloodFamily,
        phone: patient.phone,
      },
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
    confirmOpen: false,
  };
  schema = {
    firstname: Joi.string()
      .min(2)
      .max(50)
      .required()
      .error(() => {
        return { message: "Ce champs est obligatoire." };
      }),
    lastname: Joi.string()
      .min(2)
      .max(50)
      .required()
      .error(() => {
        return { message: "Ce champs est obligatoire." };
      }),
    email: Joi.string()
      .email()
      .allow("")
      .error(() => {
        return { message: "Veuillez entrer une adresse valide." };
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
    phone: Joi.string().max(20).allow(""),
  };
  updatePatient = async () => {
    try {
      const patient = { ...this.state.data };
      patient.doctorId = this.props.userId;
      await updatePatient(this.props.match.params.id, patient);
      window.location = `/home/patients/${this.props.match.params.id}`;
    } catch (exception) {
      if (exception.response && exception.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = exception.response.data;
        this.setState({ errors });
      }
    }
  };
  setConfirmOpen = (value = false) => {
    this.setState({ confirmOpen: value });
  };
  doSubmit = async () => {
    this.setConfirmOpen(true);
  };
  render() {
    return (
      <div className="update-patient-form-wrapper">
        {" "}
        <ConfirmDialog
          backgroundColor="#72aa62"
          title={`Modifier ${this.state.data.firstname}`}
          open={this.state.confirmOpen}
          setOpen={this.setConfirmOpen}
          onConfirm={() => {
            this.updatePatient();
          }}
        >
          {" "}
          Enregistrer les modifications?{" "}
        </ConfirmDialog>{" "}
        <form id="update-patient-form" onSubmit={this.handleSubmit}>
          {" "}
          <span className="form-title">
            {" "}
            Modifier les informations du patient{" "}
          </span>{" "}
          {this.renderInput("firstname", "", "text", "Prénom")}{" "}
          {this.renderInput("lastname", "", "text", "Nom")}{" "}
          {this.renderInput("email", "", "text", "Email")}{" "}
          {this.renderInput("height", "", "text", "Taille en CM")}{" "}
          {this.renderInput("weight", "", "text", "Poids en KG")}{" "}
          {this.state.dateObj && this.renderDateInput("birthday", "birthday")}{" "}
          {this.renderInput("bloodFamily", "", "text", "Groupe Sanguin")}
          {this.renderInput("phone", "", "text", "Téléphone")}{" "}
          {this.renderButton("Enregistrer", "update-patient-form-button")}{" "}
        </form>{" "}
      </div>
    );
  }
}
export default PatientSettings;
