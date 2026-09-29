import assert from 'node:assert/strict';
import { canonicalRedirectUrl, legacyRedirectPath } from '../lib/redirects.mjs';

const exportedRedirects = [
  ['/', null],
  ['/apparel-accessories/round-neck-t-shirts', null],
  ['/blogs/68db8b6fa1067ff6294de953', null],
  ['/categories/apparel-accessories', null],
  ['/apparel/graduation-gown', '/apparel-accessories/graduation-gown'],
  ['/apparel/polo-t-shirts', '/apparel-accessories/polo-t-shirts'],
  ['/tshirts', '/categories/apparel-accessories'],
  ['/blog', '/blogs'],
  ['/blog/example-article', '/blogs/example-article'],
  ['/__CANONICAL__', '/'],
  ['/blogs/__CANONICAL__', '/blogs'],
  ['/apparel-accessories/__CANONICAL__', '/categories/apparel-accessories'],
  ['/stationery/markers/__CANONICAL__', '/categories/stationery'],
];

for (const [source, destination] of exportedRedirects) {
  assert.equal(legacyRedirectPath(source), destination, source);
}

assert.equal(
  canonicalRedirectUrl('http://localhost:3100/__CANONICAL__?source=legacy', '/').href,
  'https://www.coachingpromo.in/?source=legacy',
  'internal server hosts must never leak into public redirects',
);
assert.equal(
  canonicalRedirectUrl('http://localhost:3100/current-path?q=one', null).href,
  'https://www.coachingpromo.in/current-path?q=one',
  'canonical-host redirects preserve the path and query string',
);

console.log(`PASS ${exportedRedirects.length} canonical and legacy redirect path rules`);
