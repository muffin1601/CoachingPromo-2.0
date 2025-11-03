const express = require("express");
const router = express.Router();
const Category = require("../models/product"); // category model

//  GET CATEGORY BY SLUG (with products, subcategories, filters, sorting, pagination)
router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    // Query params
    const page = parseInt(req.query.page) || 1;
    const limit = 20;  // 20 products per page → change if needed
    const sort = req.query.sort || "default";
    const color = req.query.color;
    const size = req.query.size;
    const priceRange = req.query.price || ""; // example: "400-800"

    //  Fetch category
    const category = await Category.findOne({ slug });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    //------------------------------------------
    //  Merge all products under subcategories
    //------------------------------------------
    let allProducts = [];
    category.subcategories.forEach((sub) => {
      if (Array.isArray(sub.products)) {
        allProducts.push(...sub.products);
      }
    });

    //------------------------------------------
    //  Filtering
    //------------------------------------------

    // Color filter
    if (color) {
      allProducts = allProducts.filter((p) =>
        p.attributes?.color?.includes(color)
      );
    }

    // Size filter
    if (size) {
      allProducts = allProducts.filter((p) =>
        p.attributes?.size?.includes(size)
      );
    }

    // Price Range filter
    if (priceRange && priceRange.includes("-")) {
      const [min, max] = priceRange.split("-").map(Number);
      allProducts = allProducts.filter(
        (p) => p.price >= min && p.price <= max
      );
    }

    //------------------------------------------
    //  Sorting
    //------------------------------------------
    if (sort === "low-high") {
      allProducts.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
    }

    if (sort === "high-low") {
      allProducts.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
    }

//    ------------------------------------------
    //  Pagination
    //-----------------------------------------
    const totalProducts = allProducts.length;
    const totalPages = Math.ceil(totalProducts / limit);
    const startIndex = (page - 1) * limit;
    const paginatedProducts = allProducts.slice(startIndex, startIndex + limit);


    res.json({
      category: {
        name: category.name,
        slug: category.slug,
        image: category.image,
        description: category.description,
        seo: category.seo,
      },
      subcategories: category.subcategories.map((sub) => ({
        name: sub.name,
        slug: sub.slug,
        image: sub.image,
      })),
      products: paginatedProducts,
      pagination: {
        page,
        totalPages,
        totalProducts,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

module.exports = router;
