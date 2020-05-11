const mongoose = require("mongoose");
const joi = require("joi");
const doctorSchema = new mongoose.Schema({
  firstname: { type: String, minlength: 2, maxlength: 50, required: true },
  lastname: { type: String, minlength: 2, maxlength: 50, required: true },
  email: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true,
    unique: true,
  },
  password: { type: String, minlength: 5, maxlength: 255 },
});
doctorSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, config.get("jwtPrivateKey"));
  return token;
};
const Doctor = new mongoose.model("Doctor", doctorSchema);
validateDoctor = (doctor) => {
  const schema = {
    firstname: joi.string().min(2).max(50).required(),
    lastname: joi.string().min(2).max(50).required(),
    email: joi.string().min(5).max(50).required(),
    password: joi.string().min(5).max(255).required(),
  };

  return joi.validate(doctor, schema);
};
module.exports.Doctor = Doctor;
module.exports.validate = validateDoctor;
