
const Product = require("../models/product");
const express = require("express");
const router = express.Router();
const Category = require("../models/category");
const Subcategory = require("../models/subcategory");
const path = require("path");
const multer = require("multer");

//  Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/categories");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

//  Upload Category Image
router.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });

  const url = `${req.protocol}://${req.get("host")}/uploads/categories/${req.file.filename}`;
  res.json({ url });
});

//  GET All Categories
router.get("/all", async (req, res) => {
  try {
    const categories = await Category.find()
      .populate("subcategories", "name slug")
      .sort({ createdAt: -1 });

    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//  Create Category
router.post("/create", async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();

    res.status(201).json({ success: true, category });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//  Update Category
router.put("/update/:id", async (req, res) => {
  try {
    const updated = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({ success: true, category: updated });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//  Delete Category
router.delete("/delete/:id", async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Category deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CATEGORY PAGE → get category + subcategories + products
router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    //  Find the category
    const category = await Category.findOne({ slug });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    //  Find matching subcategories
    const subcategories = await Subcategory.find({
      category: category._id,
    }).select("name slug image description seo");

    //  Get all products belonging to this category
    const products = await Product.find({
      category: category._id,
      isActive: true,
    }).select("name slug price salePrice images stock");

    return res.json({
      success: true,
      category,
      subcategories,
      products,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

module.exports = router;
