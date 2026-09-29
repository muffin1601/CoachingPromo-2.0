const DEFAULT_SITE_URL = "https://www.coachingpromo.in";

function siteUrl() {
  return (process.env.FRONTEND_URL || DEFAULT_SITE_URL).replace(/\/+$/, "");
}

function absoluteUrl(value = "/") {
  if (!value) return siteUrl();
  if (/^https?:\/\//i.test(value)) return value.replace(/([^:]\/)\/+/, "$1");
  const path = `/${String(value).replace(/^\/+/, "")}`.replace(/\/{2,}/g, "/");
  return `${siteUrl()}${path === "/" ? "/" : path.replace(/\/$/, "")}`;
}

function productPath(product) {
  const category = product?.category?.slug;
  const subcategory = product?.subcategory?.slug;
  if (!category || !subcategory || !product?.slug) return null;
  return `/${category}/${subcategory}/${product.slug}`;
}

function productUrl(product) {
  const path = productPath(product);
  return path ? absoluteUrl(path) : null;
}

function blogPath(blog) {
  return blog?.slug ? `/blogs/${blog.slug}` : null;
}

function blogUrl(blog) {
  const path = blogPath(blog);
  return path ? absoluteUrl(path) : null;
}

function absoluteMediaUrl(value) {
  if (!value) return null;
  if (/^https?:\/\//i.test(value)) return value;
  const uploadPath = value.startsWith("/uploads/") ? value : `/uploads/${value.replace(/^\/+/, "")}`;
  return absoluteUrl(uploadPath);
}

function stripHtml(value = "") {
  return String(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

module.exports = { siteUrl, absoluteUrl, productPath, productUrl, blogPath, blogUrl, absoluteMediaUrl, stripHtml, escapeHtml };
