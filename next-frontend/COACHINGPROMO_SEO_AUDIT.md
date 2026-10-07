# CoachingPromo production SEO audit

Audit date: 6 October 2026  
Canonical site: `https://www.coachingpromo.in`  
Master keyword source: `coachingpromo_india_seo_keywords_master.csv`

## Executive assessment

The application has a sound crawlable base: Next.js App Router pages render meaningful HTML on the server, MongoDB holds the catalogue and blog data, the frontend owns canonical public routes, the backend emits the database portion of the sitemap, and middleware consolidates the apex host and known legacy paths. The local production crawl after this implementation contains 339 canonical, indexable, direct-200 URLs.

The supplied 830 keywords contain far fewer than 830 distinct page intents. Product terms fit the existing category/subcategory structure, while broad solution, audience and informational intent required a small set of new authoritative pages. City names, `near me`, supplier tokens and price tokens do not justify independent pages without differentiated local evidence. They have therefore been documented as modifiers or consolidated into the appropriate canonical owner.

## Architecture and systems

- Frontend: Next.js 15 App Router with React 19.
- Backend: Express 4 API with Mongoose 8.
- Database: MongoDB; the audited local production stack connected successfully.
- Public routes: homepage, static company/contact pages, four categories, 43 subcategories, active products, published blogs, a dedicated hoodie landing page, static hoodie guides, and the new solution/audience/guide routes.
- Product hierarchy: `/[category]/[subcategory]/[product]`.
- Category hierarchy: `/categories/[slug]` and `/[category]/[subcategory]`.
- Admin: `/admin/*`, backed by category, subcategory, product, blog, order and banner routes.
- Rendering: public catalogue routes are dynamically server-rendered; editorial routes created here are statically generated; the sitemap remains dynamic because it merges database records.
- Metadata: Next metadata API through `lib/route-metadata.js`, with explicit metadata on editorial pages.
- Analytics: GA4 `G-S1QFD31EER` remains in the root layout. No second tracker was added.
- Images: existing local WebP assets, database media routing and explicit image dimensions were preserved. New pages are text-and-link based and add no new LCP image cost.

## Live-site comparison

The live apex redirects to the `www` host and the live homepage currently owns the broad phrase “Promotional Products for Coaching Institutes.” Search-engine results also expose the existing category, subcategory, product, blog and About URLs used by the repository. No existing indexed URL was renamed or removed.

Live search results reveal older product/About copy containing fixed turnaround, MOQ, numeric scale and superlative claims. Static About/Footer claims were replaced with verifiable process language. Database-backed product assertions were not bulk-edited because their factual status requires business-owner confirmation; they are a content-governance follow-up, not a reason to invent replacement facts.

## Technical SEO findings

### Indexation and crawl control

- `robots.txt` allows public content, blocks `/admin` and `/api`, and points to the canonical sitemap.
- Middleware applies `X-Robots-Tag: noindex, nofollow` to admin, auth, account, cart, checkout, search and customizer surfaces.
- Search, auth, cart, checkout and admin metadata are noindex.
- The sitemap includes only canonical database pages and explicit editorial routes. Draft blogs and inactive products are excluded by backend queries.
- The post-implementation sitemap contains 339 unique URLs; all returned direct HTTP 200 locally.

### Canonicals and redirects

- Public metadata uses `https://www.coachingpromo.in`.
- The apex HTTP/HTTPS variants are permanently consolidated by middleware.
- Known legacy category, product, blog and escaped `__CANONICAL__` paths remain covered by permanent redirects.
- Wrong product hierarchies redirect to the database-defined canonical hierarchy.
- No new redirect was required for this implementation because no ranking URL was replaced.

### Metadata and headings

- All 339 sitemap pages rendered a title, meta description, self-canonical and exactly one H1 after remediation.
- Titles, descriptions and H1s were unique in the rendered crawl.
- Legacy products without descriptive metadata now receive a factual entity-name fallback rather than the homepage description.
- The About page’s duplicate H1 was corrected without changing its URL.

