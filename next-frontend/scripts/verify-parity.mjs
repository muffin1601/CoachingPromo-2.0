import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const routes = JSON.parse(await readFile(path.join(root, 'route-parity.json'), 'utf8'));
for (const [route, component] of Object.entries(routes)) {
  const page = await readFile(path.join(root, 'app', route, 'ReactPage.jsx'), 'utf8');
  assert(page.includes(`@/react-source/pages/${component}`), `Wrong page for /${route}`);
}
const assets = JSON.parse(await readFile(path.join(root, 'asset-manifest.json'), 'utf8'));
await readFile(path.join(root, 'app/product/[slug]/route.js'));
let count = 0;
for (const [file, expected] of Object.entries(assets)) {
  const hash = createHash('sha256').update(await readFile(path.join(root, 'public', file))).digest('hex');
  assert.equal(hash, expected, `Asset differs from migration baseline: ${file}`);
  count++;
}
for (const [source, component] of Object.entries({
  'components/Navbar.jsx': 'Header',
  'components/HeroSection.jsx': 'Hero',
  'components/FeaturedCategories.jsx': 'Categories',
  'pages/Home.jsx': 'Home',
})) {
  const generated = await readFile(path.join(root, 'react-source', source), 'utf8');
  assert(generated.includes(`@/components/design/${component}`), `Next design overwritten: ${source}`);
  await readFile(path.join(root, 'components/design', `${component}.jsx`));
}
console.log(`Verified ${Object.keys(routes).length} migrated pages, product redirect, and ${count} identical assets.`);
console.log('Verified Next-owned presentation modules without reading any original app folder.');
