const express = require("express");
const router = express.Router();

const Category = require("../models/category");
const Subcategory = require("../models/subcategory");
const Product = require("../models/product");

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
