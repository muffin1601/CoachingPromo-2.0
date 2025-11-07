const express = require('express');
const Slide = require('../models/banner');
const router = express.Router();

const multer = require("multer");
const path = require("path");

//  Storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/slides");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

//  Upload route
router.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });

  const fileUrl = `${req.protocol}://${req.get("host")}/uploads/slides/${req.file.filename}`;

  res.json({ url: fileUrl });
});



router.get("/banners", async (req, res) => {
  try {
    const banners = await Slide.find();
    res.json(banners);
  } catch (err) {
    res.status(500).json({ message: "Server error fetching banners" });
  }
});

//  Get all slides
router.get("/get-all", async (req, res) => {
  try {
    const slides = await Slide.find().sort({ id: 1 });
    res.json(slides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//  Add new slide
router.post("/post-all", async (req, res) => {
  try {
    const lastSlide = await Slide.findOne().sort({ id: -1 });
    const nextId = lastSlide ? lastSlide.id + 1 : 1;

    const slide = new Slide({
      id: nextId,
      type: req.body.type,
      title: req.body.title,
      subtitle: req.body.subtitle,
      src: req.body.src,
    });

    const newSlide = await slide.save();
    res.status(201).json(newSlide);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//  Update a slide
router.put("/update/:id", async (req, res) => {
  try {
    const slide = await Slide.findOne({ id: req.params.id });
    if (!slide) return res.status(404).json({ message: "Slide not found" });

    slide.title = req.body.title || slide.title;
    slide.subtitle = req.body.subtitle || slide.subtitle;
    slide.type = req.body.type || slide.type;
    slide.src = req.body.src || slide.src;

    const updatedSlide = await slide.save();
    res.json(updatedSlide);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//  Delete a slide
router.delete("/delete/:id", async (req, res) => {
  try {
    const slide = await Slide.findOneAndDelete({ id: req.params.id });
    if (!slide) return res.status(404).json({ message: "Slide not found" });

    res.json({ message: "Slide deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
