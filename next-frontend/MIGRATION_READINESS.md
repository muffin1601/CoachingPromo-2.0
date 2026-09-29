# Standalone migration verification — 2026-09-29

## SEO and media follow-up — 2026-09-29

- Next public assets now total 835 tracked files. Thirty-three legacy product images/videos
  were captured from the public old host into `public/assets/migrated-products/`.
  Dedicated-backend product JSON points at those local assets without changing MongoDB.
  Three missing published-blog images were also captured into `public/uploads/blogs/`.
- Public categories, subcategories, products, and articles now have content in the initial
  server HTML, production-host canonicals, factual structured data, and sitemap coverage.
- A separate public-content and keyword inventory PDF is in `seo/`. It flags 241 of 250
  active products with no substantive description and nine primary images missing alt text.
- The final fresh isolated Next app pair under `.standalone-checks/2026-09-29T06-34-05-830Z/`
  passed clean offline installs, parity of all 835 assets, lint, production build and
  15 backend tests without either original folder. Production HTML, sitemap, migrated
  media, and five hydrated browser routes passed SEO smoke checks. See `seo/README.md`.
- These improvements do **not** change the staging payment/admin sign-off or backup restore
  requirements below. Do not delete originals solely on the basis of SEO checks.

## Completed

- Removed `predev` / `prebuild` syncing and obsolete migration/bootstrap scripts.
- `react-source/` is owned Next application source; `public/` is owned asset storage.
- 189 source files and 799 public assets were added to Git's index; no commit or push was made.
- Credentials, database exports, runtime uploads and isolated test folders remain Git-ignored.
- Preserved 28 page mappings, product redirects, and all 799 asset hashes in a standalone manifest.
- Corrected Footer and WhyChooseUs stylesheet import casing for case-sensitive systems.
- Refreshed the lockfile after a clean install exposed a missing canvas dependency entry.
- Fresh app pair in `.standalone-checks/2026-09-26T09-30-44-736Z/` contains neither original folder.
- Both apps installed using `npm ci --offline --ignore-scripts --no-audit --no-fund`.
  No old node_modules or Next build cache was copied. Lifecycle scripts were deliberately disabled.
- Isolated frontend lint, parity verification, and production build passed. Existing CSS compatibility
  and missing Next ESLint plugin warnings remain non-fatal.
- Isolated backend started on port 5111 and connected to MongoDB. Isolated Next served on port 3120.
- 40 read-only HTTP checks passed against that isolated pair.
- 11 backend tests pass: 5 boundary tests and 6 fixture-based login/order/admin/upload contract tests.
- After fixing browser-discovered issues, a second fresh app pair in
  `.standalone-checks/2026-09-29T05-26-06-136Z/` again installed from lockfiles,
  passed parity/lint, built for production, and passed all 11 backend tests without
  either original folder. The production frontend served on port 3122 for browser QA.
- 11 real-Chrome interaction tests passed against that isolated production frontend:
  invalid login, fixture login/profile, product-to-cart/rapid refresh/quantity/remove,
  checkout required fields and intercepted complete order payload, contact, three-step
  quote, catalogue, PNG and SVG customizer controls, admin product editor opening,
  and 390px mobile overflow checks on four routes. CRM/email/order requests were
  intercepted in the browser; no live lead, email, order, or payment was created.
- An image upload to the isolated backend returned 200 and its URL served the saved
  image (200, 70 bytes). The disposable file remains only in the ignored test copy.
- The isolated backend used the configured shared MongoDB for read routes. The frontend's
  visitor-count GET route writes visitor analytics, so local browser QA may have added
  localhost visitor entries to that shared collection. No cleanup was attempted because
  deleting records could affect concurrent visitors.
- Browser QA exposed and we fixed a cart persistence race, a checkout redirect before
  the user cart loaded, checkout payment bypassing HTML form validation, missing
  separate-shipping state, and a mobile homepage hydration mismatch.

## Not yet verified — keep the original folders

The in-app browser failed to connect (`sandboxPolicy` missing), so the interaction
checks above used locally installed Chrome with Playwright against the isolated
production build. Fixtures and request interception prove UI wiring, not third-party
delivery or authorization with real accounts. A staging database, disposable user/admin
accounts, and Razorpay test-mode credentials are needed for final sign-off.

| Flow | Remaining acceptance test |
| --- | --- |
| Login/profile/logout | Use a real staging user and admin; verify refreshed session and logout. Invalid real login and fixture sign-in/profile passed. |
| SVG and PNG customizers | Text, local PNG picker, tools, view switching and preview controls passed. Still test colour application, drag/resize, save/export, product-to-customizer handoff and mobile pointer alignment. |
| Cart/favourites | Guest add/quantity/refresh/remove passed. Still test favourites and login/logout cart handoff. |
| Checkout/payment | Billing/GST/separate shipping payload and required-field gating passed with order write intercepted. Still run Razorpay **test-mode** success/cancel and verify staging order/payment status. |
| Forms | Contact, quote and catalogue browser submissions passed with CRM/email mocked. Still verify real staging delivery/storage for these, institute, reset email and blog comment/post. |
| Uploads | Isolated backend image upload and served URL passed. Still test an authenticated admin UI upload, refresh and stored media reference in staging. |
| Admin | Fixture-role dashboard, product page and add-product editor passed. Still verify real admin login, create/edit/delete disposable data, and ordinary-user denial in staging. |

Use a staging database and test-mode/sandbox integration credentials for write tests.
Do not submit live payments, customer emails, CRM leads or real orders merely to test the migration.
No live account, order, payment, CRM lead or email was created by the checks above.
Browser clicks may also have generated development-origin web analytics events.

## Backup

Latest private local backup: `.migration-backups/2026-09-29T06-38-58-946Z/` at repository root.

- 2,293 files from both original and Next app pairs, including four environment files
  and 36 uploaded files across the two backend copies;
  each copied file's SHA-256 was verified. Reinstallable dependencies/build caches were excluded.
- All 18 original uploaded files matched the Next backend copies before migration.
- The original and dedicated backends use the same configured MongoDB connection.
- 13 MongoDB collections exported as canonical Extended JSON lines, with indexes and collection options.
  Every exported line was parsed successfully; file checksums and document counts are in `manifest.json`.
- `mongodump` was unavailable. This is an application-data logical export, not a mongodump archive,
  replica-set snapshot, database-user/role backup or point-in-time consistent capture.
- A restore into a separate database has **not** been tested. Concurrent writes can make collections
  inconsistent across export times. Take a fresh backup during a write pause before final cutover.
- Backup is local and unencrypted; Git exclusion is not encryption or an off-machine disaster backup.
  Protect it and copy it to your encrypted backup storage before deleting originals.

### Recovery outline

1. Copy the required original app folder from the private backup to a new recovery directory.
2. Restore its `.env` and `uploads/` privately. Reinstall dependencies from its lockfile.
3. For database recovery, use a **new empty database**, never overwrite the live one for a test.
4. For each collection listed in the manifest, create it with its recorded options, parse each
   `.ejsonl` line using MongoDB BSON EJSON with `relaxed: false`, and insert the resulting documents.
5. Recreate non-`_id` indexes from the recorded specifications; recreate recorded views afterward.
6. Compare document counts and validate products, users, orders and media references before switching URLs.

The next-backend backup script can create another backup after changes; original folders are optional.
The removed bootstrap/sync scripts can be recovered from the private pre-change backup.

## Deletion gate

Build independence is verified. Functional sign-off and database restore verification are not.
Do not delete the original folders until the acceptance tests above pass and you have a protected
off-machine backup. Neither original folder has been moved or deleted.
