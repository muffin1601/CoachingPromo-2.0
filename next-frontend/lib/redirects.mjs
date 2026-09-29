export const CANONICAL_HOST = 'www.coachingpromo.in';

const exactLegacyPaths = new Map([
  ['/account', '/profile'],
  ['/blog', '/blogs'],
  ['/tshirts', '/categories/apparel-accessories'],
  ['/apparel/graduation-gown', '/apparel-accessories/graduation-gown'],
  ['/apparel/polo-t-shirts', '/apparel-accessories/polo-t-shirts'],
  ['/__CANONICAL__', '/'],
  ['/blogs/__CANONICAL__', '/blogs'],
  ['/apparel-accessories/__CANONICAL__', '/categories/apparel-accessories'],
  ['/stationery/markers/__CANONICAL__', '/categories/stationery'],
]);

export function legacyRedirectPath(pathname) {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const exact = exactLegacyPaths.get(normalized);
  if (exact) return exact;

  const oldBlog = normalized.match(/^\/blog\/(.+)$/);
  if (oldBlog) return `/blogs/${oldBlog[1]}`;

  return null;
}

export function canonicalRedirectUrl(requestUrl, destinationPath) {
  const source = new URL(requestUrl);
  const destination = new URL(destinationPath || source.pathname, `https://${CANONICAL_HOST}`);
  destination.search = source.search;
  return destination;
}

