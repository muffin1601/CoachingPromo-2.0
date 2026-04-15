require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

/* ==============================
   BASIC MIDDLEWARE
============================== */

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.set("trust proxy", true);

/* ==============================
   DATABASE
============================== */

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

/* ==============================
   STATIC FILES (IMPORTANT FIRST)
============================== */

// React build
app.use(express.static(path.join(__dirname, "../frontend/dist"), {
  index: false,
  maxAge: "30d"
}));

// Uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ==============================
   IMPORT UTILITIES
============================== */

const renderSEO = require("./utils/seoRenderer");

const Category = require("./models/category");
const Subcategory = require("./models/subcategory");
const Product = require("./models/product");

/* ==============================
   API ROUTES
============================== */

app.use("/", require("./routes/sitemap"));

app.use("/api/blogs", require("./routes/blogRoutes"));
app.use("/api/visitors", require("./routes/visitor"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/payment", require("./routes/paymentRoutes"));
app.use("/api/leads", require("./routes/leadRoutes"));

app.use("/api/categories", require("./routes/categoryRoutes"));
app.use("/api/subcategories", require("./routes/subcategoryRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api", require("./routes/emailRoutes"));
app.use("/api", require("./routes/adminRoutes"));
app.use("/api/slides", require("./routes/bannerRoutes"));
app.use("/api/products-search", require("./routes/searchRoutes"));
app.use("/api", require("./routes/instituteRoutes"));
app.use("/api/admin", require("./routes/adminstatsRoutes"));

/* ==============================
   HELPER → FORCE HTML RESPONSE
============================== */

const sendHTML = (res, html) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send(html);
};

/* ===================================================
   HOME PAGE SSR
=================================================== */

app.get("/", (req, res) => {
  const html = renderSEO({
    title: "Promotional Products for Coaching Institutes – CoachingPromo",
    description: "Custom T-shirts, Bags, Stationery & Gifts for Coaching Institutes.",
    canonical: "https://www.coachingpromo.in/",
    seoContent: `<h1>Promotional Products for Coaching Institutes</h1>`
  });

  sendHTML(res, html);
});

/* ===================================================
   CATEGORY PAGE SSR
=================================================== */

app.get("/categories/:slug", async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug }).lean();

    if (!category) {
      return res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    }

    const html = renderSEO({
      title: category.name + " | CoachingPromo",
      description: category.description || "",
      canonical: `https://www.coachingpromo.in/categories/${category.slug}`,
      seoContent: `<h1>${category.name}</h1>`
    });

    sendHTML(res, html);

  } catch (err) {
    console.error("CATEGORY ERROR:", err);
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  }
});

/* ===================================================
   PRODUCT PAGE SSR
=================================================== */

app.get("/:categorySlug/:subSlug/:prodSlug", async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.prodSlug })
      .populate("category")
      .populate("subcategory")
      .lean();

    if (!product) {
      return res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    }

    const html = renderSEO({
      title: product.name + " | CoachingPromo",
      description: product.description?.short || "",
      canonical: `https://www.coachingpromo.in/${req.params.categorySlug}/${req.params.subSlug}/${product.slug}`,
      seoContent: `<h1>${product.name}</h1>`
    });

    sendHTML(res, html);

  } catch (err) {
    console.error("PRODUCT ERROR:", err);
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  }
});

/* ===================================================
   SINGLE PRODUCT PAGE
=================================================== */

app.get("/product/:prodSlug", async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.prodSlug }).lean();

    if (!product) {
      return res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    }

    const html = renderSEO({
      title: product.name + " | CoachingPromo",
      description: product.description?.short || "",
      canonical: `https://www.coachingpromo.in/product/${product.slug}`,
      seoContent: `<h1>${product.name}</h1>`
    });

    sendHTML(res, html);

  } catch (err) {
    console.error("SINGLE PRODUCT ERROR:", err);
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  }
});

/* ===================================================
   SUBCATEGORY PAGE
=================================================== */

app.get("/:categorySlug/:subSlug", async (req, res) => {
  try {
    const subcategory = await Subcategory.findOne({ slug: req.params.subSlug }).lean();

    if (!subcategory) {
      return res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    }

    const html = renderSEO({
      title: subcategory.name + " | CoachingPromo",
      description: subcategory.description || "",
      canonical: `https://www.coachingpromo.in/${req.params.categorySlug}/${subcategory.slug}`,
      seoContent: `<h1>${subcategory.name}</h1>`
    });

    sendHTML(res, html);

  } catch (err) {
    console.error("SUBCATEGORY ERROR:", err);
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  }
});

/* ==============================
   FINAL FALLBACK (ONLY ONE)
============================== */

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

/* ==============================
   GLOBAL ERROR HANDLING
============================== */

process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED PROMISE:", err);
});

/* ==============================
   SERVER
============================== */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
});