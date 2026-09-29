"""Build a public-content and keyword inventory from a logical MongoDB backup.

Usage: python next-frontend/scripts/build-seo-pdf.py <backup-directory>
Only public catalogue collections are read; no credentials or customer data are exported.
"""

import html
import json
import re
import sys
from pathlib import Path
from urllib.parse import quote

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, HRFlowable


ROOT = Path(__file__).resolve().parents[2]
BACKUP = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else None
if not BACKUP or not (BACKUP / "manifest.json").is_file():
    raise SystemExit("Pass a verified .migration-backups/<timestamp> directory")
MANIFEST = json.loads((BACKUP / "manifest.json").read_text(encoding="utf-8"))
DATABASE = next((entry for entry in MANIFEST["databases"] if entry.get("status") == "exported and parsed"), None)
if not DATABASE:
    raise SystemExit("Backup has no complete database export")
DATA = BACKUP / "mongodb" / DATABASE["source"]
OUTPUT = ROOT / "next-frontend" / "seo" / "CoachingPromo-SEO-Content-Keywords.pdf"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
SITE = "https://www.coachingpromo.in"
STATIC_COPY = json.loads((ROOT / "next-frontend" / "seo" / "static-page-copy.json").read_text(encoding="utf-8"))


def documents(collection):
    entry = next((item for item in DATABASE["collections"] if item["name"] == collection), None)
    if not entry:
        return []
    return [json.loads(line) for line in (DATA / entry["file"]).read_text(encoding="utf-8").splitlines() if line.strip()]


def oid(value):
    return str(value.get("$oid", "")) if isinstance(value, dict) else str(value or "")


def plain(value):
    if not isinstance(value, str):
        return ""
    text = re.sub(r"(?i)<\s*br\s*/?>|</p>|</div>|</h[1-6]>", "\n", value)
    text = re.sub(r"<[^>]*>", " ", text)
    text = html.unescape(text)
    return re.sub(r"[ \t\r\f\v]+", " ", text).strip()


def path(*parts):
    return SITE + "/" + "/".join(quote(str(part), safe="-") for part in parts)


categories = sorted(documents("categories"), key=lambda item: item.get("name", ""))
subcategories = sorted(documents("subcategories"), key=lambda item: item.get("name", ""))
products = sorted((item for item in documents("products") if item.get("isActive") is not False), key=lambda item: item.get("name", ""))
blogs = sorted((item for item in documents("blogs") if item.get("status", "published") == "published"), key=lambda item: item.get("title", ""))
category_by_id = {oid(item.get("_id")): item for item in categories}
subcategory_by_id = {oid(item.get("_id")): item for item in subcategories}

font_file = Path(__import__("reportlab").__file__).resolve().parent / "fonts" / "Vera.ttf"
bold_file = font_file.with_name("VeraBd.ttf")
pdfmetrics.registerFont(TTFont("Vera", str(font_file)))
pdfmetrics.registerFont(TTFont("VeraBold", str(bold_file)))
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="CoverSEO", fontName="VeraBold", fontSize=24, leading=30, textColor=colors.HexColor("#14243A"), spaceAfter=20))
styles.add(ParagraphStyle(name="SectionSEO", fontName="VeraBold", fontSize=15, leading=19, textColor=colors.HexColor("#14243A"), spaceBefore=18, spaceAfter=9))
styles.add(ParagraphStyle(name="EntrySEO", fontName="VeraBold", fontSize=10, leading=14, textColor=colors.HexColor("#213854"), spaceBefore=13, spaceAfter=4))
styles.add(ParagraphStyle(name="BodySEO", fontName="Vera", fontSize=8.6, leading=13, spaceAfter=5))
styles.add(ParagraphStyle(name="SmallSEO", fontName="Vera", fontSize=7.2, leading=10, textColor=colors.HexColor("#4B5666"), spaceAfter=4))
styles.add(ParagraphStyle(name="CenterSEO", fontName="Vera", fontSize=10, leading=16, alignment=TA_CENTER))
story = []


def p(text, style="BodySEO"):
    story.append(Paragraph(html.escape(str(text or "[not supplied]")).replace("\n", "<br/>"), styles[style]))


def heading(text):
    p(text, "SectionSEO")


