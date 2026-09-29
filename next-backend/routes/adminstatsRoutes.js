const express = require("express");
const router = express.Router();

const Product = require("../models/product");
const Category = require("../models/category");
const Subcategory = require("../models/subcategory");
const Slide = require("../models/banner"); // your Slide model
const Visitor = require("../models/Visitor");

//  GET all admin stats
router.get("/stats", async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const totalCategories = await Category.countDocuments();
    const totalSubCategories = await Subcategory.countDocuments();
    const totalSlides = await Slide.countDocuments();

    //  calculate total visitors (sum of visitor.count)
    const visitorData = await Visitor.aggregate([
      { $group: { _id: null, total: { $sum: "$count" } } }
    ]);

    const totalVisitors =
      visitorData.length > 0 ? visitorData[0].total : 0;

    res.json({
      success: true,
      products: totalProducts,
      categories: totalCategories,
      subcategories: totalSubCategories,
      slides: totalSlides,
      visitors: totalVisitors
    });

  } catch (error) {
    console.error("Admin Stats Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
