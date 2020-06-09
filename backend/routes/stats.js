const { Patient } = require("../models/patient");
const validateDObjectId = require("../middleware/validateDObjectId");
const express = require("express");
const router = express.Router();
router.get("/:doctorId/patientsCount", validateDObjectId, async (req, res) => {
  const count = await Patient.countDocuments({});
  if (!count) return res.status(404).send("count introuvable");
  res.json({ count: count });
});
module.exports = router;
