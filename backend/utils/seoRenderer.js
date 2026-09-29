const fs = require("fs");
const path = require("path");

let cachedIndex = null;

const { absoluteUrl, escapeHtml } = require("./siteSeo");

function renderSEO({ title, description, canonical, seoContent, robots = "index,follow", image, imageAlt, type = "website", schema }) {
  const indexPath = path.join(__dirname, "../../frontend/dist/index.html");

  try {
    if (!cachedIndex) {
      if (fs.existsSync(indexPath)) {
        cachedIndex = fs.readFileSync(indexPath, "utf8");
      } else {
        console.error("❌ index.html not found at:", indexPath);
        return ""; // Return empty or a basic fallback
      }
    }

    const safeTitle = title || "CoachingPromo";
    const safeDescription = description || "";
    const safeCanonical = absoluteUrl(canonical || "/");
    const safeImage = image ? absoluteUrl(image) : absoluteUrl("/logo.webp");
    const headMeta = [
      `<meta name="robots" content="${escapeHtml(robots)}">`,
      `<meta property="og:title" content="${escapeHtml(safeTitle)}">`,
      `<meta property="og:description" content="${escapeHtml(safeDescription)}">`,
      `<meta property="og:url" content="${escapeHtml(safeCanonical)}">`,
      `<meta property="og:type" content="${escapeHtml(type)}">`,
      `<meta property="og:image" content="${escapeHtml(safeImage)}">`,
      `<meta property="og:image:alt" content="${escapeHtml(imageAlt || safeTitle)}">`,
      `<meta property="og:site_name" content="CoachingPromo">`,
      `<meta property="og:locale" content="en_IN">`,
      `<meta name="twitter:card" content="summary_large_image">`,
      `<meta name="twitter:title" content="${escapeHtml(safeTitle)}">`,
      `<meta name="twitter:description" content="${escapeHtml(safeDescription)}">`,
      `<meta name="twitter:image" content="${escapeHtml(safeImage)}">`,
      `<meta name="twitter:image:alt" content="${escapeHtml(imageAlt || safeTitle)}">`,
      schema ? `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>` : "",
    ].join("\n");

    let html = cachedIndex;
    html = html
      .replace(/__TITLE__/g, () => escapeHtml(safeTitle))
      .replace(/__DESCRIPTION__/g, () => escapeHtml(safeDescription))
      .replace(/__CANONICAL__/g, () => escapeHtml(safeCanonical))
      .replace(/__HEAD_META__/g, () => headMeta)
      .replace(/__SEO_CONTENT__/g, () => seoContent || "");

    return html;
  } catch (err) {
    console.error("❌ SSR Error:", err);
    return cachedIndex || "";
  }
}

module.exports = renderSEO;