def entry(title, url, fields):
    p(title, "EntrySEO")
    p(url, "SmallSEO")
    for label, value in fields:
        if isinstance(value, (list, tuple)):
            value = ", ".join(str(item) for item in value if item)
        p(f"{label}: {plain(value) if isinstance(value, str) else value or '[not supplied]'}")
    story.append(HRFlowable(width="100%", thickness=0.4, color=colors.HexColor("#D9DFE6")))


story.append(Spacer(1, 1.1 * inch))
p("CoachingPromo", "CoverSEO")
p("Public website content & keyword inventory", "SectionSEO")
p(f"Snapshot: {MANIFEST['created']} | Canonical host: {SITE}")
p("This is an inventory and editorial working document, not a ranking guarantee or a keyword-volume study. It contains only public catalogue/blog fields from the Next backend backup; no users, leads, orders, comments, or credentials.")
p(f"Coverage: 4 categories, {len(subcategories)} subcategories, {len(products)} active products and {len(blogs)} published articles. Also includes the principal static pages and a content-gap register.")
story.append(PageBreak())

heading("Search strategy and limitations")
p("Primary audience: coaching institutes, schools, colleges and educational training teams in India buying custom-branded merchandise in bulk. Intent groups: custom apparel/uniforms, bags, stationery, promotional gifting, logo customization and bulk procurement.")
p("Google does not use the meta-keywords tag for ranking. Keyword lists below are for editorial planning; they need natural placement in useful titles, headings, copy, image alt text and internal links. No search-volume, difficulty or current-rank data is claimed.")
p("Technical work in Next: production canonical host, server-rendered catalogue/article content, indexable metadata, sitemap coverage, 404/redirect handling and factual JSON-LD. Ranking also needs original product details, external reputation, indexing and performance monitoring.")
p("Important content gap: 241 of 250 active products lack substantive descriptions in this snapshot. Supply verified materials, printing methods, minimum quantities, size/options, delivery coverage, use cases and original photos before expecting strong organic performance on those pages.")
p("Media migration: 33 legacy product media files (including 10 primary images and one video) and three missing published-blog images were copied into versioned Next public assets. Dedicated-backend product API responses now refer to local copies without changing MongoDB. Verify production HTTPS asset delivery after deploy. Nine primary product images still lack alt text.")

heading("Core keyword themes (editorial targets, not volume-ranked)")
for theme, terms in [
    ("Institute merchandise", "custom merchandise for coaching institutes; promotional products for coaching institutes; branded merchandise for schools; bulk gifts for colleges"),
    ("Apparel", "custom polo t-shirts for coaching institutes; logo printed t-shirts for schools; institute uniforms in bulk; custom hoodies for students"),
    ("Bags", "custom backpacks for institutes; branded student bags; logo printed tote bags; bulk laptop bags for schools"),
    ("Stationery", "custom notebooks for coaching institutes; branded diaries in bulk; logo printed pens for schools; student stationery kits"),
    ("Promotional gifts", "custom bottles for coaching institutes; branded mugs in bulk; institute event giveaways; corporate gifting for education teams"),
    ("Local and conversion", "custom promotional products Delhi; bulk institute merchandise India; coaching institute logo printing; request bulk merchandise quote"),
]:
    p(f"{theme}: {terms}")

heading("Public static pages — visible Next content and keywords")
for item in STATIC_COPY["pages"]:
    title = {"/": "Home", "/about": "About", "/contact": "Contact", "/offers": "Offers"}.get(item["path"], item["path"])
    entry(title, SITE + item["path"], [
        ("Visible content blocks", "\n".join(item["blocks"])),
        ("Visible form prompts", item["formFields"]),
        ("Primary editorial keyword", item["primaryKeyword"]),
    ])
entry("Blogs index", SITE + "/blogs", [
    ("Content", "Published branding and merchandise articles with article-level detail pages; full text of all published articles follows below."),
    ("Primary editorial keyword", "branding ideas for coaching institutes"),
])

heading("Categories — current copy and keywords")
for item in categories:
    seo = item.get("seo") or {}
    entry(item.get("name", "[untitled]"), path("categories", item.get("slug", "")), [
        ("Visible description", item.get("description")), ("SEO title", seo.get("metaTitle")),
        ("SEO description", seo.get("metaDescription")), ("Existing keywords", seo.get("keywords") or []),
    ])