### Structured data

- Homepage: `Organization` and `WebSite`.
- Category/subcategory/editorial hierarchy: `BreadcrumbList`.
- Catalogue collections: `CollectionPage`/`ItemList` where implemented.
- Products: `Product`; `Offer` only when a positive displayed price and stock are available.
- Blogs/guides: `BlogPosting` or `Article`.
- New solution/audience/guide pages: visible `FAQPage` plus `WebPage` or `Article`.
- No fabricated `Review`, `AggregateRating`, `LocalBusiness` or unconditional `Offer` markup was added.

### Internal linking

- The homepage now links to priority welcome-kit, event, gifting, convocation and audience hubs.
- Each new page links to relevant existing catalogue owners and the contact route.
- The generated internal-link map records 95 priority contextual relationships.
- The rendered crawl checked 326 unique internal targets and found no error response.

### Performance and rendering

- New editorial routes are statically generated and add approximately 192 B route code on top of the existing shared bundle.
- Existing shared first-load JavaScript remains 105 kB; homepage remains 148 kB; subcategory routes remain the largest audited public bundle at 157 kB.
- No client-only essential copy, new third-party script, large image or layout-shifting media was added.
- Field Core Web Vitals cannot be established from repository tests. Production CrUX/Search Console data is required.

## Keyword and cannibalization model

- Source rows: 830.
- Exact duplicate source keywords: 0.
- Canonical keyword owners used: 47.
- New canonical URLs: 17.
- Existing canonical URLs used by the map: 30.
- Homepage owns the broad coaching-institute promotional-product proposition.
- Product subcategories own specific product intent.
- The dedicated hoodie landing page owns institute/custom hoodie intent; its product collection remains the shopping surface.
- Solution pages own welcome kits, events, gifting, sustainability, convocation and cross-category educational merchandise.
- Audience pages own school, college/university and training-institute intent.
- Guides own distinct informational questions and link to commercial pages.
- No city × product or `near me` doorway page was created.

The authoritative row-by-row disposition is in `COACHINGPROMO_KEYWORD_MAP.csv`.

## Product and content quality risks

1. Several database product descriptions still repeat category-level claims and should be rewritten only from verified product specifications.
2. Fixed delivery, sample, quality-control, discount and “guaranteed” language visible in legacy database content requires owner verification or removal.
3. The About page previously exposed unverified numeric history; the repository copy is now process-based, but any independently stored/live cached copy should be checked after deployment.
4. Location claims should remain service-area language. Do not add `LocalBusiness` locations or city pages without verified premises or differentiated local evidence.
5. Product image alt text and descriptions remain dependent on database completeness; use the existing admin fields to improve real records individually.

## Admin editability

Existing models/admin routes support product/category/subcategory names and descriptions, product SEO title/description/keywords, image alt text, specifications, additional information, and blog title/content/excerpt/status/category/tags/SEO fields. The new authoritative editorial pages are code-backed to avoid a speculative production database migration. A future CMS migration should add optional, backward-compatible structured fields for H1, sections, FAQs, canonical override and indexability only after field ownership and validation are agreed.

## Recommended external follow-up

- Search Console: submit the deployed sitemap, inspect the 17 new URLs, monitor page/query overlap and export fresh data after 28–56 days.
- Business owner: verify or remove legacy MOQ, turnaround, sample, scale, discount, quality-control and superlative claims.
- Product team: add verified materials, dimensions, print areas, care and packaging details to priority products through the existing admin.
- Google Business Profile: maintain only verified name, phone, service area, address/hours and imagery.
- Content/outreach: earn relevant education, procurement, convocation and event links; do not buy bulk links.
- Analytics: validate existing form, WhatsApp, telephone and email conversion events in GA4/GTM before adding any new event code.

