import fs from 'node:fs/promises';
import path from 'node:path';
import { seoPageEntries } from '../lib/seo-pages.js';

const root = process.cwd();
const sourcePath = path.join(root, 'coachingpromo_india_seo_keywords_master.csv');
const base = (process.env.SEO_TEST_BASE || 'http://127.0.0.1:3122').replace(/\/$/, '');

function parseCsv(text) {
  const rows = [];
  let row = [], value = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (quoted) {
      if (char === '"' && text[i + 1] === '"') { value += '"'; i++; }
      else if (char === '"') quoted = false;
      else value += char;
    } else if (char === '"') quoted = true;
    else if (char === ',') { row.push(value); value = ''; }
    else if (char === '\n') { row.push(value.replace(/\r$/, '')); rows.push(row); row = []; value = ''; }
    else value += char;
  }
  if (value || row.length) { row.push(value.replace(/\r$/, '')); rows.push(row); }
  const headers = rows.shift().map((header, index) => index === 0 ? header.replace(/^\uFEFF/, '') : header);
  return rows.filter(item => item.some(Boolean)).map(item => Object.fromEntries(headers.map((header, index) => [header, item[index] || ''])));
}

const csv = value => {
  const text = value == null ? '' : String(value);
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
};
const writeCsv = async (filename, columns, rows) => fs.writeFile(path.join(root, filename), [columns.join(','), ...rows.map(row => columns.map(column => csv(row[column])).join(','))].join('\r\n') + '\r\n');
const normalize = value => String(value).toLowerCase().replace(/customised/g, 'customized').replace(/centres/g, 'centers').replace(/t-shirts?/g, 't shirts').replace(/\s+/g, ' ').trim();

const owners = {
  '/': 'promotional products for coaching institutes',
  '/categories/bags': 'custom bags', '/categories/promotional-items': 'promotional products India', '/categories/stationery': 'custom stationery for institutes',
  '/apparel-accessories/round-neck-t-shirts': 'custom t shirts India', '/apparel-accessories/polo-t-shirts': 'custom polo t shirts India',
  '/custom-hoodies-for-coaching-institutes': 'custom hoodies for coaching institutes', '/apparel-accessories/uniform-jackets': 'teacher jackets',
  '/bags/institute-backpacks': 'custom backpacks India', '/bags/tote-bag': 'custom tote bags India', '/bags/jute-bag': 'custom jute bags India',
  '/stationery/notebook': 'custom notebooks India', '/stationery/notepad': 'custom notepads India', '/stationery/customized-pens': 'promotional pens India',
  '/promotional-items/diary-set': 'customized diaries India', '/promotional-items/planner': 'customized planners India',
  '/promotional-items/water-bottle': 'customized water bottles India', '/promotional-items/mug': 'promotional mugs India',
  '/promotional-items/trophy': 'customized trophies India', '/promotional-items/medals': 'custom medals India', '/promotional-items/badges': 'custom badges India',
  '/apparel-accessories/graduation-gown': 'graduation gowns India', '/apparel-accessories/graduation-stole': 'graduation stoles India', '/apparel-accessories/graduation-hat': 'graduation caps India',
  '/stationery/graduation-degree-folders': 'degree certificate folders', '/stationery/branding-files-and-folders': 'customized folders India', '/stationery/lanyard-and-id-card': 'custom lanyards and ID cards',
  '/stationery/table-calendar': 'customized calendars India',
  '/solutions/custom-merchandise-for-educational-institutions': 'custom merchandise for educational institutions',
  '/solutions/student-welcome-kits': 'student welcome kits', '/solutions/event-merchandise-for-educational-institutions': 'event merchandise for educational institutions',
  '/solutions/corporate-gifting-for-educational-institutions': 'corporate gifting for educational institutions', '/solutions/eco-friendly-promotional-products': 'eco friendly promotional products India',
  '/solutions/convocation-products': 'convocation products', '/industries/schools': 'school merchandise India', '/industries/colleges-universities': 'college merchandise India',
  '/industries/training-institutes': 'training institute merchandise',
  '/guides/promotional-product-planning-for-coaching-institutes': 'promotional product ideas for coaching institutes',
  '/guides/student-welcome-kit-checklist': 'what to include in student welcome kit', '/guides/college-merchandise-ideas': 'college merchandise ideas',
  '/guides/custom-t-shirt-printing-guide': 'custom t shirt printing methods', '/guides/notebook-printing-guide': 'spiral vs hardbound notebooks',
  '/guides/admission-and-orientation-merchandise-ideas': 'orientation gift ideas for colleges',
  '/guides/how-branded-merchandise-supports-institute-branding': 'how promotional products improve institute branding',
  '/guides/custom-merchandise-branding-methods': 'logo printing India',
  '/blogs/best-hoodies-for-coaching-institutes-in-winter': 'best hoodies for coaching institutes in winter',
  '/blogs/hoodie-printing-vs-embroidery-for-institute-logos': 'hoodie printing vs embroidery for institute logos',
  '/blogs/how-to-order-custom-hoodies-in-bulk': 'how to choose custom hoodies', '/blogs/best-gsm-for-winter-hoodies-in-india': 'best GSM for hoodies',
  '/blogs/how-much-do-custom-hoodies-cost-in-bulk': 'how much do custom hoodies cost in India',
};
const newPaths = new Set(seoPageEntries.map(page => page.path));

