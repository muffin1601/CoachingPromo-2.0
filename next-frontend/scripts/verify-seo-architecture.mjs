import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

const base = (process.env.SEO_TEST_BASE || 'http://127.0.0.1:3122').replace(/\/$/, '');
const canonicalHost = 'https://www.coachingpromo.in';

function parseCsv(text) {
  const rows = []; let row = [], value = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (quoted) { if (char === '"' && text[i + 1] === '"') { value += '"'; i++; } else if (char === '"') quoted = false; else value += char; }
    else if (char === '"') quoted = true;
    else if (char === ',') { row.push(value); value = ''; }
    else if (char === '\n') { row.push(value.replace(/\r$/, '')); rows.push(row); row = []; value = ''; }
    else value += char;
  }
  if (value || row.length) { row.push(value.replace(/\r$/, '')); rows.push(row); }
  const headers = rows.shift().map((header, index) => index ? header : header.replace(/^\uFEFF/, ''));
  return rows.filter(item => item.some(Boolean)).map(item => Object.fromEntries(headers.map((header, index) => [header, item[index] || ''])));
}

const source = parseCsv(await fs.readFile('coachingpromo_india_seo_keywords_master.csv', 'utf8'));
const mapped = parseCsv(await fs.readFile('COACHINGPROMO_KEYWORD_MAP.csv', 'utf8'));
assert.equal(source.length, 830, 'source row count');
assert.equal(mapped.length, source.length, 'mapped row count must equal source');
assert.deepEqual(mapped.map(row => row.Keyword), source.map(row => row.Keyword), 'keyword map must preserve every source row and order');
assert(mapped.every(row => row['Target URL'] && row['Current Status'] && row['Canonical Owner']), 'every keyword must have a target, disposition and owner');
console.log(`PASS keyword completeness: source ${source.length}, mapped ${mapped.length}, unmapped 0`);

const sitemapResponse = await fetch(`${base}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200, 'sitemap status');
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1].replaceAll('&amp;', '&'));
assert.equal(urls.length, 339, 'sitemap URL count');
assert.equal(new Set(urls).size, urls.length, 'duplicate sitemap URL');

const pages = [];
for (let index = 0; index < urls.length; index += 8) {
  pages.push(...await Promise.all(urls.slice(index, index + 8).map(async url => {
    const pathname = new URL(url).pathname;
    const response = await fetch(`${base}${pathname}`, { redirect: 'manual' });
    const html = await response.text();
    return { url, pathname, status: response.status, html };
  })));
}
assert.deepEqual(pages.filter(page => page.status !== 200).map(page => [page.pathname, page.status]), [], 'sitemap must contain only direct 200 URLs');

const titles = [], descriptions = [], h1s = [], internalLinks = new Set();
for (const page of pages) {
  const title = page.html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  const description = page.html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)/i)?.[1] || page.html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description/i)?.[1];
  const canonical = page.html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)/i)?.[1] || page.html.match(/<link[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical/i)?.[1];
  const headings = [...page.html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  assert(title, `${page.pathname} title`); assert(description, `${page.pathname} meta description`);
  assert.equal(canonical.replace(/\/$/, ''), page.url.replace(/\/$/, ''), `${page.pathname} self canonical`);
  assert.equal(headings.length, 1, `${page.pathname} must have one H1`);
  assert(!/name=["']robots["'][^>]*noindex/i.test(page.html), `${page.pathname} sitemap page must be indexable`);
  for (const script of page.html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) JSON.parse(script[1]);
  for (const link of page.html.matchAll(/<a[^>]*href=["']([^"'#]+)["']/gi)) {
    const href = link[1];
    if (href.startsWith('/') && !href.startsWith('//')) internalLinks.add(href.split('?')[0]);
  }
  titles.push(title); descriptions.push(description); h1s.push(headings[0][1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
}
const duplicates = values => [...new Set(values.filter((value, index) => values.indexOf(value) !== index))];
assert.deepEqual(duplicates(titles), [], 'duplicate titles');
assert.deepEqual(duplicates(descriptions), [], 'duplicate meta descriptions');
assert.deepEqual(duplicates(h1s), [], 'duplicate H1s');
console.log(`PASS rendered SEO: ${pages.length} direct-200 self-canonical pages, unique titles/descriptions/H1s, valid JSON-LD`);

const broken = [];
const links = [...internalLinks].filter(link => !link.startsWith('/api/') && !link.startsWith('/uploads/'));
for (let index = 0; index < links.length; index += 10) {
  broken.push(...(await Promise.all(links.slice(index, index + 10).map(async link => {
    const response = await fetch(`${base}${link}`, { redirect: 'manual' });
    return response.status >= 400 ? [link, response.status] : null;
  }))).filter(Boolean));
}
assert.deepEqual(broken, [], 'broken internal links');
console.log(`PASS internal links: ${links.length} unique rendered targets return non-error status`);

for (const path of ['/solutions/student-welcome-kits','/solutions/event-merchandise-for-educational-institutions','/industries/schools','/industries/colleges-universities','/guides/custom-t-shirt-printing-guide']) {
  const page = pages.find(item => item.pathname === path);
  assert(page, `${path} missing from sitemap`);
  assert(page.html.includes('"@type":"FAQPage"'), `${path} visible FAQ schema`);
}
console.log('PASS new solution, audience and guide architecture is indexable and schema-aligned');
