# CoachingPromo SEO implementation report

Date: 6 October 2026  
Canonical host: `https://www.coachingpromo.in`

## 1. Executive summary

The 830-row India keyword master was mapped without omissions to 47 canonical owners. Existing category, subcategory, product and editorial URLs were retained. Seventeen new authoritative URLs were added for commercial solution, audience and informational intent that did not have a strong existing owner. City, `near me`, supplier and transactional tokens were documented without generating doorway pages.

The implementation also expanded the sitemap, strengthened homepage and contextual links, added visible FAQ-aligned schema to new pages, made legacy dynamic metadata unique, corrected the About page H1 hierarchy, removed unsupported static superlative/numeric/turnaround/MOQ claims, and added repeatable completeness and rendered-crawl verification.

## 2. Keyword coverage

| Measure | Count |
|---|---:|
| Supplied keyword rows | 830 |
| Mapped rows | 830 |
| Unmapped rows | 0 |
| Exact duplicate source phrases | 0 |
| Commercial | 685 |
| Commercial / informational | 17 |
| Informational | 34 |
| Transactional | 15 |
| Local transactional | 12 |
| Modifier / geo | 37 |
| Modifier / transactional | 11 |
| Modifier / commercial | 11 |
| Mixed-language commercial | 8 |
| Rows with a recognized location signal | 269 |
| Canonical keyword owners | 47 |
| Modifier-only rows | 71 |
| Geo rows deferred to avoid thin doorway pages | 21 |

Every secondary, informational, spelling, audience, location and modifier phrase remains present in `COACHINGPROMO_KEYWORD_MAP.csv` with its canonical owner and disposition.

## 3. Existing pages improved

- `/`: keeps ownership of broad coaching-institute promotional products and now links to priority programme/audience hubs.
- `/about`: one logical H1; unverifiable static superlatives, numeric scale, fixed MOQ and fixed turnaround copy replaced with quotation-stage language.
- All dynamic product/blog routes: entity-specific meta-description prefix prevents homepage/repeated-description duplication when stored copy is absent or shared.
- `/apparel-accessories/round-neck-t-shirts`: canonical owner for custom T-shirt intent.
- `/apparel-accessories/polo-t-shirts`: canonical owner for polo and collared staff-shirt intent.
- `/custom-hoodies-for-coaching-institutes`: canonical owner for institute hoodie/winter-wear intent.
- Existing bags, stationery, drinkware, award, graduation and ID/lanyard subcategories retain product-specific ownership.
- Footer: unsupported “India’s leading” copy removed; welcome-kit and college-merchandise links added.

## 4. New pages created

### Commercial solution pages

- `/solutions/custom-merchandise-for-educational-institutions` — cross-category educational merchandise planning.
- `/solutions/student-welcome-kits` — student welcome, admission and orientation kits.
- `/solutions/event-merchandise-for-educational-institutions` — fests, seminars, workshops and education events.
- `/solutions/corporate-gifting-for-educational-institutions` — faculty, teacher, partner and institutional gifting.
- `/solutions/eco-friendly-promotional-products` — material-specific, non-greenwashed sustainable-product intent.
- `/solutions/convocation-products` — gowns, caps, stoles, hoods, folders and ceremony products.

### Audience pages

- `/industries/schools` — school merchandise and programmes.
- `/industries/colleges-universities` — campus, society, fest, orientation, alumni and graduation merchandise.
- `/industries/training-institutes` — academy, vocational, workshop and training-kit intent.

### Guides

- `/guides/promotional-product-planning-for-coaching-institutes`
- `/guides/student-welcome-kit-checklist`
- `/guides/college-merchandise-ideas`
- `/guides/custom-t-shirt-printing-guide`
- `/guides/notebook-printing-guide`
- `/guides/admission-and-orientation-merchandise-ideas`
- `/guides/how-branded-merchandise-supports-institute-branding`
- `/guides/custom-merchandise-branding-methods`

