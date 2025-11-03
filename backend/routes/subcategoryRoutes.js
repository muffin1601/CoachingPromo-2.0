const express = require("express");
const router = express.Router();
const Category = require("../models/product"); // category model


router.get("/:categorySlug/:subSlug", async (req, res) => {
  try {
    const { categorySlug, subSlug } = req.params;

    const category = await Category.findOne({
      slug: categorySlug,
    });

    if (!category) return res.status(404).json({ message: "Category not found" });

    const subcategory =
      category.subcategories.find((sc) => sc.slug === subSlug);

    if (!subcategory)
      return res.status(404).json({ message: "Subcategory not found" });

    return res.json({
      subcategory,
      products: subcategory?.products || [],
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});


module.exports = router;
