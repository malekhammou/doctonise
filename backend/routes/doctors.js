const { validate, Doctor } = require("../models/doctor");
const validateObjectId = require("../middleware/validateObjectId");
const express = require("express");
const router = express.Router();
const _ = require("lodash");
const bcrypt = require("bcryptjs");

router.get("/", async (req, res) => {
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
  try {
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
  } catch (exception) {
    res.send("Cette addresse est déjà associé à un autre utilisateur.");
  }
});
router.delete("/:id", validateObjectId, async (req, res) => {
  const doctor = await Doctor.findByIdAndRemove(req.params.id);
  if (!doctor) return res.status(404).send("Utilisateur introuvable");
  res.send(doctor);
});
module.exports = router;
