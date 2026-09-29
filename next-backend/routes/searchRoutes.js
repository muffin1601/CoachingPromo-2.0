const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// SEARCH PRODUCTS
router.get("/search", async (req, res) => {
  try {
    const query = req.query.q || "";
    if (!query.trim()) {
      return res.status(400).json({ message: "Search query required" });
    }

    // Case-insensitive regex
    const regex = { $regex: query, $options: "i" };

    const products = await Product.find({
      $or: [
        { name: regex },
        { slug: regex },
        { "attributes.color": regex },
        { "attributes.size": regex },
        { "attributes.material": regex },
        { tags: regex },
        { "seo.keywords": regex },
        { "description.short": regex },
        { "description.long": regex }
      ],
      isActive: true
    })
      .populate("category", "name slug")
      .populate("subcategory", "name slug")
      .limit(50);

    // Format output for frontend
    const formattedResults = products.map((p) => ({
      _id: p._id,
      name: p.name,
      slug: p.slug,
      images: p.images,
      salePrice: p.salePrice,
      price: p.price,
      category: p.category
        ? { name: p.category.name, slug: p.category.slug }
        : null,
      subcategory: p.subcategory
        ? { name: p.subcategory.name, slug: p.subcategory.slug }
        : null,
    }));

    res.status(200).json({
      count: products.length,
      results: formattedResults,
    });
  } catch (err) {
    console.error("Search error:", err);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
