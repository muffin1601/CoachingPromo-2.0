# CoachingPromo SEO audit and implementation report

Date: 30 September 2026  
Website: https://www.coachingpromo.in/  
Search Console window: Web search, 28 June–27 September 2026 (last 3 months)  
Implementation scope: production-safe source changes, existing URLs preserved

## 1. Executive summary

CoachingPromo already has a strong technical base: Next.js server rendering, canonical metadata, a database-backed catalogue, canonical-only sitemap generation, real 404 handling, breadcrumbs, Product/Article/Organization schema, private-route noindex controls and permanent legacy redirects. Search Console also shows that Google understands the site: the homepage and several category pages already earn clicks, and multiple commercial queries sit just outside page one.

The largest opportunity was content quality and targeting. Many subcategory pages shared repetitive generic copy, unsupported universal claims and visible keyword chips. The pages therefore did not answer the buying questions implied by their queries. The homepage also linked mainly to broad categories instead of directly supporting the pages with positions 11–20.

This implementation:

- fixes nested `__CANONICAL__` crawl leaks with one permanent redirect rule;
- maps 81 commercial and supporting keywords to one preferred URL each;
- adds unique metadata, buying guidance, FAQs and visible schema-aligned content to 10 additional high-opportunity subcategories (11 focused pages including the existing hoodie collection);
- strengthens the homepage link graph to priority commercial pages;
- removes keyword-chip stuffing and replaces unverified default claims with conditional, quotation-stage wording;
- improves broad homepage and category metadata;
- reduces competing hero-image preloads while retaining dimensions to protect CLS;
- removes fabricated visible product-count claims from the homepage;
- verifies 322 sitemap URLs, redirects, metadata, canonicals, schema, 404s and images against a production build.

No ranking outcome is guaranteed. The changes improve technical consistency, intent alignment, crawlability and commercial usefulness.

## 2. SEO health before implementation

### Architecture and rendering

- Framework: Next.js 15 App Router with React 19.
- Rendering: catalogue, category and most utility routes are dynamically server-rendered; eight editorial hoodie guides are statically generated.
- Data source: Express/Mongoose API and MongoDB.
- Route hierarchy:
  - categories: `/categories/[slug]`;
  - subcategories: `/[category]/[subcategory]`;
  - products: `/[category]/[subcategory]/[product]`;
  - editorial articles: `/blogs/[id]`;
  - dedicated commercial page: `/custom-hoodies-for-coaching-institutes`.
- Product/category/subcategory metadata is fetched server-side from the API with safe fallbacks.
- Product grids are returned in server HTML; product detail pages expose crawlable related-product links.
- Catalogue endpoints return all active products for category/subcategory pages. There is no crawlable faceted/filter URL system, so there is currently no filter crawl trap. Admin product lists paginate independently and are noindex.

### Existing strengths

- Correct production-domain canonical generation.
- HTTP and bare-domain consolidation to `https://www.coachingpromo.in`.
- XML sitemap generated from active database records and editorial pages.
- `robots.txt` points to the canonical sitemap.
- `X-Robots-Tag` and metadata noindex private/admin/search/auth/customizer routes.
- Organization, WebSite, BreadcrumbList, CollectionPage/ItemList, Product, Article and visible FAQ schema.
- Product Offer markup appears only when a positive visible price and positive stock are present.
- Invalid catalogue records return a real 404, not a soft 404.
- Analytics, chatbot and floating conversion UI are deferred until interaction or a 15-second fallback.
- Hero and many below-fold images have explicit dimensions.

### Problems found

1. Search Console discovered `/apparel-accessories/polo-t-shirts/__CANONICAL__`; existing rules covered only a few exact placeholder URLs.
2. The non-www homepage had 82 impressions, evidence that host consolidation should continue to be monitored even though the middleware now redirects it.
3. Generic subcategory copy repeated across products and exposed keyword chips instead of useful buying information.
4. Shared FAQ copy asserted fixed 5–12 day delivery, universal samples, express production and free previews without product-level evidence.
5. Priority pages lacked query-specific titles, descriptions, FAQ schema and selection guidance.
6. Homepage links emphasized four broad categories rather than the pages already close to page one.
7. Three small hero images were all preloaded/eager, causing avoidable competition for early network bandwidth.
8. Homepage product cards displayed hardcoded catalogue counts that were not sourced from the API.
9. Product and subcategory admin screens support metadata, descriptions, specifications, attributes and image alt text, but do not yet support structured FAQs, use cases, MOQ, print methods or per-page index/canonical controls.
10. Some older source strings contain mojibake characters. They are a presentation-quality cleanup item; canonical SEO output tested correctly.

