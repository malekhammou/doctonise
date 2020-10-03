const { Upload } = require("../models/upload");
const validateObjectId = require("../middleware/validateObjectId");
const validateDObjectId = require("../middleware/validateDObjectId");
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

router.get(
  "/:doctorId/:id",
  validateDObjectId,
  validateObjectId,
  async (req, res) => {
    const uploads = await Upload.find(
      {
        doctorId: req.params.doctorId,
        patientId: req.params.id,
      },
      { _id: 0, doctorId: 0, patientId: 0 }
    );
    if (!uploads) return res.status(400).send("Aucun document trouvé.");
    links = uploads.map((a) => a.imageUrl);
    res.send(links);
  }
);

module.exports = router;
