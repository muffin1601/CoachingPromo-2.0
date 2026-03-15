require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const prerender = require("prerender-node");

const app = express();

app.use(cors());
app.use(express.json());

/* ==============================
   PRERENDER MIDDLEWARE
============================== */

prerender.set("prerenderToken", process.env.PRERENDER_TOKEN);
prerender.set("protocol", "https");

app.use(prerender);

/* ==============================
   IMPORT UTILITIES
============================== */

const renderSEO = require("./utils/seoRenderer");

const Category = require("./models/category");
const Subcategory = require("./models/subcategory");
const Product = require("./models/product");

/* ==============================
   DATABASE
============================== */

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

/* ==============================
   STATIC FILES
============================== */

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ==============================
   API ROUTES
============================== */

const categoryRoutes = require("./routes/categoryRoutes");
const subcategoryRoutes = require("./routes/subcategoryRoutes");
const productRoutes = require("./routes/productRoutes");
const emailRoutes = require("./routes/emailRoutes");
const adminRoutes = require("./routes/adminRoutes");
const bannerRoutes = require("./routes/bannerRoutes");
const searchRoutes = require("./routes/searchRoutes");
const instituteRoutes = require("./routes/instituteRoutes");
const blogRoutes = require("./routes/blogRoutes");
const visitorRoutes = require("./routes/visitor");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

app.use("/", require("./routes/sitemap"));

app.use("/api/blogs", blogRoutes);
app.use("/api/visitors", visitorRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/subcategories", subcategoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api", emailRoutes);
app.use("/api", adminRoutes);
app.use("/api/slides", bannerRoutes);
app.use("/api/products-search", searchRoutes);
app.use("/api", instituteRoutes);
app.use("/api/admin", require("./routes/adminstatsRoutes"));

/* ==============================
   SERVE REACT BUILD
============================== */

app.use(express.static(path.join(__dirname, "../frontend/dist")));

/* ===================================================
   CATEGORY PAGE SSR
=================================================== */

app.get("/categories/:slug", async (req, res) => {

  try {

    const category = await Category.findOne({
      slug: req.params.slug
    }).lean();

    if (!category) {
      return res.sendFile(
        path.join(__dirname, "../frontend/dist/index.html")
      );
    }

    const title =
      category.seo?.metaTitle ||
      `${category.name} | CoachingPromo`;

    const description =
      category.seo?.metaDescription ||
      category.description ||
      "Promotional products for coaching institutes";

    const canonical =
      `https://www.coachingpromo.in/categories/${category.slug}`;

    const seoContent = `
<section class="seo-category">

<h1>${category.name}</h1>

<p>${category.description || ""}</p>

<p>
Explore premium <strong>${category.name}</strong> products designed
for coaching institutes, schools and educational organizations.
These products help institutions build a strong brand identity.
</p>

<h2>Popular Products</h2>

<ul>
<li>Polo T-Shirts</li>
<li>Round Neck T-Shirts</li>
<li>Nehru Jackets</li>
<li>Hoodies</li>
<li>Graduation Gowns</li>
</ul>

</section>
`;

    const html = renderSEO({
      title,
      description,
      canonical,
      seoContent
    });

    res.send(html);

  } catch (err) {

    console.error(err);
    res.status(500).send("Server Error");

  }

});

/* ===================================================
   PRODUCT PAGE SSR
=================================================== */

app.get("/:categorySlug/:subSlug/:prodSlug", async (req, res) => {

  try {

    const product = await Product.findOne({
      slug: req.params.prodSlug
    })
      .populate("category")
      .populate("subcategory")
      .lean();

    if (!product) {
      return res.sendFile(
        path.join(__dirname, "../frontend/dist/index.html")
      );
    }

    const title =
      product.seo?.metaTitle ||
      `${product.name} | CoachingPromo`;

    const description =
      product.seo?.metaDescription ||
      product.description?.short ||
      "Custom promotional products for coaching institutes";

    const canonical =
      `https://www.coachingpromo.in/${req.params.categorySlug}/${req.params.subSlug}/${product.slug}`;

    const seoContent = `
<article class="seo-product">

<h1>${product.name}</h1>

<p>
${product.description?.short || product.seo?.metaDescription || ""}
</p>

<h2>Product Details</h2>

<ul>
<li><strong>Price:</strong> ₹${product.price}</li>
<li><strong>Material:</strong> ${product.attributes?.material || "Premium Quality Fabric"}</li>
<li><strong>Available Colors:</strong> ${product.attributes?.color?.join(", ") || "Multiple Colors"}</li>
<li><strong>Sizes:</strong> ${product.attributes?.size?.join(", ") || "Various Sizes Available"}</li>
</ul>

${product.specifications?.length
        ? `
<h2>Specifications</h2>
<ul>
${product.specifications.map(s => `<li>${s.key}: ${s.value}</li>`).join("")}
</ul>
`
        : ""
      }

<p>
Buy <strong>${product.name}</strong> for coaching institutes,
schools and colleges with custom branding and bulk order options.
</p>

</article>
`;

    const html = renderSEO({
      title,
      description,
      canonical,
      seoContent
    });

    res.send(html);

  } catch (err) {

    console.error(err);
    res.status(500).send("Server Error");

  }

});

/* ===================================================
   SUBCATEGORY PAGE SSR
=================================================== */

app.get("/:categorySlug/:subSlug", async (req, res) => {

  try {

    const subcategory = await Subcategory.findOne({
      slug: req.params.subSlug
    })
      .populate("category")
      .lean();

    if (!subcategory) {
      return res.sendFile(
        path.join(__dirname, "../frontend/dist/index.html")
      );
    }

    const title =
      subcategory.seo?.metaTitle ||
      `${subcategory.name} | CoachingPromo`;

    const description =
      subcategory.seo?.metaDescription ||
      subcategory.description ||
      "Promotional products for coaching institutes";

    const canonical =
      `https://www.coachingpromo.in/${req.params.categorySlug}/${subcategory.slug}`;

    const seoContent = `
<section class="seo-subcategory">

<h1>${subcategory.name}</h1>

<p>${subcategory.description || ""}</p>

<p>
Browse our premium <strong>${subcategory.name}</strong>
collection designed for institutes, schools and educational events.
These products offer durability, comfort and custom branding options.
</p>

<h2>Benefits</h2>

<ul>
<li>Custom branding available</li>
<li>Bulk ordering for institutes</li>
<li>Premium material quality</li>
<li>Perfect for events and uniforms</li>
</ul>

</section>
`;

    const html = renderSEO({
      title,
      description,
      canonical,
      seoContent
    });

    res.send(html);

  } catch (err) {

    console.error(err);
    res.status(500).send("Server Error");

  }

});

/* ===================================================
   REACT ROUTER FALLBACK
=================================================== */

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

/* ==============================
   SERVER
============================== */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
});