## 3. Search Console baseline and opportunity analysis

The supplied export contains 58 clicks and 1,139 impressions over 92 days. The device split is materially different:

| Device | Clicks | Impressions | CTR | Average position |
| --- | ---: | ---: | ---: | ---: |
| Desktop | 35 | 436 | 8.03% | 27.11 |
| Mobile | 23 | 692 | 3.32% | 8.04 |
| Tablet | 0 | 11 | 0% | 7.55 |

India generated 56 of 58 clicks and 1,029 of 1,139 impressions. Content and language should therefore remain India-first while avoiding thin city pages.

### Strong/first-page query signals

- `coaching promotion`: position 3.53, 15 impressions;
- `promo`: 3.88, 8 impressions;
- `promotional services in delhi with phone number`: 1.00, 2 impressions;
- `custom binder clip`: 2.00, 1 impression;
- `custom binder clips`: 6.00, 2 impressions;
- `promotion product`: 9.00, 2 impressions;
- `tote bag for coaching`: 9.33, 3 impressions;
- `customized stole for graduation`: 5.00, 1 impression;
- `graduation stole custom`: 9.00, 1 impression.

### Highest-priority positions 11–20

- teacher jacket variants: positions 11.00–11.41, 48 combined impressions across the principal variants;
- `t shirt for coaching classes`: 16.25, 12 impressions;
- `t shirt for coaching institute`: 18.67, 3 impressions;
- `coaching diary`: 10.71, 7 impressions (near page-one boundary);
- `coaching items`: 11.50, 2 impressions;
- `coaching classes t shirt design`: 13.00, 1 impression;
- `custom stole`: 14.00, 1 impression;
- `bags for coaching classes`: 16.00, 1 impression;
- `degree folder`: 17.00, 2 impressions.

### Strong page signals

- Homepage: 39 clicks / 278 impressions / 14.03% CTR / position 5.78.
- Degree folders: 5 / 30 / 16.67% / 8.43.
- Attendance registers: 3 / 68 / 4.41% / 4.96.
- Polo T-shirts: 2 / 44 / 4.55% / 13.36.
- Notebook: 2 / 21 / 9.52% / 7.14.
- Uniform jackets: 1 / 124 / 0.81% / 13.40 — the clearest high-impression/low-CTR opportunity.
- Tote bag: 0 / 47 / 0% / 10.53.
- Diary set: 0 / 33 / 0% / 7.91.
- Water bottle: 0 / 31 / 0% / 15.19.
- Graduation stole: 1 / 65 / 1.54% / 25.55.
- Promotional-items category: 1 / 28 / 3.57% / 5.68.

## 4. Competitor observations and gap analysis

Search-result competitors vary by cluster rather than forming one universal competitor set.

- Teacher and school apparel: Caliber India, Relax Uniform, Flyten Brands, Paapi Creations and specialist uniform suppliers. Their strongest pages state audience, garment types, customization, ordering process and often MOQ/turnaround. CoachingPromo should match the decision structure but publish MOQ/timing only when verified.
- Hoodies/college apparel: Alma Mater Store and Sungrace use focused landing pages plus fabric/GSM, style comparison, artwork, approval and delivery guidance.
- Diaries: GiftBulk, Annaya Creations, BoxnBond and Printigly organize by format/material and expose branding methods, MOQ and price. CoachingPromo’s safe response is stronger format-selection content now, then verified commercial data from the business.
- Degree folders: EYL Merchant and marketplace pages expose certificate size, orientation, holder construction, cover material and MOQ. CoachingPromo previously lacked fit/orientation guidance.
- General promotional products/corporate gifting: TGM Corporates, Shubhkara, The Gift Axis, AdOn Print and Annaya Creations use deep product taxonomies, industry/use-case navigation, visible buying details and prominent enquiry paths.

