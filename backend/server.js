require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const renderSEO = require("./utils/seoRenderer");
const Category = require("./models/category");
const Subcategory = require("./models/subcategory");
const Product = require("./models/product");
const Blog = require("./models/blog");
const { absoluteUrl, productUrl, blogUrl, absoluteMediaUrl, stripHtml, escapeHtml, siteUrl } = require("./utils/siteSeo");

const app = express();
app.set("trust proxy", true);
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static(path.join(__dirname, "../frontend/dist"), { index: false, maxAge: "30d" }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

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
app.use("/", require("./routes/sitemap"));

const organization = () => ({ "@type": "Organization", name: "CoachingPromo", url: siteUrl(), logo: absoluteUrl("/logo.webp"), telephone: "+918750708222", email: "sales@coachingpromo.in", sameAs: ["https://www.facebook.com/profile.php?id=61578398193650", "https://www.instagram.com/coachingpromo.in/"] });
const graph = (...items) => ({ "@context": "https://schema.org", "@graph": [organization(), ...items] });
const crumb = (items) => ({ "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: item.url })) });
const pageContent = (heading, description = "") => `<section class="server-page-content"><h1>${escapeHtml(heading)}</h1>${description ? `<p>${escapeHtml(description)}</p>` : ""}</section>`;
const sendPage = (res, options) => res.type("html").send(renderSEO(options));
const descriptionFor = (value, fallback) => (value || fallback || "").slice(0, 160);

function noindexPage(pathname, robots = "noindex,follow") {
  return (req, res) => sendPage(res, { title: "CoachingPromo", description: "", canonical: absoluteUrl(pathname), robots, seoContent: pageContent("CoachingPromo") });
}

app.get("/", (req, res) => sendPage(res, { title: "Promotional Products for Coaching Institutes | CoachingPromo", description: "Custom apparel, student kits, stationery and branded gifts for coaching institutes and education businesses.", canonical: absoluteUrl("/"), image: "/banners/banner-1-1360.webp", imageAlt: "Custom promotional products for coaching institutes", schema: graph({ "@type": "WebSite", name: "CoachingPromo", url: siteUrl() }), seoContent: pageContent("Custom Promotional Products for Coaching Institutes", "Branded apparel, student kits, stationery and corporate gifting for education businesses.") }));
app.get("/about", (req, res) => sendPage(res, { title: "About CoachingPromo | Institute Branding Partner", description: "Learn how CoachingPromo supports institutes with custom merchandise and branding solutions.", canonical: absoluteUrl("/about"), seoContent: pageContent("About CoachingPromo", "A merchandising partner for education brands and institutions.") }));
app.get("/contact", (req, res) => sendPage(res, { title: "Contact CoachingPromo | Corporate & Promotional Gifting", description: "Contact CoachingPromo about branded merchandise, bulk orders and institute gifting.", canonical: absoluteUrl("/contact"), seoContent: pageContent("Contact CoachingPromo", "Discuss your institute merchandise and corporate gifting requirements with our team.") }));

// These specific blog routes must precede generic two- and three-segment routes.
app.get("/blogs", (req, res) => sendPage(res, { title: "Branding & Merchandise Insights | CoachingPromo", description: "Articles on institute merchandise, customization and B2B branding.", canonical: absoluteUrl("/blogs"), seoContent: pageContent("CoachingPromo Blogs", "Practical ideas for branded merchandise, events and education businesses.") }));
app.get("/blogs/:identifier", async (req, res, next) => {
  try {
    const { identifier } = req.params;
    const blog = /^[a-f\d]{24}$/i.test(identifier) ? await Blog.findById(identifier).lean() : await Blog.findOne({ slug: identifier }).lean();
    if (!blog || (blog.status && blog.status !== "published")) return next();
    const canonical = blogUrl(blog) || absoluteUrl(`/blogs/${blog._id}`);
    if (identifier !== blog.slug && blog.slug) return res.redirect(301, canonical);
    const description = descriptionFor(blog.metaDescription || blog.excerpt, stripHtml(blog.content).slice(0, 155));
    const blogImage = blog.featuredImage || blog.media;
    const image = blogImage ? absoluteUrl(blogImage.startsWith("/") ? blogImage : `/uploads/blogs/${blogImage}`) : null;
    const article = { "@type": "BlogPosting", headline: blog.title, description, mainEntityOfPage: canonical, url: canonical, datePublished: (blog.publishedAt || blog.date || blog.createdAt)?.toISOString?.(), dateModified: blog.updatedAt?.toISOString?.(), author: blog.author ? { "@type": "Person", name: blog.author } : undefined, image: image || undefined, publisher: organization() };
    sendPage(res, { title: blog.seoTitle || `${blog.title} | CoachingPromo`, description, canonical, type: "article", image, imageAlt: blog.imageAlt || blog.title, schema: graph(article, crumb([{ name: "Home", url: absoluteUrl("/") }, { name: "Blogs", url: absoluteUrl("/blogs") }, { name: blog.title, url: canonical }])), seoContent: pageContent(blog.title, description) });
  } catch (error) { next(error); }
});

app.get("/categories/:slug", async (req, res, next) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug }).lean();
    if (!category) return next();
    const canonical = absoluteUrl(`/categories/${category.slug}`);
    const description = descriptionFor(category.seo?.metaDescription, category.description || `Explore ${category.name} from CoachingPromo.`);
    sendPage(res, { title: category.seo?.metaTitle || `${category.name} | CoachingPromo`, description, canonical, image: category.image, imageAlt: category.name, schema: graph(crumb([{ name: "Home", url: absoluteUrl("/") }, { name: category.name, url: canonical }])), seoContent: pageContent(category.name, description) });
  } catch (error) { next(error); }
});

