const { Upload } = require("../models/upload");
const express = require("express");
const router = express.Router();
router.post("/", async (req, res) => {
  const upload = new Upload({
    doctorId: req.body.doctorId,
    patientId: req.body.patientId,
    imageUrl: req.body.imageUrl,
  });
  await upload.save();
  res.json(upload.imageUrl);
});

router.get("/", async (req, res) => {
  const upload = await Upload.findOne().sort({ _id: -1 });
  res.json(upload.imageUrl);
});

module.exports = router;