Why competitors can outrank CoachingPromo:

1. More specific landing-page intent and titles.
2. Clearer product specifications and buying constraints.
3. Visible MOQ, price or turnaround where they have evidence.
4. Industry/use-case collections and stronger supporting content hubs.
5. More descriptive internal links and related-product paths.
6. Longer-established pages and likely stronger link/entity signals.

CoachingPromo’s defensible advantage is its education-sector focus. The implementation emphasizes that distinction without copying competitor wording or inventing proof.

Representative reviewed pages: [Caliber India school jackets](https://caliberindia.org/all-wool-jackets.html), [Flyten Brands coaching T-shirts](https://www.flytenbrands.com/corporate-t-shirt.html), [Paapi Creations education T-shirts](https://www.paapicreations.com/industries/educational-institution-t-shirts/), [Sungrace hoodies](https://sungrace.co.in/c/hoodies), [GiftBulk diaries](https://shopgiftbulk.com/c/diary), [EYL Merchant degree folders](https://www.eylmerchant.co.in/certificate-folders.html), [Shubhkara corporate gifting](https://www.shubhkara.com/) and [AdOn Print promotional items](https://www.adonprint.com/services/promotional-items).

## 5. Keyword architecture

The canonical mapping is in `SEO_KEYWORD_MAP.csv`. It contains 81 rows across:

- promotional products and branded merchandise;
- coaching-institute merchandise;
- teacher/faculty jackets;
- T-shirts and polos;
- hoodies/winter wear;
- tote bags, backpacks and student kits;
- diaries, notebooks and academic registers;
- graduation stoles and degree folders;
- bottles and promotional stationery;
- institutional gifting;
- printing/embroidery comparisons;
- commercial guides, events and local Delhi/Delhi NCR modifiers.

Each cluster has one preferred landing page. No product+city doorway pages were created. Search volume was not supplied and was not fabricated. Difficulty values are qualitative estimates, not third-party metrics.

## 6. Pages modified and metadata changes

| Page | Previous title | Implemented title |
| --- | --- | --- |
| Homepage | Custom Merchandise for Coaching Institutes \| CoachingPromo | Promotional Products for Coaching Institutes \| CoachingPromo |
| Uniform jackets | Teacher Jackets with Logo - Custom Apparel for Coaching | Teacher Jackets with Logo \| Bulk Institute Uniforms |
| Polo T-shirts | Custom Polo T-Shirts with Logo for Coaching Institutes | Coaching Institute Polo T-Shirts \| Bulk Logo Printing |
| Round-neck T-shirts | Custom Round Neck T-Shirts for Coaching Institutes | Coaching Class T-Shirt Printing \| Bulk Student Tees |
| Tote bags | Custom Tote Bags for Coaching Institutes \| Printed Branding | Custom Tote Bags for Coaching Institutes \| Bulk India |
| Diary sets | Custom Diary Sets for Coaching Institutes \| Promotional Gifts | Custom Coaching Diaries & Logo Diary Sets in Bulk |
| Degree folders | Custom Degree Certificate Folders with Logo | Custom Degree Folders for Convocation \| Bulk India |
| Attendance registers | Custom Attendance Registers for Coaching Institutes \| Stationery | Custom Attendance Registers for Schools & Coaching |
| Notebooks | Custom Notebooks for Coaching Institutes \| Promotional Stationery | Custom Notebooks for Coaching Institutes \| Bulk Printing |
| Graduation stoles | Custom Graduation Stoles with Logo for Coaching Institutes \| CoachingPromo | Customized Graduation Stoles \| College Convocation |
| Water bottles | Custom Water Bottles for Coaching Institutes \| Promotional Gifts | Customized Water Bottles in Bulk for Schools & Institutes |
| Promotional-items category | Custom Promotional Items \| Mugs, Bottles, Clocks, Diaries & Gifts | Promotional Products for Coaching Institutes \| Bulk India |

Broad Apparel, Bags and Stationery category metadata was also rewritten around distinct category intent.

## 7. Content improvements

The focused pages now contain unique, visible sections covering:

- intended audience and use cases;
- product/specification selection;
- dimensions, size mix, certificate fit or diary format where relevant;
- logo/artwork and method-selection considerations;
- safe quotation inputs;
- product-specific FAQs;
- contextual links to complementary products and contact.

Exact GSM, materials, MOQ, pricing, stock, delivery guarantees and production methods are stated only conditionally unless supported by product data. The generic fallback content was rewritten to help users plan an order instead of repeating marketing claims.

## 8. Technical SEO fixes

- Added a generic permanent redirect for nested `*/__CANONICAL__` placeholders.
- Preserved special category-placeholder redirects to `/categories/...`.
- Added regression tests for the Search Console URL and another nested example.
- Confirmed canonical redirects keep query parameters and never expose local hosts.
- Confirmed 322 sitemap URLs return HTTP 200 directly.
- Confirmed legacy blog paths, wrong product hierarchies and malformed trailing-character URLs consolidate correctly.
- Confirmed missing catalogue content returns HTTP 404 and noindex.
- No indexed URL was renamed.

## 9. Internal linking improvements

The homepage “Products for your team” section now links directly to:

- teacher jackets;
- coaching polo T-shirts;
- custom institute hoodies;
- tote bags/student kits;
- notebooks;
- degree folders;
- coaching diaries;
- promotional products.

Each focused page links naturally to related products and the quote/contact route. Existing breadcrumbs remain server-rendered and represented with BreadcrumbList schema.

## 10. Structured data

- Focused subcategory pages now receive CollectionPage/ItemList and FAQPage JSON-LD.
- FAQ schema uses the exact FAQs visibly rendered on the page.
- Existing Organization, WebSite, BreadcrumbList, Product and BlogPosting output remains intact.
- No rating/review schema was added.
- No LocalBusiness schema was added because verified public business details were not expanded in this task.
- Product Offer markup remains conditional on real price and stock fields.

## 11. Core Web Vitals and image review

- Reduced homepage image preloads from three to the likely primary hero image only.
- Changed secondary hero tiles from eager to lazy loading.
- Retained explicit width and height, protecting layout stability.
- Deferred analytics and deferred conversion widgets were already present and retained.
- Removed visible hardcoded product counts rather than making unaudited catalogue-size claims.
- Production build reports 105 kB shared first-load JavaScript, 148 kB for the homepage and 157 kB for subcategory pages. The subcategory bundle is the best next JavaScript-reduction target.

No post-deployment field data is available yet. “Green” Lighthouse/Core Web Vitals scores cannot be guaranteed from code review; re-test production after deployment and CDN/cache warm-up.

## 12. Admin/CMS and database review

Already editable:

- category/subcategory/product title and description;
- product short/long descriptions;
- meta title, meta description and keywords;
- product images and alt text;
- material, sizes, colours, specifications and additional information.

Not yet editable as structured fields:

- H1 separate from product/category name;
- primary keyword;
- FAQs;
- use cases;
- MOQ;
- customization/printing methods;
- packaging/care information;
- OG title/description;
- index/noindex and canonical overrides;
- manually curated related products.

No database migration was made because defaults, validation rules and verified business data are needed first. The focused copy remains in a single source module and can later be migrated into optional CMS fields without changing URLs.

## 13. New pages

No new page was created in this implementation. Existing relevant URLs were strengthened to avoid cannibalization. The repository already contained the dedicated coaching-hoodie landing page and eight supporting hoodie guides; they remain in the sitemap and link graph.

Potential new pages should pass a distinct-intent and evidence threshold. The strongest candidates are a student welcome-kit landing page and a verified institute-merchandise ordering guide, but only after real kit composition, MOQ, packaging and workflow facts are available.

## 14. QA results

- `npm run build`: passed.
- `npm run lint`: passed.
- direct ESLint check of changed legacy React-source components: passed.
- `npm run verify:redirects`: passed, 28 redirect/canonical cases.
- `npm run verify:seo`: passed, including a crawl of 322 sitemap URLs.
- backend `npm test`: 15/15 passed.
- Rendered HTTP checks: homepage plus nine priority pages returned 200, unique titles, one visible H1, production canonical and no `__CANONICAL__` leak; all focused pages emitted FAQ schema.
- Backend dependency install reported one high-severity package advisory. It was not automatically upgraded because a major/transitive update could be breaking; run `npm audit` and review the exact package before changing production dependencies.

## 15. Risks and remaining recommendations

1. Deploy and request validation/removal for the malformed canonical URL in Search Console.
2. Monitor non-www impressions after deployment; the current middleware performs a one-hop 308.
3. Add verified MOQ, turnaround, material, printing and packing facts to priority products through the existing admin fields.
4. Extend admin models only after deciding field ownership and defaults; avoid a speculative migration.
5. Review and replace remaining hardcoded superlatives or unsupported counts in older components/content.
6. Fix mojibake strings in legacy UI source in a dedicated presentation QA pass.
7. Add privacy, terms, shipping/delivery and returns/custom-order policy pages when approved business policies exist.
8. Add crawlable pagination only if category inventory becomes too large for one response; current filters do not create indexable crawl traps.
9. Track quote submissions by landing page and query cluster, not traffic alone.
10. Earn relevant links from education vendors, institute associations, event/convocation resources and legitimate supplier directories; do not buy bulk links.

## 16. 30-day priorities

1. Deploy the changes and submit the sitemap in Search Console.
2. Inspect/request indexing for Uniform Jackets, Polo T-Shirts, Tote Bags, Diary Sets, Degree Folders, Attendance Registers, Notebook, Graduation Stole, Water Bottle and the hoodie landing page.
3. Validate the nested canonical redirect and non-www consolidation in Search Console.
4. Capture a new page/query export after 28 days and compare impressions, CTR and position for mapped keywords.
5. Add verified material, size, printing, MOQ and timing information to the products that receive impressions.
6. Run mobile and desktop Lighthouse on production three times each and use the median; investigate subcategory JavaScript and any real CLS node if still above threshold.
7. Improve title/meta only where impressions are sufficient to judge CTR; avoid weekly churn.

## 17. 90-day roadmap

### Days 31–60

- Publish a teacher-jacket buying guide linked to Uniform Jackets, using verified garment facts.
- Publish a degree-folder buying guide with certificate-fit diagrams/specification checklist.
- Publish a cross-category bulk ordering guide after MOQ and approval workflow are verified.
- Build a real student-kit content module from available bag, notebook, pen and bottle inventory.
- Add structured FAQ/use-case fields to admin with backward-compatible optional defaults.

### Days 61–90

- Evaluate a distinct Student Welcome Kits landing page from Search Console demand and conversion data.
- Expand commercial content for institute backpacks, exam pads, handbills and stress balls if impressions persist.
- Build legitimate industry links and supplier/entity citations.
- Review category-level conversion paths and enquiry attribution.
- Re-run the cannibalization map and consolidate only where two URLs rank for the same intent.

## 18. External actions required

- Google Search Console: submit sitemap, inspect priority URLs, validate redirects, monitor Core Web Vitals and export fresh page/query data.
- Google Business Profile: keep verified name, address/service area, phone, hours, categories, products and images current; do not add unverified locations.
- Backlinks/PR: pursue relevant education, institutional procurement, graduation/event and local-business coverage with editorial merit.
- Business owner/content team: provide verified MOQ, pricing policy, production timing, materials, branding methods, packing, delivery and returns/custom-order policies.
- Analytics: define conversions for quote form, WhatsApp and calls, and report them by landing page.

## 19. Files changed by this implementation

- `lib/redirects.mjs`
- `lib/route-metadata.js`
- `lib/seo-content.js`
- `app/page.jsx`
- `components/design/Home.jsx`
- `components/design/Hero.jsx`
- `react-source/components/Category/DynamicSEOContent.jsx`
- `react-source/components/Category/SubcategoryFAQ.jsx`
- `react-source/components/PopularSubcategories.jsx`
- `react-source/data/subcategories.jsx`
- `scripts/verify-redirect-rules.mjs`
- `scripts/verify-seo.mjs`
- `seo/SEO_KEYWORD_MAP.csv`
- `seo/SEO_IMPLEMENTATION_REPORT.md`

The worktree also contained separate pre-existing contact-page, blog-style and document changes; they were preserved and are not presented here as part of this SEO implementation.
