# CoachingPromo SEO Reports Index

**Index date:** 12 October 2026  
**Purpose:** A single navigation and governance page for executive review, SEO analysis and implementation evidence.

## Recommended reading order

1. **[SEO executive review](./SEO_EXECUTIVE_REVIEW.md)** — start here for status, completed work, open dependencies and decisions.
2. **[Implementation report](./COACHINGPROMO_IMPLEMENTATION_REPORT.md)** — review the detailed implementation scope.
3. **[Test report](./COACHINGPROMO_TEST_REPORT.md)** — confirm what was tested and what local QA cannot prove.
4. **[SEO audit](./COACHINGPROMO_SEO_AUDIT.md)** — use for technical, content and governance analysis.
5. Use the CSV files for row-level investigation and operational work.

## Current authoritative pack

| File | Audience | What it answers | Authority |
|---|---|---|---|
| [SEO executive review](./SEO_EXECUTIVE_REVIEW.md) | Executive / SEO lead | What is done, what is pending and what needs a decision? | Current summary as of 12 October 2026 |
| [Implementation report](./COACHINGPROMO_IMPLEMENTATION_REPORT.md) | SEO lead / product owner | What changed in the 6 October implementation? | Current implementation record |
| [SEO audit](./COACHINGPROMO_SEO_AUDIT.md) | SEO specialist / engineering | What is the technical and content state? | Current audit record |
| [Test report](./COACHINGPROMO_TEST_REPORT.md) | Engineering / SEO QA | Which checks passed, and what are their limits? | Current local verification record |
| [Schema report](./COACHINGPROMO_SCHEMA_REPORT.md) | SEO specialist / engineering | Which structured-data types exist and what was excluded? | Current schema record |
| [Keyword map](./seo-reports/COACHINGPROMO_KEYWORD_MAP.csv) | SEO analyst | Where does every one of the 830 keywords belong? | Authoritative keyword map |
| [URL inventory](./seo-reports/COACHINGPROMO_SEO_URL_INVENTORY.csv) | SEO analyst / QA | What is the status of each of the 339 sitemap URLs? | Authoritative URL inventory |
| [Content gaps](./seo-reports/COACHINGPROMO_CONTENT_GAPS.csv) | SEO/content lead | Which 47 intent clusters were retained, added or consolidated? | Current cluster/action register |
| [Internal-link map](./seo-reports/COACHINGPROMO_INTERNAL_LINK_MAP.csv) | SEO/content lead | Which 95 priority contextual link relationships were documented? | Current internal-link register |
| [Keyword master](./seo-reports/coachingpromo_india_seo_keywords_master.csv) | SEO analyst | What was the original 830-row keyword input? | Source dataset; do not edit as an output report |

## Historical and reference material

Files under `seo/` document the September baseline and first implementation phase. They remain useful for traceability, but they should not override the October authoritative pack.

| File | Use |
|---|---|
| [September implementation report](./seo/SEO_IMPLEMENTATION_REPORT.md) | Historical implementation report and earlier 30/90-day plan |
| [September keyword map](./seo/SEO_KEYWORD_MAP.csv) | Historical 81-row keyword architecture; superseded by the 830-row root map |
| [Baseline launch notes](./seo/README.md) | Baseline capture/generation notes and launch prerequisites |
| [September content/keyword PDF](./seo/CoachingPromo-SEO-Content-Keywords.pdf) | September content and keyword snapshot |
| [Static-page copy snapshot](./seo/static-page-copy.json) | Machine-readable snapshot used by the September PDF workflow |
| [Winter SEO content PDF](./docs/CoachingPromo-Winter-SEOContent.pdf) | Topic-specific winter/hoodie content reference |

## Report ownership and update rules

- Treat the root-level October files as one versioned report set; do not mix counts from the September and October sets.
- Regenerate row-level deliverables after sitemap, page ownership or keyword-source changes.
- Rerun local QA after material code, content or database changes and update the evidence date.
- Keep repository completion separate from production deployment, Google indexation, rankings and conversions.
- Add Search Console and analytics results as a dated performance section or separate dated report; do not overwrite implementation evidence.
- Preserve the master keyword CSV as the immutable source and write changes to the mapped output.

## Quick metrics

| Metric | Current reported value |
|---|---:|
| Source keyword rows | 830 |
| Mapped keyword rows | 830 |
| Unmapped keyword rows | 0 |
| Canonical keyword owners | 47 |
| New authoritative pages | 17 |
| Sitemap URLs | 339 |
| Internal link relationships documented | 95 |
| Rendered internal targets checked | 326 |
| Backend tests | 15/15 passed |
| Redirect cases | 28/28 passed |

