import { siteUrl, api } from '@/lib/api';
export const dynamic = 'force-dynamic';
// The backend already includes every active product, without catalogue pagination.
export default async function sitemap() {
  const response = await fetch(api('/sitemap.xml'), { next: { revalidate: 300 }, signal: AbortSignal.timeout(10000) });
  if (!response.ok) throw new Error('Backend sitemap is unavailable');
  const xml = await response.text();
  const unescape = value => value.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'");
  return [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].flatMap(([, entry]) => {
    const loc = entry.match(/<loc>(.*?)<\/loc>/)?.[1];
    if (!loc) return [];
    const url = new URL(unescape(loc));
    const lastModified = entry.match(/<lastmod>(.*?)<\/lastmod>/)?.[1];
    return [{ url: `${siteUrl}${url.pathname}`, ...(lastModified ? { lastModified } : {}) }];
  });
}