heading("Subcategories — current copy and keywords")
for item in subcategories:
    seo = item.get("seo") or {}
    parent = category_by_id.get(oid(item.get("category")), {})
    entry(item.get("name", "[untitled]"), path(parent.get("slug", "unknown-category"), item.get("slug", "")), [
        ("Category", parent.get("name")), ("Visible description", item.get("description")),
        ("SEO title", seo.get("metaTitle")), ("SEO description", seo.get("metaDescription")),
        ("Existing keywords", seo.get("keywords") or []),
    ])

heading("Active products — complete public content fields")
for item in products:
    seo = item.get("seo") or {}
    parent = category_by_id.get(oid(item.get("category")), {})
    sub = subcategory_by_id.get(oid(item.get("subcategory")), {})
    description = item.get("description") or {}
    if isinstance(description, dict):
        description = "\n".join(part for part in (description.get("short", ""), description.get("long", "")) if part)
    attributes = item.get("attributes") or {}
    specs = "; ".join(f"{x.get('key') or x.get('label')}: {x.get('value')}" for x in (item.get("specifications") or []) + (item.get("additionalInfo") or []) if x.get("value"))
    entry(item.get("name", "[untitled]"), path(parent.get("slug", "unknown-category"), sub.get("slug", "unknown-subcategory"), item.get("slug", "")), [
        ("Category / subcategory", f"{parent.get('name', '[missing]')} / {sub.get('name', '[missing]')}"),
        ("Visible description", description), ("SEO title", seo.get("metaTitle")),
        ("SEO description", seo.get("metaDescription")), ("Existing keywords", seo.get("keywords") or []),
        ("Tags", item.get("tags") or []), ("SKU", item.get("sku")),
        ("Price and stock", f"INR {item.get('price', '[missing]')} | stock {item.get('stock', '[missing]')}"),
        ("Known attributes", f"colours: {', '.join(attributes.get('color') or [])}; sizes: {', '.join(attributes.get('size') or [])}; material: {attributes.get('material') or '[missing]'}"),
        ("Specifications", specs),
    ])

heading("Published articles — full public article content")
for item in blogs:
    identifier = item.get("slug") or oid(item.get("_id"))
    entry(item.get("title", "[untitled]"), path("blogs", identifier), [
        ("Author", item.get("author")), ("Excerpt", item.get("excerpt")),
        ("SEO title", item.get("seoTitle")), ("SEO description", item.get("metaDescription")),
        ("Category / tags", f"{item.get('category') or '[missing]'}; {', '.join(item.get('tags') or [])}"),
        ("Article text", item.get("content")),
    ])

heading("Editorial priorities after technical deployment")
for index, point in enumerate([
    "Replace missing product descriptions with verified, differentiated details; do not bulk-publish generic keyword-stuffed paragraphs.",
    "Review weak or generic meta descriptions, the malformed product slug, missing image alt text, outdated stock/price, and thin articles.",
    "Verify all 33 migrated legacy media assets load from the deployed Next storefront over HTTPS before shutting down the original host.",
    "Validate the production sitemap and rich results, submit the canonical www property in Google Search Console, and monitor indexing and queries.",
    "Connect Google Merchant Center only when product feed, price, stock, shipping and return policies reflect real business terms.",
    "Build trustworthy links and customer proof through real institutional case studies, not purchased backlinks.",
], 1):
    p(f"{index}. {point}")
p("Guidance: Google Search Central SEO Starter Guide; JavaScript SEO Basics; Ecommerce Site Structure; Product structured data; Helpful, Reliable, People-First Content.", "SmallSEO")
p("Sources: https://developers.google.com/search/docs/fundamentals/seo-starter-guide | https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics | https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure | https://developers.google.com/search/docs/appearance/structured-data/product | https://developers.google.com/search/docs/fundamentals/creating-helpful-content", "SmallSEO")


def footer(canvas, document):
    canvas.saveState()
    canvas.setFont("Vera", 7)
    canvas.setFillColor(colors.HexColor("#667282"))
    canvas.drawString(42, 28, "CoachingPromo | public content & keyword inventory")
    canvas.drawRightString(570, 28, str(document.page))
    canvas.restoreState()


doc = SimpleDocTemplate(str(OUTPUT), pagesize=(612, 792), leftMargin=42, rightMargin=42, topMargin=42, bottomMargin=48, title="CoachingPromo SEO Content and Keywords", author="CoachingPromo")
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(f"Created {OUTPUT} from {len(categories)} categories, {len(subcategories)} subcategories, {len(products)} products and {len(blogs)} articles")
