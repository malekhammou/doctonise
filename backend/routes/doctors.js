const { validate, Doctor } = require("../models/doctor");
const validateObjectId = require("../middleware/validateObjectId");
const express = require("express");
const router = express.Router();
const _ = require("lodash");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Fawn = require("fawn");
Fawn.init(mongoose);
router.get("/", async (req, res, next) => {
  const doctors = await Doctor.find();
  res.send(doctors);
});
router.get("/:id", validateObjectId, async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);
  if (!doctor) return res.status(400).send("Utilisateur introuvable.");
  res.send(doctor);
});
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let doctor = await Doctor.findOne({ email: req.body.email });
  if (doctor)
    return res
      .status(400)
      .send("Cette addresse est déjà associé à un autre utilisateur.");
  doctor = new Doctor(
    _.pick(req.body, ["firstname", "lastname", "email", "password"])
  );
  const salt = await bcrypt.genSalt(10);
  doctor.password = await bcrypt.hash(doctor.password, salt);
  await doctor.save();
  res.send(doctor);
});
router.put("/:id", validateObjectId, async (req, res) => {
  const { error } = validate(req.body);
  if (error) res.status(400).send(error.details[0].message);
  const doctor = await Doctor.findByIdAndUpdate(
    req.params.id,
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      passsword: req.body.passsword,
    },
    { new: true }
  );
  if (!doctor) return res.status(404).send("Utilisateur introuvable");
  res.send(doctor);
});
router.delete("/:id", validateObjectId, async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);
  if (!doctor) return res.status(404).send("Utilisateur introuvable");
  await new Fawn.Task()
    .remove("patients", { doctorId: mongoose.Types.ObjectId(req.params.id) })
    .remove("doctors", { _id: mongoose.Types.ObjectId(req.params.id) })
    .run();
  res.send(doctor);
});
router.post("/changePassword", async (req, res) => {
  let doctor = await Doctor.findOne({ email: req.body.email });
  if (!doctor) return res.status(400).send("Invalid email");
  const validPassword = await bcrypt.compare(
    req.body.currentPassword,
    doctor.password
  );
  if (!validPassword) return res.status(400).send("Invalid password.");
  const salt = await bcrypt.genSalt(10);
  await bcrypt.hash(req.body.newPassword, salt);
  doctor = await Doctor.findOneAndUpdate(
    { email: req.body.email },
    { password: await bcrypt.hash(req.body.newPassword, salt) }
  );
  res.send(doctor);
});
module.exports = router;
