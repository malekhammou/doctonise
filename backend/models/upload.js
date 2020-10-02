const mongoose = require("mongoose");
const uploadSchema = new mongoose.Schema({
  doctorId: { type: mongoose.ObjectId },
  patientId: { type: mongoose.ObjectId },
  imageUrl: String,
});
const Upload = new mongoose.model("Upload", uploadSchema);

module.exports.Upload = Upload;
