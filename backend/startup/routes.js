const express = require("express");
const cors = require("cors");
const doctors = require("../routes/doctors");
const patients = require("../routes/patients");
const stats = require("../routes/stats");
const auth = require("../routes/auth");
const error = require("../middleware/error");
module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use("/api/doctors", doctors);
  app.use("/api/patients", patients);
  app.use("/api/stats", stats);
  app.use("/api/auth", auth);
  app.use(error);
};