function inferProduct(keyword) {
  const k = normalize(keyword);
  if (/welcome kit|student kit|admission kit|orientation kit|training kit/.test(k)) return '/solutions/student-welcome-kits';
  if (/convocation/.test(k)) return '/solutions/convocation-products';
  if (/graduation folder|degree folder|certificate folder/.test(k)) return '/stationery/graduation-degree-folders';
  if (/graduation gown/.test(k)) return '/apparel-accessories/graduation-gown';
  if (/stole|sash/.test(k)) return '/apparel-accessories/graduation-stole';
  if (/graduation (cap|hat)/.test(k)) return '/apparel-accessories/graduation-hat';
  if (/hoodie|sweatshirt|winter wear|winter jacket|winter uniform/.test(k)) return '/custom-hoodies-for-coaching-institutes';
  if (/polo|collared t shirt/.test(k)) return '/apparel-accessories/polo-t-shirts';
  if (/t shirt|tshirt/.test(k)) return '/apparel-accessories/round-neck-t-shirts';
  if (/teacher jacket|staff uniform|uniform jacket|nehru jacket/.test(k)) return '/apparel-accessories/uniform-jackets';
  if (/backpack/.test(k)) return '/bags/institute-backpacks';
  if (/tote/.test(k)) return '/bags/tote-bag';
  if (/jute/.test(k)) return '/bags/jute-bag';
  if (/\bbag|bags\b/.test(k)) return '/categories/bags';
  if (/notepad/.test(k)) return '/stationery/notepad';
  if (/notebook/.test(k)) return '/stationery/notebook';
  if (/diar/.test(k)) return '/promotional-items/diary-set';
  if (/planner/.test(k)) return '/promotional-items/planner';
  if (/calendar/.test(k)) return '/stationery/table-calendar';
  if (/\bpen|pens\b/.test(k)) return '/stationery/customized-pens';
  if (/water bottle|\bbottle|sipper/.test(k)) return '/promotional-items/water-bottle';
  if (/\bmug/.test(k)) return '/promotional-items/mug';
  if (/\bmedal/.test(k)) return '/promotional-items/medals';
  if (/\bbadge/.test(k)) return '/promotional-items/badges';
  if (/troph|\baward/.test(k)) return '/promotional-items/trophy';
  if (/lanyard|id card|student id/.test(k)) return '/stationery/lanyard-and-id-card';
  if (/\bfolder|\bfile/.test(k)) return '/stationery/branding-files-and-folders';
  if (/event|fest|seminar|workshop/.test(k)) return '/solutions/event-merchandise-for-educational-institutions';
  if (/gift/.test(k)) return '/solutions/corporate-gifting-for-educational-institutions';
  if (/eco friendly|sustainable|recycled|reusable/.test(k)) return '/solutions/eco-friendly-promotional-products';
  return '/';
}

