const mongoose = require("mongoose");
const joi = require("joi");
const uploadSchema = new mongoose.Schema({
  doctorId: { type: mongoose.ObjectId },
  PatientId: { type: mongoose.ObjectId },
  content: {
    type: String,
  },
});
const Upload = new mongoose.model("Upload", uploadSchema);

module.exports.Upload = Upload;
