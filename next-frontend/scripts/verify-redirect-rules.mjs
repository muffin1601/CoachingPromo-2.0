import assert from 'node:assert/strict';
import { canonicalRedirectUrl, isPrivateIndexPath, legacyRedirectPath } from '../lib/redirects.mjs';

const exportedRedirects = [
  ['/', null],
  ['/apparel-accessories/round-neck-t-shirts', null],
  ['/blogs/68db8b6fa1067ff6294de953', null],
  ['/categories/apparel-accessories', null],
  ['/apparel/graduation-gown', '/apparel-accessories/graduation-gown'],
  ['/apparel/graduation-hat', '/apparel-accessories/graduation-hat'],
  ['/apparel/graduation-hood', '/apparel-accessories/graduation-hood'],
  ['/apparel/formal-shirts', '/apparel-accessories/shirts'],
  ['/apparel/polo-t-shirts', '/apparel-accessories/polo-t-shirts'],
  ['/apparel/round-neck-t-shirts', '/apparel-accessories/round-neck-t-shirts'],
  ['/apparel-accessories/sports-t-shirts', '/apparel-accessories/sports-jersey'],
  ['/stationery/metal-pen', '/stationery/customized-pens'],
  ['/stationery/writing-instruments/metal-pen', '/stationery/customized-pens/metal-pen'],
  ['/stationery/markers/markers-product', '/categories/stationery'],
  ['/products/institute-backpack', '/product/institute-backpack'],
  ['/products/water-bottle', '/product/water-bottle'],
  ['/promotional-items/graduation-honor-cards', '/promotional-items/other/graduation-honor-cards'],
  ['/tshirts', '/categories/apparel-accessories'],
  ['/blog', '/blogs'],
  ['/blog/example-article', '/blogs/example-article'],
  ['/__CANONICAL__', '/'],
  ['/blogs/__CANONICAL__', '/blogs'],
  ['/apparel-accessories/__CANONICAL__', '/categories/apparel-accessories'],
  ['/stationery/markers/__CANONICAL__', '/categories/stationery'],
  ['/stationery/attendance-registers/personalized-attendance-registers%3C', '/stationery/attendance-registers/personalized-attendance-registers'],
  ['/stationery/attendance-registers/personalized-attendance-registers<', '/stationery/attendance-registers/personalized-attendance-registers'],
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

for (const path of ['/customize/polotshirt', '/customize/roundneck', '/admin/products', '/cart', '/blogs/post']) {
  assert.equal(isPrivateIndexPath(path), true, `${path} must not be indexed`);
}
for (const path of ['/', '/blogs', '/categories/bags', '/bags/jute-bag']) {
  assert.equal(isPrivateIndexPath(path), false, `${path} must remain indexable`);
}

console.log(`PASS ${exportedRedirects.length} canonical and legacy redirect path rules`);
