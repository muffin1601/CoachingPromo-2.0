import assert from 'node:assert/strict';
const base = process.env.SMOKE_URL || 'http://127.0.0.1:3100';
let checked = 0;
async function request(path, status = 200) {
  const response = await fetch(`${base}${path}`, { redirect: 'manual', signal: AbortSignal.timeout(20000) });
  assert.equal(response.status, status, `${path} returned ${response.status}`);
  checked++;
  return response;
}
for (const path of ['/', '/about', '/contact', '/login', '/register', '/cart', '/checkout', '/favorites', '/profile', '/offers', '/blogs', '/blogs/post', '/forgot-password', '/resetpassword/qa-token', '/customize/polotshirt', '/customize/all', '/admin', '/admin/banners', '/admin/categories', '/admin/subcategories', '/admin/products', '/admin/orders', '/admin/blogs', '/search?q=bags']) {
  const html = await (await request(path)).text();
  assert(html.includes('cp-store cp-square'), `${path}: square theme shell missing`);
  const digests = [...html.matchAll(/data-dgst="([^"]+)"/g)].map(match => match[1]);
  assert(digests.every(digest => digest === 'BAILOUT_TO_CLIENT_SIDE_RENDERING'), `${path}: server render failed (${digests})`);
  if (path === '/') {
    const stylesheets = [...html.matchAll(/<link[^>]+href="([^"]+\.css[^\"]*)"/g)].map(match => match[1].replaceAll('&amp;', '&'));
    const css = (await Promise.all(stylesheets.map(async href => {
      const response = await fetch(new URL(href, base));
      assert.equal(response.status, 200, `Stylesheet unavailable: ${href}`);
      return response.text();
    }))).join('\n');
    assert(css.includes('.cp-store.cp-square.cp-square'), 'Square-corner override stylesheet missing');
    assert(css.includes('--cp-gutter:'), 'Responsive spacing tokens missing');
    assert(css.includes('--cp-radius:3px'), 'Site-wide 3px radius token missing');
    assert(css.includes('DM Sans'), 'Shared DM Sans typography missing');
    for (const designClass of ['cp-header', 'cp-hero', 'cp-collections', 'cp-solutions']) {
      assert(html.includes(designClass), `Next redesign missing: ${designClass}`);
    }
    assert(html.includes('Start with what you need to make.'), 'Original homepage copy missing');
    assert(html.includes('sales@coachingpromo.in'), 'Original contact details missing');
  }
}
for (const [path, target] of [['/blog', '/blogs'], ['/account', '/profile']]) {
  const response = await request(path, 308);
  assert.equal(response.headers.get('location'), target);
}
for (const path of ['/logo.webp', '/polo/front.svg', '/robots.txt']) await request(path);
const categories = await (await request('/api/categories/all')).json();
const health = await (await request('/api/health')).json();
assert.equal(health.service, 'coachingpromo-next-backend', 'Next is not connected to its dedicated backend');
assert(Array.isArray(categories), 'Category proxy response changed');
const products = await (await request('/api/products/all?limit=1')).json();
const product = products.items?.[0];
assert(product?.category?.slug && product?.subcategory?.slug, 'No populated product available to check route parameters');
for (const path of [`/categories/${product.category.slug}`, `/${product.category.slug}/${product.subcategory.slug}`, `/${product.category.slug}/${product.subcategory.slug}/${product.slug}`]) await request(path);
const legacy = await request(`/product/${product.slug}`, 308);
assert.equal(new URL(legacy.headers.get('location'), base).pathname, `/${product.category.slug}/${product.subcategory.slug}/${product.slug}`);
const blogs = await (await request('/api/blogs')).json();
if (blogs.length) await request(`/blogs/${blogs[0].slug || blogs[0]._id}`);
const sitemap = await (await request('/sitemap.xml')).text();
assert(sitemap.includes('/blogs'), 'Original blogs path missing from sitemap');
await request('/api/crm', 405); // No lead, email, account, order, or payment is submitted.
console.log(`Passed ${checked} read-only HTTP checks, including live backend catalogue data and product redirects.`);
