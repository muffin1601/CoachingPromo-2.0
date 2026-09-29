const test = require('node:test');
const assert = require('node:assert/strict');
const { siteUrl, productPath, productUrl, blogUrl } = require('../utils/siteSeo');
const Product = require('../models/product');

test('public canonical host is independent of local CORS frontend URL', () => {
  const oldPublic = process.env.PUBLIC_SITE_URL;
  const oldFrontend = process.env.FRONTEND_URL;
  try {
    delete process.env.PUBLIC_SITE_URL;
    process.env.FRONTEND_URL = 'http://localhost:3000';
    assert.equal(siteUrl(), 'https://www.coachingpromo.in');
  } finally {
    if (oldPublic === undefined) delete process.env.PUBLIC_SITE_URL;
    else process.env.PUBLIC_SITE_URL = oldPublic;
    if (oldFrontend === undefined) delete process.env.FRONTEND_URL;
    else process.env.FRONTEND_URL = oldFrontend;
  }
});

test('product sitemap paths encode malformed legacy slugs and omit incomplete hierarchy', () => {
  const product = { slug: 'academy -polo-t-shirt', category: { slug: 'apparel-accessories' }, subcategory: { slug: 'polo-t-shirts' } };
  assert.equal(productPath(product), '/apparel-accessories/polo-t-shirts/academy%20-polo-t-shirt');
  assert.equal(productUrl({ ...product, category: null }), null);
});

test('legacy articles without slugs use their real id in the sitemap', () => {
  const oldPublic = process.env.PUBLIC_SITE_URL;
  try {
    delete process.env.PUBLIC_SITE_URL;
    assert.equal(blogUrl({ _id: '6a02cefb4a587ec42f2cb5c0' }), 'https://www.coachingpromo.in/blogs/6a02cefb4a587ec42f2cb5c0');
  } finally {
    if (oldPublic === undefined) delete process.env.PUBLIC_SITE_URL;
    else process.env.PUBLIC_SITE_URL = oldPublic;
  }
});

test('API serialization points legacy media to tracked Next assets without changing stored values', () => {
  const product = new Product({ name: 'QA product', slug: 'qa-product', price: 100,
    images: [{ url: 'http://coachingpromo.in/uploads/products/1775913384282.webp' }],
    subImages: [{ url: 'http://coachingpromo.in/uploads/products/1775454632502.mp4', type: 'video' }] });
  const json = product.toJSON();
  assert.equal(json.images[0].url, '/assets/migrated-products/1775913384282.webp');
  assert.equal(json.subImages[0].url, '/assets/migrated-products/1775454632502.mp4');
  assert.equal(product.images[0].url, 'http://coachingpromo.in/uploads/products/1775913384282.webp');
});
