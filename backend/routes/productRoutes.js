const express = require("express");
const router = express.Router();

const Product = require("../models/product");
const Category = require("../models/category");
const Subcategory = require("../models/subcategory");

router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    //  Find product by slug + populate category + subcategory
    const product = await Product.findOne({ slug })
      .populate("category", "name slug")
      .populate("subcategory", "name slug");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      success: true,
      product,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
