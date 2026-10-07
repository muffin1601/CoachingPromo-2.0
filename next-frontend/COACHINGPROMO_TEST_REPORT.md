# CoachingPromo SEO test report

Final test date: 6 October 2026

## Baseline before this implementation

- Frontend lint: passed.
- Frontend production build: passed.
- Backend tests: 15/15 passed.
- Redirect verification: 28/28 cases passed.
- Local production frontend and backend: started successfully; MongoDB connected.
- Existing SEO smoke suite: passed on a clean sequential run. One concurrent crawl exposed a transient five-second API timeout, so final crawl suites were intentionally run sequentially.

## Final verification

| Check | Result |
|---|---|
| `npm.cmd run lint` | Passed |
| `npm.cmd run build` | Passed; 29 static-generation units completed |
| `npm.cmd test` in backend | Passed, 15/15 |
| `npm.cmd run verify:redirects` | Passed, 28 canonical/legacy cases |
| `npm.cmd run verify:seo` | Passed; 339 sitemap URLs and existing canonical/product/blog controls |
| `npm.cmd run verify:seo-architecture` | Passed |
| Keyword-map equality | Source 830, mapped 830, unmapped 0 |
| Sitemap | 339 unique canonical direct-200 URLs |
| Metadata | 339 titles and descriptions present; duplicate groups 0 |
| H1 | Exactly one per sitemap page; duplicate groups 0 |
| Canonicals | All sitemap pages self-canonicalized |
| Structured data | All rendered JSON-LD parsed |
| Internal links | 326 unique rendered targets checked; errors 0 |
| Robots | Passed; canonical sitemap present |
| Missing route | Real HTTP 404 with noindex |

## Build output

- Shared first-load JavaScript: 105 kB.
- Homepage first load: 148 kB.
- Subcategory first load: 157 kB.
- New solution/audience/guide routes: 109 kB first load, approximately 192 B route-specific code.
- Middleware: 34.6 kB.
- Build warning retained: the Next.js ESLint plugin is not detected in the existing ESLint configuration. This is a configuration warning, not a lint/build failure.

## Limits

The test suite validates repository behavior and a local production stack. It cannot validate deployed CDN caching, real-user Core Web Vitals, Google indexing, ranking, conversion attribution or Search Console enhancement processing.

