# CoachingPromo structured-data report

Date: 6 October 2026

## Implemented schema

| Surface | Schema | Source | Validation rule |
|---|---|---|---|
| Homepage | `Organization`, `WebSite` | `app/page.jsx`, `lib/seo.js` | Uses the public brand URL, logo and existing sales contact |
| Category/subcategory | `BreadcrumbList`, `CollectionPage`, `ItemList` | server page routes and `lib/seo.js` | Items correspond to visible/crawlable products |
| Product | `Product` and conditional `Offer` | product server route and `lib/seo.js` | Offer appears only with positive price and stock |
| Database blog | `BlogPosting` | blog server route and `lib/seo.js` | Uses visible title/content and stored dates/media |
| Static hoodie guides | `BlogPosting`/breadcrumbs | existing guide route | Content is visible on the page |
| New solution/audience pages | `WebPage`, `BreadcrumbList`, `FAQPage` | `components/SeoEditorialPage.jsx` | FAQs exactly match visible accordions |
| New guides | `Article`, `BreadcrumbList`, `FAQPage` | `components/SeoEditorialPage.jsx` | Guide text and FAQs are visible in server HTML |

## Deliberately excluded

- `Review` and `AggregateRating`: no new markup because ratings were not independently verified.
- `LocalBusiness`: not added because a complete verified public premises profile was not established in the repository.
- Unconditional `Offer`: not added to pages without accurate visible price and stock.
- Fabricated shipping, return-policy, certification or environmental claims: not added.

## Validation result

All JSON-LD blocks on the 339 sitemap URLs parsed successfully in the local production crawl. Five representative new solution, audience and guide pages were additionally checked for visible FAQ/schema alignment. Google Rich Results and Search Console enhancement validation still require the deployed public URLs.

