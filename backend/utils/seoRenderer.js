const fs = require("fs");
const path = require("path");

function renderSEO({ title, description, canonical, seoContent }) {

const indexPath = path.join(__dirname, "../../frontend/dist/index.html");

let html = fs.readFileSync(indexPath, "utf8");

html = html
.replace(/__TITLE__/g, title)
.replace(/__DESCRIPTION__/g, description)
.replace(/__CANONICAL__/g, canonical)
.replace(/__SEO_CONTENT__/g, seoContent || "");

return html;

}

module.exports = renderSEO;