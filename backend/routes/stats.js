const { Patient } = require("../models/patient");
const validateDObjectId = require("../middleware/validateDObjectId");
const express = require("express");
const router = express.Router();
router.get("/:doctorId/patientsCount", validateDObjectId, async (req, res) => {
  const count = await Patient.countDocuments({});
  if (!count) return res.status(404).send("count introuvable");
  res.json({ count: count });
});
router.get("/:doctorId/genderStats", validateDObjectId, async (req, res) => {
  const count = await Patient.countDocuments({});
  const countMale = await Patient.countDocuments({ gender: "Homme" });
  const countFemale = await Patient.countDocuments({ gender: "Femme" });
  const malePercentage = (countMale / count) * 100;
  const femalePercentage = (countFemale / count) * 100;
  const formattedMalePercentage = (
    Math.round(malePercentage * 100) / 100
  ).toFixed(2);
  const formattedFemalePercentage = (
    Math.round(femalePercentage * 100) / 100
  ).toFixed(2);

  if (!count || !countMale || !countFemale)
    return res.status(404).send("statistiques introuvable");
  res.json({
    count,
    countMale,
    countFemale,
    formattedMalePercentage,
    formattedFemalePercentage,
  });
});
module.exports = router;
