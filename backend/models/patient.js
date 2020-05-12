const mongoose = require("mongoose");
const joi = require("joi");
const patientSchema = new mongoose.Schema({
  doctorId: { type: mongoose.ObjectId, required: true },
  firstname: { type: String, minlength: 2, max: 50, required: true },
  lastname: { type: String, minlength: 2, maxlength: 50, required: true },
  email: {
    type: String,

    validate: {
      validator: async function (email) {
        const emailAddress = await Patient.find({ email }).select("email");
        return email == "" || emailAddress.length < 1;
      },
      message: "Cette addresse est associée à un autre compte ",
    },
  },
  height: { type: Number, min: 1, max: 300 },
  weight: { type: Number, min: 0, max: 800 },
  birthday: { type: Date },
  bloodFamily: {
    type: String,
    enum: ["A", "AB", "O", "A+", "A-", "AB+", "AB-", "O+", "O-", ""],
  },
  firstAppointment: { type: Date, default: Date.now },
});
const Patient = new mongoose.model("Patient", patientSchema);
validatePatient = (patient) => {
  const schema = {
    doctorId: joi.objectId().required(),
    firstname: joi.string().min(2).max(50).required(),
    lastname: joi.string().min(2).max(50).required(),
    email: joi.string().email().allow(""),
    height: joi.number().min(1).max(300).allow(""),
    weight: joi.number().min(0).max(800).allow(""),
    birthday: joi.date().allow(""),
    bloodFamily: joi
      .string()
      .valid(["A", "AB", "O", "A+", "A-", "AB+", "AB-", "O+", "O-"])
      .allow(""),
  };
  return joi.validate(patient, schema);
};
module.exports.Patient = Patient;
module.exports.validate = validatePatient;