function informationalTarget(keyword) {
  const k = normalize(keyword);
  if (/hoodie printing vs embroidery/.test(k)) return '/blogs/hoodie-printing-vs-embroidery-for-institute-logos';
  if (/best gsm|250 gsm|300 gsm/.test(k)) return '/blogs/best-gsm-for-winter-hoodies-in-india';
  if (/hoodie.*cost|cost.*hoodie/.test(k)) return '/blogs/how-much-do-custom-hoodies-cost-in-bulk';
  if (/hoodie/.test(k)) return '/blogs/best-hoodies-for-coaching-institutes-in-winter';
  if (/welcome kit/.test(k)) return '/guides/student-welcome-kit-checklist';
  if (/college merchandise|college fest|branded merchandise ideas for colleges/.test(k)) return '/guides/college-merchandise-ideas';
  if (/t shirt|polo.*round neck|fabric/.test(k)) return '/guides/custom-t-shirt-printing-guide';
  if (/notebook|spiral|hardbound/.test(k)) return '/guides/notebook-printing-guide';
  if (/admission|orientation|seminar|educational event/.test(k)) return '/guides/admission-and-orientation-merchandise-ideas';
  if (/benefits|improve institute branding/.test(k)) return '/guides/how-branded-merchandise-supports-institute-branding';
  return '/guides/promotional-product-planning-for-coaching-institutes';
}

function targetFor(row) {
  const cluster = row.Cluster, k = normalize(row.Keyword);
  if (cluster === 'Location Modifiers' || cluster === 'Transactional Modifiers' || cluster === 'Supplier Modifiers') return '/';
  if (cluster === 'Blog / Informational') return informationalTarget(k);
  if (cluster === 'Printing / Branding Process') return '/guides/custom-merchandise-branding-methods';
  if (cluster === 'Eco-Friendly / Sustainable') return '/solutions/eco-friendly-promotional-products';
  if (cluster === 'School Focused') return '/industries/schools';
  if (cluster === 'College / University Focused') return '/industries/colleges-universities';
  if (cluster === 'Training Centres / Academies') return '/industries/training-institutes';
  if (cluster === 'Student Welcome Kits' || cluster === 'Admissions / Marketing') return '/solutions/student-welcome-kits';
  if (cluster === 'Event Merchandise') return '/solutions/event-merchandise-for-educational-institutions';
  if (cluster === 'Corporate / Educational Gifting') return '/solutions/corporate-gifting-for-educational-institutions';
  if (cluster === 'Custom T-Shirts') return '/apparel-accessories/round-neck-t-shirts';
  if (cluster === 'Polo T-Shirts') return '/apparel-accessories/polo-t-shirts';
  if (cluster === 'Hoodies / Sweatshirts / Winter Wear' || cluster === 'Seasonal - Winter') return '/custom-hoodies-for-coaching-institutes';
  if (cluster === 'Teacher Jackets / Staff Uniforms') return '/apparel-accessories/uniform-jackets';
  if (cluster === 'Backpacks / Bags') return inferProduct(k);
  if (cluster === 'Tote / Jute Bags') return inferProduct(k);
  if (cluster === 'Notebooks') return '/stationery/notebook';
  if (cluster === 'Notepads') return '/stationery/notepad';
  if (cluster === 'Diaries') return '/promotional-items/diary-set';
  if (cluster === 'Planners') return '/promotional-items/planner';
  if (cluster === 'Pens') return '/stationery/customized-pens';
  if (cluster === 'Bottles / Drinkware') return '/promotional-items/water-bottle';
  if (cluster === 'Mugs') return '/promotional-items/mug';
  if (cluster === 'Trophies / Awards / Medals' || cluster === 'Graduation / Convocation' || cluster === 'Files / Folders' || cluster === 'ID Cards / Lanyards') return inferProduct(k);
  if (cluster === 'Seasonal - Admissions') return '/solutions/student-welcome-kits';
  if (cluster === 'Seasonal - Graduation') return inferProduct(k);
  if (cluster === 'Seasonal - Teachers Day') return '/solutions/corporate-gifting-for-educational-institutions';
  if (cluster === 'Seasonal - New Year') return inferProduct(k);
  if (cluster === 'Core / Money Keywords') {
    if (/school/.test(k)) return '/industries/schools';
    if (/college|universit/.test(k)) return '/industries/colleges-universities';
    if (/gift/.test(k)) return '/solutions/corporate-gifting-for-educational-institutions';
    if (/educational institution|educational institute merchandise/.test(k)) return '/solutions/custom-merchandise-for-educational-institutions';
    return '/';
  }
  if (cluster === 'Coaching Institute Specific' || cluster === 'Price / Transactional' || cluster === 'Supplier / Manufacturer / Wholesaler' || cluster === 'Hindi / Mixed-Language Search' || cluster === 'Location - India / Delhi NCR / Major Cities' || cluster === 'Near Me') return inferProduct(k);
  return inferProduct(k);
}

