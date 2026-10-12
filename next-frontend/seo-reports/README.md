# CoachingPromo SEO CSV Reports

This folder contains the current authoritative CSV data set for SEO review and analysis.

| File | Purpose | Rows |
|---|---|---:|
| `coachingpromo_india_seo_keywords_master.csv` | Original keyword source; preserve as the input dataset | 830 |
| `COACHINGPROMO_KEYWORD_MAP.csv` | Row-level keyword ownership and implementation disposition | 830 |
| `COACHINGPROMO_SEO_URL_INVENTORY.csv` | Crawl and on-page inventory for canonical sitemap URLs | 339 |
| `COACHINGPROMO_CONTENT_GAPS.csv` | Canonical intent clusters, gaps, actions and status | 47 |
| `COACHINGPROMO_INTERNAL_LINK_MAP.csv` | Priority source/target internal-link relationships | 95 |

Run `npm run generate:seo-reports` from `next-frontend` to refresh the generated CSV files. The generator reads the master keyword file and writes its outputs back to this folder.

The older 81-row keyword map in `../seo/SEO_KEYWORD_MAP.csv` is retained as historical reference and is superseded by the current 830-row map here.
