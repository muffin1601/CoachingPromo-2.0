const express = require("express");
const router = express.Router();

const Category = require("../models/category");
const Subcategory = require("../models/subcategory");
const Product = require("../models/product");

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
