const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const Product = require("../models/product");

// Auto-create folder
const UPLOAD_DIR = "uploads/products";
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

// Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// ---- Uploads ----
router.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });
  const url = `${req.protocol}://${req.get("host")}/uploads/products/${req.file.filename}`;
  res.json({ url });
});

router.post("/upload-multi", upload.array("images", 10), (req, res) => {
  if (!req.files || !req.files.length) return res.status(400).json({ message: "No files uploaded" });
  const urls = req.files.map(f => `${req.protocol}://${req.get("host")}/uploads/products/${f.filename}`);
  res.json({ urls });
});

// ---- List with pagination & search ----
router.get("/all", async (req, res) => {
  try {
    const page = parseInt(req.query.page || "1", 10);
    const limit = parseInt(req.query.limit || "10", 10);
    const search = (req.query.search || "").trim();

    const q = {};
    if (search) {
      q.$or = [
        { name: new RegExp(search, "i") },
        { slug: new RegExp(search, "i") },
        { sku: new RegExp(search, "i") },
        { tags: new RegExp(search, "i") },
      ];
    }

    const total = await Product.countDocuments(q);
    const items = await Product.find(q)
      .populate("category", "name slug")
      .populate("subcategory", "name slug")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      items,
      page,
      totalPages: Math.ceil(total / limit),
      total,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ---- Create ----
router.post("/create", async (req, res) => {
  try {
    const b = req.body;

    // Normalize arrays from string inputs if needed
    const coerceArray = (val) =>
      Array.isArray(val) ? val : (val ? String(val).split(",").map(s => s.trim()).filter(Boolean) : []);

    const product = new Product({
      name: b.name,
      slug: b.slug,
      description: {
        short: b.description?.short || "",
        long: b.description?.long || "",
      },
      price: b.price,
      salePrice: b.salePrice || null,

      images: (b.images || []).map((it) => ({ url: it.url, altText: it.altText || "" })),
      subImages: (b.subImages || []).map((it) => ({ url: it.url, altText: it.altText || "" })),

      stock: b.stock || 0,
      sku: b.sku || null,

      attributes: {
        color: coerceArray(b.attributes?.color),
        size: coerceArray(b.attributes?.size),
        material: b.attributes?.material || "",
      },

      additionalInfo: (b.additionalInfo || []).map((i) => ({ label: i.label, value: i.value })),
      specifications: (b.specifications || []).map((s) => ({ key: s.key, value: s.value })),

      tags: coerceArray(b.tags),

      isFeatured: !!b.isFeatured,
      isActive: b.isActive !== undefined ? !!b.isActive : true,

      ratings: { average: 0, count: 0 },

      seo: {
        metaTitle: b.seo?.metaTitle || "",
        metaDescription: b.seo?.metaDescription || "",
        keywords: coerceArray(b.seo?.keywords),
      },

      category: b.category || null,
      subcategory: b.subcategory || null,
    });

    const saved = await product.save();
    res.status(201).json({ success: true, product: saved });
  } catch (err) {
    res.status(400).json({ message: "Error creating product", error: err.message });
  }
});

// ---- Update ----
router.put("/update/:id", async (req, res) => {
  try {
    const b = req.body;

    const coerceArray = (val) =>
      Array.isArray(val) ? val : (val ? String(val).split(",").map(s => s.trim()).filter(Boolean) : []);

    const updates = {
      name: b.name,
      slug: b.slug,
      description: {
        short: b.description?.short || "",
        long: b.description?.long || "",
      },
      price: b.price,
      salePrice: b.salePrice || null,

      images: (b.images || []).map((it) => ({ url: it.url, altText: it.altText || "" })),
      subImages: (b.subImages || []).map((it) => ({ url: it.url, altText: it.altText || "" })),

      stock: b.stock || 0,
      sku: b.sku || null,

      attributes: {
        color: coerceArray(b.attributes?.color),
        size: coerceArray(b.attributes?.size),
        material: b.attributes?.material || "",
      },

      additionalInfo: (b.additionalInfo || []).map((i) => ({ label: i.label, value: i.value })),
      specifications: (b.specifications || []).map((s) => ({ key: s.key, value: s.value })),

      tags: coerceArray(b.tags),

      isFeatured: !!b.isFeatured,
      isActive: b.isActive !== undefined ? !!b.isActive : true,

      seo: {
        metaTitle: b.seo?.metaTitle || "",
        metaDescription: b.seo?.metaDescription || "",
        keywords: coerceArray(b.seo?.keywords),
      },

      category: b.category || null,
      subcategory: b.subcategory || null,
    };

    const updated = await Product.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!updated) return res.status(404).json({ message: "Product not found" });

    res.json({ success: true, product: updated });
  } catch (err) {
    res.status(400).json({ message: "Error updating product", error: err.message });
  }
});

// ---- Delete ----
router.delete("/delete/:id", async (req, res) => {
  try {
    const del = await Product.findByIdAndDelete(req.params.id);
    if (!del) return res.status(404).json({ message: "Product not found" });
    res.json({ success: true, message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting product", error: err.message });
  }
});

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