Each page has a unique title, description, canonical, Open Graph/Twitter metadata, H1, useful sections, contextual product links, CTA, visible FAQs, breadcrumbs and valid schema.

## 5. Technical SEO fixes

- Sitemap expanded from 322 to 339 canonical URLs.
- Robots behavior preserved and validated.
- All 339 sitemap pages return direct 200, self-canonicalize and are indexable.
- Dynamic fallback descriptions are unique and factual.
- Duplicate H1 on About fixed.
- New pages use server-rendered static HTML.
- No new redirect, query-parameter surface or faceted crawl path was introduced.
- Existing GA4 implementation was preserved; no duplicate tracking was added.
- New pages add no image payload or client-side interaction dependency.

## 6. Cannibalization resolution

- Homepage vs broad educational merchandise: homepage owns the coaching-institute proposition; the educational-institution solution page owns broader cross-audience planning.
- Hoodie landing vs hoodie collection: the landing owns institute/custom commercial intent; the subcategory remains the product-shopping collection and links support the landing.
- Welcome/admission/orientation kits: consolidated into one student-kit solution plus one informational checklist.
- Event/fest/seminar/workshop phrases: consolidated into one event solution; supporting planning content uses a distinct admission/orientation guide.
- Schools, colleges/universities and training institutes: separated by buyer/audience intent, not cloned product × city pages.
- Delhi/NCR/major-city and `near me` phrases: mapped to relevant canonical owners; standalone city doorway pages deferred.
- Printing-method queries: consolidated into one method guide with contextual links to apparel and product pages.

## 7. Build and test results

- Frontend lint: passed.
- Production build: passed.
- Backend: 15/15 tests passed.
- Redirect suite: 28/28 passed.
- Existing SEO smoke suite: passed.
- Expanded SEO architecture suite: passed.
- Sitemap: 339/339 direct 200.
- Internal rendered link targets: 326 checked, 0 errors.
- Source keyword rows: 830.
- Mapped keyword rows: 830.
- Unmapped keywords: 0.

See `COACHINGPROMO_TEST_REPORT.md` for exact details.

## 8. Remaining recommendations

### Requires Google Search Console

- Submit the deployed sitemap and inspect the 17 new URLs.
- Monitor page/query pairs for unexpected cannibalization after 28–56 days.
- Validate apex/`www` consolidation and existing legacy redirects.
- Review field Core Web Vitals and crawl/indexing reports.

### Requires Keyword Planner or third-party demand data

- Reprioritize P1/P2 clusters using verified volume, CPC and regional demand.
- Consider a differentiated Delhi/Delhi NCR page only if demand and real local evidence justify it.

### Requires business-owner factual confirmation

- Verify legacy product MOQ, delivery, sample, discount, certification, material, quality-control and “guaranteed” claims.
- Confirm whether public numeric history/customer-scale statements may be restored with evidence.
- Supply current product specifications, print areas, care, packing and serviceability details.

### Requires Google Business Profile work

- Maintain verified business name, phone, service area, location/hours and current images.
- Do not create fake city locations or location schema.

### Requires outreach

- Pursue relevant education, institutional procurement, event and convocation references.
- Avoid paid bulk-link schemes and irrelevant directories.

## Deliverables

- `COACHINGPROMO_SEO_AUDIT.md`
- `COACHINGPROMO_KEYWORD_MAP.csv`
- `COACHINGPROMO_SEO_URL_INVENTORY.csv`
- `COACHINGPROMO_CONTENT_GAPS.csv`
- `COACHINGPROMO_IMPLEMENTATION_REPORT.md`
- `COACHINGPROMO_INTERNAL_LINK_MAP.csv`
- `COACHINGPROMO_SCHEMA_REPORT.md`
- `COACHINGPROMO_TEST_REPORT.md`

No `COACHINGPROMO_REDIRECT_MAP.csv` was created because this implementation adds no redirect and removes no public URL.
