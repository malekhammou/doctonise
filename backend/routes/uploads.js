const { Upload } = require("../models/upload");
const express = require("express");
const multer = require("multer");
const router = express.Router();
const upload = multer({ dest: "/uploads" });
router.post("/", upload.single("content"), (req, res, next) => {
  const upload = new Upload({
    doctorId: req.body.doctorId,
    patinetId: req.body.patientId,
    content: req.file.path,
  });
  upload
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Upload registered successfully!",
        uploadCreated: {
          _id: result._id,
          content: result.content,
        },
      });
    })
    .catch((err) => {
      console.log(err),
        res.status(500).json({
          error: err,
        });
    });
});

router.get("/", (req, res, next) => {
  Upload.find().then((data) => {
    res.status(200).json({
      message: "Uploads list retrieved successfully!",
      uploads: data,
    });
  });
});

module.exports = router;
