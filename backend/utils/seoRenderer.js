const fs = require("fs");
const path = require("path");

let cachedIndex = null;

function renderSEO({ title, description, canonical, seoContent }) {
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

    let html = cachedIndex;
    html = html
      .replace(/__TITLE__/g, () => title || "CoachingPromo")
      .replace(/__DESCRIPTION__/g, () => description || "")
      .replace(/__CANONICAL__/g, () => canonical || "")
      .replace(/__SEO_CONTENT__/g, () => seoContent || "");

    return html;
  } catch (err) {
    console.error("❌ SSR Error:", err);
    return cachedIndex || "";
  }
}

module.exports = renderSEO;