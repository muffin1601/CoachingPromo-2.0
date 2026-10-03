import assert from 'node:assert/strict';

const base = (process.env.SEO_TEST_BASE || 'http://127.0.0.1:3122').replace(/\/$/, '');
const canonicalHost = 'https://www.coachingpromo.in';

async function read(path, init) {
  const response = await fetch(`${base}${path}`, init);
  return { response, html: await response.text() };
}

const category = await read('/categories/apparel-accessories');
const subcategory = await read('/apparel-accessories/polo-t-shirts');
const product = await read('/promotional-items/umbrella/company-logo-umbrellas');
const blogsApi = await (await fetch(`${base}/api/blogs`)).json();
const blog = blogsApi.find(item => !item.slug && item._id && item.title);
assert(blog, 'Need a published legacy article without a slug for this smoke test');
const article = await read(`/blogs/${blog._id}`);
const home = await read('/');
const sitemap = await read('/sitemap.xml');
const robots = await read('/robots.txt');

for (const [label, path, result, visible, schemaType] of [
  ['home', '/', home, 'Branded merchandise', 'Organization'],
  ['category', '/categories/apparel-accessories', category, 'Custom Apparel', 'BreadcrumbList'],
  ['subcategory', '/apparel-accessories/polo-t-shirts', subcategory, 'Polo T-Shirts', 'BreadcrumbList'],
  ['product', '/promotional-items/umbrella/company-logo-umbrellas', product, 'Company Logo Umbrellas', 'Product'],
  ['article', `/blogs/${blog._id}`, article, blog.title.trim(), 'BlogPosting'],
]) {
  assert.equal(result.response.status, 200, `${label} HTTP status`);
  assert(result.html.includes(visible), `${label} text absent from server HTML`);
  const canonical = path === '/' ? `${canonicalHost}(?:/)?` : `${canonicalHost}${path}`;
  assert(new RegExp(`rel="canonical" href="${canonical}"`).test(result.html), `${label} canonical URL`);
  assert(result.html.includes(`"@type":"${schemaType}"`), `${label} JSON-LD`);
  assert(!result.html.includes('<title>CoachingPromo</title>'), `${label} generic title`);
  console.log(`PASS ${label}: visible text, canonical, title and ${schemaType} in response HTML`);
}

assert.equal(sitemap.response.status, 200);
assert(sitemap.html.includes(`${canonicalHost}/blogs/${blog._id}`), 'legacy blog missing from sitemap');
assert(sitemap.html.includes(`${canonicalHost}/offers`), 'offers missing from sitemap');
assert(!sitemap.html.includes('localhost'), 'local URLs in sitemap');
const sitemapUrls = [...sitemap.html.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => url.replaceAll('&amp;', '&'));
assert(sitemapUrls.length, 'sitemap URLs');
const expectedSitemapUrls = Number(process.env.EXPECTED_SITEMAP_URLS || 322);
assert.equal(sitemapUrls.length, expectedSitemapUrls, `expected ${expectedSitemapUrls} sitemap URLs`);
for (let index = 0; index < sitemapUrls.length; index += 5) {
  const batch = sitemapUrls.slice(index, index + 5);
  const results = await Promise.all(batch.map(async url => {
    const pathname = new URL(url).pathname;
    const response = await fetch(`${base}${pathname}`, { redirect: 'manual' });
    return { pathname, status: response.status };
  }));
  const nonIndexable = results.filter(({ status }) => status !== 200);
  assert.deepEqual(nonIndexable, [], `sitemap contains non-200 URLs: ${JSON.stringify(nonIndexable)}`);
}
console.log(`PASS sitemap: ${sitemapUrls.length} canonical, directly indexable URLs, including legacy articles`);

assert(product.html.includes('class="related-product-link"'), 'product must expose crawlable related-product links in server HTML');
console.log('PASS product internal links are crawlable without client-side navigation');

assert.equal(robots.response.status, 200);
assert(robots.html.includes(`${canonicalHost}/sitemap.xml`), 'robots sitemap URL');
console.log('PASS robots.txt');

const wrongProduct = await read('/bags/umbrella/company-logo-umbrellas', { redirect: 'manual' });
assert(wrongProduct.html.includes('NEXT_REDIRECT') || [307, 308].includes(wrongProduct.response.status), 'wrong-path product must redirect');
assert(wrongProduct.html.includes(`rel="canonical" href="${canonicalHost}/promotional-items/umbrella/company-logo-umbrellas"`), 'wrong-path product canonical');
console.log('PASS product duplicate-path redirect and canonical');

for (const [source, destination] of [
  ['/tshirts', '/categories/apparel-accessories'],
  ['/apparel/graduation-gown', '/apparel-accessories/graduation-gown'],
  ['/apparel/polo-t-shirts', '/apparel-accessories/polo-t-shirts'],
  ['/blog', '/blogs'],
  ['/__CANONICAL__', '/'],
  ['/blogs/__CANONICAL__', '/blogs'],
  ['/apparel-accessories/__CANONICAL__', '/categories/apparel-accessories'],
  ['/apparel-accessories/polo-t-shirts/__CANONICAL__', '/apparel-accessories/polo-t-shirts'],
  ['/stationery/markers/__CANONICAL__', '/categories/stationery'],
]) {
  const response = await fetch(`${base}${source}`, { redirect: 'manual' });
  assert.equal(response.status, 308, `${source} redirect status`);
  assert.equal(response.headers.get('location'), `${canonicalHost}${destination}`, `${source} canonical redirect destination`);
}
console.log('PASS Search Console legacy paths use permanent one-hop redirects');

const missingProduct = await read('/not-a-real-category/not-a-real-subcategory/not-a-real-product');
assert.equal(missingProduct.response.status, 404, 'missing dynamic content must return a real HTTP 404');
assert.match(missingProduct.html, /<meta name="robots" content="noindex"\s*\/>/, 'missing content must be noindex');
console.log('PASS missing dynamic content: HTTP 404 and noindex');

const productData = await (await fetch(`${base}/api/products/company-logo-umbrellas`)).json();
const migratedImage = productData.product?.images?.[0]?.url;
assert(migratedImage?.startsWith('/assets/migrated-products/'), 'legacy image did not become local asset');
const imageResponse = await fetch(`${base}${migratedImage}`);
assert.equal(imageResponse.status, 200);
assert(imageResponse.headers.get('content-type')?.startsWith('image/webp'));
console.log('PASS migrated product image from tracked Next assets');

const blogImage = '/uploads/blogs/1773295879273-318152027-grok-image-a00d31c9-7193-4fbe-8672-794680df352d.png';
const blogImageResponse = await fetch(`${base}${blogImage}`);
assert.equal(blogImageResponse.status, 200, 'recovered blog image must bypass backend upload rewrite');
assert(blogImageResponse.headers.get('content-type')?.startsWith('image/png'));
console.log('PASS recovered blog image from tracked Next assets');
