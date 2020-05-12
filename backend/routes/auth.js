const Joi = require("joi");
const bcrypt = require("bcryptjs");
const _ = require("lodash");
const { Doctor } = require("../models/doctor");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let doctor = await Doctor.findOne({ email: req.body.email });
  if (!doctor) return res.status(400).send("Invalid email or password.");

  const validPassword = await bcrypt.compare(
    req.body.password,
    doctor.password
  );
  if (!validPassword) return res.status(400).send("Invalid email or password.");

  const token = doctor.generateAuthToken();
  res.send(token);
});

function validate(req) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  };

  return Joi.validate(req, schema);
}

module.exports = router;
