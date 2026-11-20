import { siteUrl, api } from '@/lib/api';
import { hoodieGuides } from '@/lib/hoodie-guides';
import { seoPageEntries } from '@/lib/seo-pages';
import { collections } from '@/lib/collections';
export const dynamic = 'force-dynamic';
// The backend already includes every active product, without catalogue pagination.
export default async function sitemap() {
  let xml = '';
  try {
    const response = await fetch(api('/sitemap.xml'), { next: { revalidate: 300 }, signal: AbortSignal.timeout(10000) });
    if (response.ok) xml = await response.text();
  } catch { /* Static editorial URLs remain available if the catalogue API is temporarily offline. */ }
  const unescape = value => value.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'");
  const backendUrls = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].flatMap(([, entry]) => {
    const loc = entry.match(/<loc>(.*?)<\/loc>/)?.[1];
    if (!loc) return [];
    const url = new URL(unescape(loc));
    const lastModified = entry.match(/<lastmod>(.*?)<\/lastmod>/)?.[1];
    return [{ url: `${siteUrl}${url.pathname}`, ...(lastModified ? { lastModified } : {}) }];
  });
  const collectionUrls = Object.values(collections).map(collection => ({ url: `${siteUrl}${collection.path}`, changeFrequency: 'weekly', priority: 0.9 }));
  const editorialUrls = ['/custom-hoodies-for-coaching-institutes', ...hoodieGuides.map(post => `/blogs/${post.slug}`), ...seoPageEntries.map(page => page.path)]
    .map(path => ({ url: `${siteUrl}${path}`, lastModified: '2026-09-30', changeFrequency: 'monthly', priority: path.startsWith('/blogs/') ? 0.7 : 0.9 }));
  const seen = new Set();
  return [...collectionUrls, ...editorialUrls, ...backendUrls].filter(item => !seen.has(item.url) && seen.add(item.url));
}
