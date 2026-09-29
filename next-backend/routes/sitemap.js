const express = require("express");
const router = express.Router();
const Category = require("../models/category");
const Subcategory = require("../models/subcategory");
const Product = require("../models/product");
const Blog = require("../models/blog");
const { absoluteUrl, productUrl, blogUrl } = require("../utils/siteSeo");

const escapeXml = (value) => String(value).replace(/[<>&'\"]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[character]);
const lastmod = (date) => date ? new Date(date).toISOString() : null;

router.get("/sitemap.xml", async (req, res) => {
  try {
    const [categories, subcategories, products, blogs] = await Promise.all([
      Category.find().select("slug updatedAt").lean(),
      Subcategory.find().populate("category", "slug").select("slug category updatedAt").lean(),
      Product.find({ isActive: { $ne: false } }).populate("category", "slug").populate("subcategory", "slug").select("slug category subcategory updatedAt").lean(),
      Blog.find({ $or: [{ status: "published" }, { status: { $exists: false } }] }).select("slug publishedAt updatedAt").lean(),
    ]);
    const urls = new Map();
    const add = (loc, updatedAt) => { if (loc) urls.set(loc, updatedAt); };
    add(absoluteUrl("/"));
    add(absoluteUrl("/about"));
    add(absoluteUrl("/contact"));
    add(absoluteUrl("/blogs"));
    add(absoluteUrl("/offers"));
    categories.forEach((category) => add(absoluteUrl(`/categories/${encodeURIComponent(category.slug)}`), category.updatedAt));
    subcategories.forEach((subcategory) => subcategory.category?.slug && add(absoluteUrl(`/${encodeURIComponent(subcategory.category.slug)}/${encodeURIComponent(subcategory.slug)}`), subcategory.updatedAt));
    products.forEach((product) => add(productUrl(product), product.updatedAt));
    blogs.forEach((blog) => add(blogUrl(blog), blog.updatedAt || blog.publishedAt));
    const entries = [...urls].map(([loc, updatedAt]) => `<url><loc>${escapeXml(loc)}</loc>${lastmod(updatedAt) ? `<lastmod>${lastmod(updatedAt)}</lastmod>` : ""}</url>`).join("");
    res.type("application/xml").send(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`);
  } catch (error) {
    console.error("Sitemap generation failed:", error);
    res.status(503).type("text/plain").send("Sitemap temporarily unavailable");
  }
});
module.exports = router;
