const express = require("express");
const cors = require("cors");
const doctors = require("../routes/doctors");
module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use("/api/doctors", doctors);
};