app.get("/product/:prodSlug", async (req, res, next) => {
  try {
    const product = await Product.findOne({ slug: req.params.prodSlug }).populate("category", "slug").populate("subcategory", "slug").lean();
    const canonical = productUrl(product);
    if (!product || !canonical || product.isActive === false) return next();
    return res.redirect(301, canonical);
  } catch (error) { next(error); }
});

app.get("/:categorySlug/:subSlug/:prodSlug", async (req, res, next) => {
  try {
    const product = await Product.findOne({ slug: req.params.prodSlug, isActive: { $ne: false } }).populate("category", "name slug").populate("subcategory", "name slug").lean();
    const canonical = productUrl(product);
    if (!product || !canonical || product.category.slug !== req.params.categorySlug || product.subcategory.slug !== req.params.subSlug) return next();
    const description = descriptionFor(product.seo?.metaDescription, product.description?.short || `Custom ${product.name} for education businesses.`);
    const image = absoluteMediaUrl(product.images?.find((item) => item.type !== "video")?.url);
    const offer = Number.isFinite(product.salePrice || product.price) ? { "@type": "Offer", priceCurrency: "INR", price: product.salePrice || product.price, availability: product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock", url: canonical } : undefined;
    const productSchema = { "@type": "Product", name: product.name, description, url: canonical, image: image || undefined, sku: product.sku || undefined, brand: { "@type": "Brand", name: "CoachingPromo" }, offers: offer };
    sendPage(res, { title: product.seo?.metaTitle || `${product.name} | CoachingPromo`, description, canonical, image, imageAlt: product.images?.[0]?.altText || product.name, schema: graph(productSchema, crumb([{ name: "Home", url: absoluteUrl("/") }, { name: product.category.name, url: absoluteUrl(`/categories/${product.category.slug}`) }, { name: product.subcategory.name, url: absoluteUrl(`/${product.category.slug}/${product.subcategory.slug}`) }, { name: product.name, url: canonical }])), seoContent: pageContent(product.name, description) });
  } catch (error) { next(error); }
});

app.get("/:categorySlug/:subSlug", async (req, res, next) => {
  try {
    const subcategory = await Subcategory.findOne({ slug: req.params.subSlug }).populate("category", "name slug").lean();
    if (!subcategory || subcategory.category?.slug !== req.params.categorySlug) return next();
    const canonical = absoluteUrl(`/${subcategory.category.slug}/${subcategory.slug}`);
    const description = descriptionFor(subcategory.seo?.metaDescription, subcategory.description || `Browse custom ${subcategory.name} from CoachingPromo.`);
    sendPage(res, { title: subcategory.seo?.metaTitle || `${subcategory.name} | ${subcategory.category.name} | CoachingPromo`, description, canonical, image: subcategory.image, imageAlt: subcategory.name, schema: graph(crumb([{ name: "Home", url: absoluteUrl("/") }, { name: subcategory.category.name, url: absoluteUrl(`/categories/${subcategory.category.slug}`) }, { name: subcategory.name, url: canonical }])), seoContent: pageContent(subcategory.name, description) });
  } catch (error) { next(error); }
});

["/login", "/register", "/forgot-password", "/profile", "/cart", "/checkout", "/favorites", "/offers", "/search", "/customize/:productType", "/customize/all"].forEach((route) => app.get(route, noindexPage(route)));
app.get("/resetpassword/:token", noindexPage("/resetpassword"));
app.get("/admin/*", noindexPage("/admin", "noindex,nofollow"));
app.use((req, res) => { res.status(404); sendPage(res, { title: "Page Not Found | CoachingPromo", description: "The requested page does not exist.", canonical: absoluteUrl("/404"), robots: "noindex,follow", seoContent: pageContent("Page Not Found", "The page you requested is unavailable.") }); });
app.use((error, req, res, next) => { console.error("Request error:", error); res.status(500); sendPage(res, { title: "Server Error | CoachingPromo", description: "Please try again later.", canonical: absoluteUrl("/500"), robots: "noindex,nofollow", seoContent: pageContent("Server Error") }); });

if (require.main === module) {
  mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Connected")).catch((error) => console.error("MongoDB Connection Error:", error));
  app.listen(process.env.PORT || 5000, () => console.log(`Server running on ${process.env.PORT || 5000}`));
}
module.exports = app;
