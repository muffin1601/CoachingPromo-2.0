# CoachingPromo search launch notes

The [content and keyword PDF](./CoachingPromo-SEO-Content-Keywords.pdf) inventories visible copy and existing keywords for the home/static pages, 4 categories, 43 subcategories, 250 active products and 11 published articles. It combines a snapshot of the Next production HTML in [static-page-copy.json](./static-page-copy.json) with the verified 2026-09-29 Next-backend MongoDB backup; it excludes users, comments, leads and orders. After static page edits, refresh the HTML snapshot from a running production build, then rebuild the PDF:

The generator requires Python and ReportLab (`python -m pip install reportlab`).

```powershell
node next-frontend/scripts/capture-static-copy.mjs http://127.0.0.1:3122
python next-frontend/scripts/build-seo-pdf.py .migration-backups/<verified-backup-directory>
```

The Next app now sends public catalogue and article text in initial server HTML, provides page-specific metadata/canonicals, publishes a sitemap on the canonical `https://www.coachingpromo.in` host, and emits Organization, WebSite, BreadcrumbList, Product and BlogPosting JSON-LD where relevant. The backend sitemap includes legacy articles without slugs. The Next runtime still needs a reachable `BACKEND_URL` for dynamic pages and sitemap generation.

Before going live:

1. Set `NEXT_PUBLIC_SITE_URL=https://www.coachingpromo.in` and `PUBLIC_SITE_URL=https://www.coachingpromo.in` in the production Next app pair. Keep `FRONTEND_URL`/`CORS_ORIGINS` aligned with actual browser origins; the public canonical host is a separate setting.
2. Keep the 301 redirect from the apex domain to `www`; verify HTTPS, live canonical tags, `robots.txt`, and `sitemap.xml` after deployment. Do not point production metadata at localhost or a preview domain.
3. Submit the `www` property and sitemap in Google Search Console, inspect example category/product/article URLs, and monitor indexing, Core Web Vitals, clicks and queries. No Search Console access was available in this repository session.
4. Fill the 241/250 active product pages lacking substantive descriptions with real, differentiated specifications and buying guidance. Nine primary images lack alt text; one product slug contains a space. Do not invent product claims or publish mass-produced filler.
5. Deploy the 33 legacy product media files now tracked under `public/assets/migrated-products/` and three recovered blog images under `public/uploads/blogs/`. Dedicated-backend product API output maps old HTTP product URLs to local files without changing MongoDB. Verify product galleries, videos and blog images over HTTPS before removing the original media host.
6. Check Product rich results and price/stock accuracy after deploy. JSON-LD includes an Offer only when a positive price and stock are present; it deliberately does not invent reviews, shipping or returns policies.
7. Treat PDF keyword phrases as editorial targets, not measured search volume or guaranteed rankings. Use relevant terms naturally in useful titles, headings, descriptions, visible copy, alt text and crawlable internal links.

Google’s [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), [ecommerce site-structure guidance](https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure), and [Product structured-data rules](https://developers.google.com/search/docs/appearance/structured-data/product) informed these changes. Google [does not use the `meta keywords` tag for ranking](https://developers.google.com/search/docs/crawling-indexing/special-tags), and [no one can guarantee a first-place ranking](https://developers.google.com/search/docs/fundamentals/do-i-need-seo).

This SEO work does not replace the separate migration deletion gate in [MIGRATION_READINESS.md](../MIGRATION_READINESS.md): staging payment/admin tests, an off-machine protected backup, and database restore validation are still outstanding.
