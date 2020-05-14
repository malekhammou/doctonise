const { validate, Patient } = require("../models/patient");
const validateObjectId = require("../middleware/validateObjectId");
const express = require("express");
const router = express.Router();
const _ = require("lodash");
router.get("/:doctorId", async (req, res) => {
  const patients = await Patient.find({ doctorId: req.params.doctorId });
  res.send(patients);
});
router.get("/:id", validateObjectId, async (req, res) => {
  const patient = await Patient.findById(req.params.id);
  if (!patient) return res.status(400).send("Patient introuvable.");
  res.send(patient);
});
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const patient = new Patient(
    _.pick(req.body, [
      "doctorId",
      "firstname",
      "lastname",
      "email",
      "height",
      "weight",
      "birthday",
      "bloodFamily",
    ])
  );
  await patient.save();
  res.send(patient);
});
router.put("/:id", validateObjectId, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const patient = await Patient.findByIdAndUpdate(
    req.params.id,
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      height: req.body.height,
      weight: req.body.weight,
      birthday: req.body.birthday,
      bloodFamily: req.body.bloodFamily,
      firstAppointment: req.body.firstAppointment,
    },
    { new: true }
  );
  if (!patient) return res.status(400).send("Patient introuvable.");
  res.send(patient);
});
router.delete("/:id", validateObjectId, async (req, res) => {
  const patient = await Patient.findByIdAndRemove(req.params.id);
  if (!patient) return res.status(404).send("patient introuvable");
  res.send(patient);
});
module.exports = router;