const locations = ['Greater Noida','New Delhi','Delhi NCR','Gurugram','Gurgaon','Ghaziabad','Faridabad','Noida','Delhi','Kota','Jaipur','Lucknow','Kanpur','Prayagraj','Varanasi','Patna','Ranchi','Indore','Bhopal','Pune','Mumbai','Nagpur','Ahmedabad','Surat','Vadodara','Bengaluru','Bangalore','Hyderabad','Chennai','Kolkata','Chandigarh','Ludhiana','Dehradun','Guwahati','Pan India','India'];
const locationOf = keyword => locations.find(location => normalize(keyword).includes(normalize(location))) || '';

const sourceRows = parseCsv(await fs.readFile(sourcePath, 'utf8'));
const keywordRows = sourceRows.map(row => {
  const target = targetFor(row);
  const primary = owners[target] || row.Keyword;
  const modifier = ['Location Modifiers','Transactional Modifiers','Supplier Modifiers','Near Me'].includes(row.Cluster);
  const geoComposite = row.Cluster === 'Location - India / Delhi NCR / Major Cities';
  const isPrimary = normalize(row.Keyword) === normalize(primary);
  const spellingVariant = !isPrimary && normalize(row.Keyword).replace(/\b(customized|centers)\b/g, '') === normalize(primary).replace(/\b(customized|centers)\b/g, '');
  let disposition = isPrimary ? `${newPaths.has(target) ? 'New commercial landing page' : 'Existing page — primary keyword'}` : `${newPaths.has(target) ? (target.startsWith('/industries/') ? 'New industry/audience page' : target.startsWith('/guides/') ? 'New blog/guide' : 'New commercial landing page') : 'Existing page — secondary keyword'}`;
  let implementation = newPaths.has(target) ? 'Implemented — new authoritative page' : 'Implemented — mapped to existing canonical page';
  let notes = `Consolidated with ${primary}; no separate page required.`;
  if (modifier) { disposition = 'Intent modifier only — no independent page'; implementation = 'Mapped — no independent page'; notes = row.Cluster === 'Near Me' ? 'Local-intent variant mapped to the relevant canonical page; no static near-me doorway page.' : 'Modifier is applied contextually only when factual; it does not own a URL.'; }
  else if (geoComposite) { disposition = 'Deferred because creating a page would cause cannibalization/thin content'; implementation = 'Mapped — regional modifier, no city doorway page'; notes = 'Mapped to the relevant product or solution owner. A city page requires differentiated local evidence and demand.'; }
  else if (spellingVariant) disposition = 'Consolidated into another canonical keyword cluster';
  else if (!isPrimary && row.Intent.includes('Informational') && target.startsWith('/guides/')) disposition = 'New blog/guide';
  return {
    Keyword: row.Keyword, 'Original Cluster': row.Cluster, Intent: row.Intent, Priority: row.Priority,
    'Final Keyword Cluster': primary, 'Primary Keyword': primary, 'Secondary Keyword': isPrimary ? '' : row.Keyword,
    'Target URL': `https://www.coachingpromo.in${target === '/' ? '/' : target}`,
    'Existing or New': newPaths.has(target) ? 'New' : 'Existing', 'Page Type': target.startsWith('/guides/') || target.startsWith('/blogs/') ? 'Guide / article' : target.startsWith('/industries/') ? 'Industry / audience page' : target.startsWith('/solutions/') ? 'Commercial solution page' : target === '/' ? 'Homepage' : 'Category / subcategory page',
    'Current Status': disposition, 'Implementation Status': implementation, 'Canonical Owner': `https://www.coachingpromo.in${target === '/' ? '/' : target}`,
    'Cannibalization Risk': modifier || geoComposite ? 'Medium if split into standalone pages; controlled by consolidation' : 'Low after consolidation', Location: locationOf(row.Keyword), Notes: notes,
  };
});

