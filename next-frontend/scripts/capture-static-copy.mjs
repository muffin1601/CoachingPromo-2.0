// Capture visible public static-page copy from a running Next production build.
// This snapshot is included in the SEO PDF; it does not read the old React apps.
// Usage: node next-frontend/scripts/capture-static-copy.mjs [http://127.0.0.1:3122]
import { createRequire } from 'node:module';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { JSDOM } = require('jsdom');
const base = (process.argv[2] || 'http://127.0.0.1:3122').replace(/\/$/, '');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pages = [
  { path: '/', selector: '.cp-home', keyword: 'custom merchandise for coaching institutes' },
  { path: '/about', selector: 'streamed-page', keyword: 'about CoachingPromo; merchandise supplier for institutes' },
  { path: '/contact', selector: 'streamed-page', keyword: 'CoachingPromo contact; promotional merchandise Delhi' },
  { path: '/offers', selector: '.offers-page', keyword: 'bulk promotional product offers' },
];
const result = { capturedAt: new Date().toISOString(), source: 'Next production HTML', pages: [] };
for (const item of pages) {
  const response = await fetch(`${base}${item.path}`, { signal: AbortSignal.timeout(10000) });
  if (!response.ok) throw new Error(`${item.path} returned ${response.status}`);
  const document = new JSDOM(await response.text()).window.document;
  const container = item.selector === 'streamed-page'
    ? document.querySelector('.page-banner')?.closest('div[id^="S:"]')
    : document.querySelector(item.selector);
  if (!container) throw new Error(`No content container for ${item.path}`);
  const blocks = [...container.querySelectorAll('h1,h2,h3,h4,p,li,blockquote,figcaption')]
    .filter(element => !element.closest('[aria-hidden="true"],nav,footer,script,style'))
    .map(element => element.textContent.replace(/\s+/g, ' ').trim())
    .filter(Boolean);
  const formFields = [...container.querySelectorAll('input[placeholder],textarea[placeholder]')]
    .map(element => element.getAttribute('placeholder')).filter(Boolean);
  result.pages.push({ path: item.path, primaryKeyword: item.keyword, blocks, formFields });
  console.log(`${item.path}: ${blocks.length} content blocks, ${formFields.length} form fields`);
}
await writeFile(path.join(root, 'seo', 'static-page-copy.json'), `${JSON.stringify(result, null, 2)}\n`);
