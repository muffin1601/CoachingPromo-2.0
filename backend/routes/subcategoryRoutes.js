const express = require("express");
const router = express.Router();

const Category = require("../models/category");
const Subcategory = require("../models/subcategory");
const Product = require("../models/product");
const multer = require("multer");
const path = require("path");

//  Multer Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/subcategories");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });


// Upload Image Route
router.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file)
    return res.status(400).json({ message: "No file uploaded" });

  const fileUrl = `${req.protocol}://${req.get("host")}/uploads/subcategories/${req.file.filename}`;

  res.json({ url: fileUrl });
});


//  Get All Subcategories
router.get("/all", async (req, res) => {
  try {
    const subs = await Subcategory.find()
      .populate("category", "name slug")
      .sort({ createdAt: -1 });

    res.json(subs);

  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});


// Create Subcategory
router.post("/create", async (req, res) => {
  try {
    const { name, slug, description, image, category, seo } = req.body;

    const exists = await Subcategory.findOne({ slug });
    if (exists) {
      return res.status(400).json({ message: "Slug already exists" });
    }

    const newSub = new Subcategory({
      name,
      slug,
      description,
      image,
      category,
      seo: {
        metaTitle: seo?.metaTitle || "",
        metaDescription: seo?.metaDescription || "",
        keywords: seo?.keywords?.split(",").map(k => k.trim()) || [],
      },
    });

    await newSub.save();

    // Push into category.subcategories
    await Category.findByIdAndUpdate(category, {
      $push: { subcategories: newSub._id }
    });

    res.status(201).json(newSub);

  } catch (err) {
    res.status(500).json({ message: "Error creating subcategory", error: err.message });
  }
});


//  Update Subcategory
router.put("/update/:id", async (req, res) => {
  try {
    const sub = await Subcategory.findById(req.params.id);
    if (!sub) return res.status(404).json({ message: "Subcategory not found" });

    const { name, slug, description, image, category, seo } = req.body;

    sub.name = name || sub.name;
    sub.slug = slug || sub.slug;
    sub.description = description || sub.description;
    sub.image = image || sub.image;
    sub.category = category || sub.category;

    if (seo) {
      sub.seo.metaTitle = seo.metaTitle || "";
      sub.seo.metaDescription = seo.metaDescription || "";
      sub.seo.keywords = seo.keywords
        ? seo.keywords.split(",").map(k => k.trim())
        : [];
    }

    await sub.save();

    res.json(sub);

  } catch (err) {
    res.status(500).json({ message: "Error updating subcategory", error: err.message });
  }
});


//  Delete Subcategory
router.delete("/delete/:id", async (req, res) => {
  try {
    const sub = await Subcategory.findByIdAndDelete(req.params.id);
    if (!sub) return res.status(404).json({ message: "Subcategory not found" });

    // Remove from category reference
    await Category.findByIdAndUpdate(sub.category, {
      $pull: { subcategories: sub._id }
    });

    res.json({ message: "Subcategory deleted successfully" });

  } catch (err) {
    res.status(500).json({ message: "Error deleting subcategory", error: err.message });
  }
});

//  GET SUBCATEGORY + PRODUCTS
router.get("/:categorySlug/:subSlug", async (req, res) => {
  try {
    const { categorySlug, subSlug } = req.params;

    //  Find category by slug
    const category = await Category.findOne({ slug: categorySlug });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    //  Find subcategory by slug + belongs to category
    const subcategory = await Subcategory.findOne({
      slug: subSlug,
      category: category._id,
    });

    if (!subcategory) {
      return res.status(404).json({ message: "Subcategory not found" });
    }

    //  Fetch products for this subcategory
    const products = await Product.find({
      subcategory: subcategory._id,
      isActive: true,
    }).select("name slug price salePrice images attributes ratings stock");

    return res.json({
      success: true,
      category: {
        name: category.name,
        slug: category.slug,
      },
      subcategory: {
        name: subcategory.name,
        slug: subcategory.slug,
        image: subcategory.image,
        description: subcategory.description,
        seo: subcategory.seo,
      },
      products,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

module.exports = router;