await writeCsv('COACHINGPROMO_KEYWORD_MAP.csv', ['Keyword','Original Cluster','Intent','Priority','Final Keyword Cluster','Primary Keyword','Secondary Keyword','Target URL','Existing or New','Page Type','Current Status','Implementation Status','Canonical Owner','Cannibalization Risk','Location','Notes'], keywordRows);

const gaps = [...new Map(keywordRows.map(row => [row['Canonical Owner'], row])).values()].map(row => {
  const supporting = keywordRows.filter(item => item['Canonical Owner'] === row['Canonical Owner'] && item.Keyword !== row['Primary Keyword']).map(item => item.Keyword);
  const implemented = row['Existing or New'] === 'New';
  return {
    'Keyword Cluster': row['Primary Keyword'], 'Search Intent': row.Intent, Priority: row.Priority,
    'Current URL': implemented ? '' : row['Canonical Owner'], Gap: implemented ? 'No distinct authoritative page existed for this intent.' : 'Existing page retained as canonical owner.',
    'Recommended Action': implemented ? 'Publish the implemented authoritative page and monitor query/page performance.' : 'Maintain and improve the existing canonical page with verified product facts.',
    'Proposed URL': row['Canonical Owner'], 'Supporting Keywords': supporting.join(' | '), Risk: row['Cannibalization Risk'], 'Implementation Status': row['Implementation Status'],
  };
});
await writeCsv('COACHINGPROMO_CONTENT_GAPS.csv', ['Keyword Cluster','Search Intent','Priority','Current URL','Gap','Recommended Action','Proposed URL','Supporting Keywords','Risk','Implementation Status'], gaps);

const internalRows = [
  ...seoPageEntries.flatMap(page => page.links.map(([target, anchor]) => ({ 'Source URL': `https://www.coachingpromo.in${page.path}`, 'Target URL': `https://www.coachingpromo.in${target}`, 'Anchor Text': anchor, Context: 'Contextual related-product or planning link', Status: 'Implemented' }))),
  ...seoPageEntries.map(page => ({ 'Source URL': 'https://www.coachingpromo.in/', 'Target URL': `https://www.coachingpromo.in${page.path}`, 'Anchor Text': page.title, Context: 'Homepage programme/audience discovery (selected priority pages) or sitemap discovery', Status: ['solution','industry'].includes(page.type) ? 'Implemented on homepage for priority page' : 'Implemented through contextual hubs' })),
];
await writeCsv('COACHINGPROMO_INTERNAL_LINK_MAP.csv', ['Source URL','Target URL','Anchor Text','Context','Status'], internalRows);

function textOnly(html) { return html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim(); }
function capture(html, regex) { return html.match(regex)?.[1]?.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() || ''; }
function attr(html, tag, name, value, attrName = 'content') { const tagText = html.match(new RegExp(`<${tag}[^>]*${name}=["']${value}["'][^>]*>`, 'i'))?.[0] || ''; return tagText.match(new RegExp(`${attrName}=["']([^"']*)["']`, 'i'))?.[1] || ''; }

