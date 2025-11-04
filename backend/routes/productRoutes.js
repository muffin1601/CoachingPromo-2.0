const express = require("express");
const router = express.Router();
const Category = require("../models/product");


router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    const categories = await Category.find({
      "subcategories.products.slug": slug,
    });

    if (!categories.length)
      return res.status(404).json({ message: "Product not found" });

    let foundProduct = null;

    categories.forEach((cat) => {
      cat.subcategories.forEach((sub) => {
        sub.products.forEach((p) => {
          if (p.slug === slug) foundProduct = p;
        });
      });
    });

    return res.json({ success: true, product: foundProduct });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
