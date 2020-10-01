const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const doctors = require("../routes/doctors");
const patients = require("../routes/patients");
const uploads = require("../routes/uploads");
const stats = require("../routes/stats");
const auth = require("../routes/auth");
const error = require("../middleware/error");
module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use("/api/doctors", doctors);
  app.use("/api/patients", patients);
  app.use("/api/uploads", uploads);
  app.use("/api/stats", stats);
  app.use("/api/auth", auth);
  app.use(error);
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );
  app.use("/public", express.static("public"));
};