let inventory = [];
try {
  const sitemapResponse = await fetch(`${base}/sitemap.xml`);
  const sitemap = await sitemapResponse.text();
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1].replaceAll('&amp;', '&'));
  const records = [];
  for (let index = 0; index < urls.length; index += 8) {
    const batch = urls.slice(index, index + 8);
    records.push(...await Promise.all(batch.map(async url => {
      const pathname = new URL(url).pathname;
      try {
        const response = await fetch(`${base}${pathname}`, { redirect: 'manual' });
        const html = await response.text();
        const canonical = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)/i)?.[1] || html.match(/<link[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical/i)?.[1] || '';
        const links = [...html.matchAll(/<a[^>]*href=["']([^"'#]+)["']/gi)].map(match => match[1]);
        const pathnameLinks = new Set(links.filter(link => link.startsWith('/')).map(link => link.split('?')[0]));
        const schemas = [...html.matchAll(/"@type":"([^"]+)"/g)].map(match => match[1]);
        return { url, pathname, status: response.status, html, canonical, links: pathnameLinks, schemas };
      } catch (error) { return { url, pathname, status: 0, html: '', canonical: '', links: new Set(), schemas: [], error: error.message }; }
    })));
  }
  const inlinks = new Map(records.map(record => [record.pathname, 0]));
  for (const record of records) for (const link of record.links) if (inlinks.has(link)) inlinks.set(link, inlinks.get(link) + 1);
  inventory = records.map(record => {
    const owner = Object.entries(owners).find(([target]) => target === record.pathname)?.[1] || '';
    const h1s = [...record.html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(match => textOnly(match[1]));
    const title = capture(record.html, /<title[^>]*>([\s\S]*?)<\/title>/i);
    const description = attr(record.html, 'meta', 'name', 'description');
    const bodyText = textOnly(record.html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || '');
    const pageType = record.pathname === '/' ? 'Homepage' : record.pathname.startsWith('/categories/') ? 'Category' : /^\/[^/]+\/[^/]+\/[^/]+/.test(record.pathname) ? 'Product' : record.pathname.startsWith('/blogs/') || record.pathname.startsWith('/guides/') ? 'Article / guide' : record.pathname.startsWith('/solutions/') ? 'Commercial solution page' : record.pathname.startsWith('/industries/') ? 'Industry / audience page' : /^\/[^/]+\/[^/]+/.test(record.pathname) ? 'Subcategory' : 'Static page';
    const indexable = record.status === 200 && !/name=["']robots["'][^>]*noindex/i.test(record.html) && Boolean(record.canonical);
    return { URL: record.url, 'Page Type': pageType, Status: record.status, Indexable: indexable ? 'Yes' : 'No', Canonical: record.canonical, 'Primary Keyword': owner, 'Secondary Keywords': keywordRows.filter(row => new URL(row['Canonical Owner']).pathname === record.pathname && row.Keyword !== owner).slice(0, 12).map(row => row.Keyword).join(' | '), Title: title, H1: h1s.join(' | '), 'Meta Description': description, Schema: [...new Set(record.schemas)].join(' | '), Sitemap: 'Yes', 'Word Count': bodyText ? bodyText.split(/\s+/).length : 0, 'Internal Inlinks': inlinks.get(record.pathname) || 0, 'Internal Outlinks': record.links.size, 'Quality Score': record.status !== 200 ? 0 : !indexable ? 2 : title && h1s.length === 1 && description && record.canonical ? 5 : 3, 'Cannibalization Risk': owner ? 'Low — assigned canonical owner' : 'Review if impressions overlap another product page', Action: record.status !== 200 ? 'Remove from sitemap or repair' : h1s.length !== 1 ? 'Review H1 structure' : description ? 'Maintain and monitor' : 'Add unique meta description' };
  });
  await writeCsv('COACHINGPROMO_SEO_URL_INVENTORY.csv', ['URL','Page Type','Status','Indexable','Canonical','Primary Keyword','Secondary Keywords','Title','H1','Meta Description','Schema','Sitemap','Word Count','Internal Inlinks','Internal Outlinks','Quality Score','Cannibalization Risk','Action'], inventory);
} catch (error) {
  console.warn(`Inventory crawl skipped: ${error.message}`);
}

const uniqueKeywords = new Set(sourceRows.map(row => row.Keyword));
const mappedKeywords = new Set(keywordRows.map(row => row.Keyword));
const missing = [...uniqueKeywords].filter(keyword => !mappedKeywords.has(keyword));
console.log(`Source keyword rows: ${sourceRows.length}`);
console.log(`Mapped keyword rows: ${keywordRows.length}`);
console.log(`Unmapped keywords: ${missing.length}`);
console.log(`Unique source keywords: ${uniqueKeywords.size}`);
console.log(`Inventory URLs: ${inventory.length}`);
if (sourceRows.length !== keywordRows.length || missing.length) process.exitCode = 1;
