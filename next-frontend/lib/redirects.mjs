export const CANONICAL_HOST = 'www.coachingpromo.in';

const privateIndexPrefixes = [
  '/admin', '/api', '/account', '/cart', '/checkout', '/customize',
  '/favorites', '/forgot-password', '/login', '/profile', '/register',
  '/resetpassword', '/search', '/blogs/post',
];

const exactLegacyPaths = new Map([
  ['/account', '/profile'],
  ['/blog', '/blogs'],
  ['/tshirts', '/categories/apparel-accessories'],
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
  ['/promotional-items/graduation-honor-cards', '/promotional-items/other/graduation-honor-cards'],
  ['/__CANONICAL__', '/'],
  ['/blogs/__CANONICAL__', '/blogs'],
  ['/apparel-accessories/__CANONICAL__', '/categories/apparel-accessories'],
  ['/stationery/markers/__CANONICAL__', '/categories/stationery'],
]);

export function legacyRedirectPath(pathname) {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const exact = exactLegacyPaths.get(normalized);
  if (exact) return exact;

  // A legacy placeholder escaped into crawlable links at several hierarchy
  // depths. Consolidate every occurrence with its real parent URL.
  const canonicalPlaceholder = normalized.match(/^(.*)\/__CANONICAL__$/i);
  if (canonicalPlaceholder) {
    const parent = canonicalPlaceholder[1] || '/';
    if (['/apparel-accessories', '/bags', '/promotional-items', '/stationery'].includes(parent)) {
      return `/categories${parent}`;
    }
    return parent;
  }

  // Search Console found an old product link with a trailing "<". Browsers
  // percent-encode that character before middleware sees it, so handle both
  // representations and permanently consolidate it with the clean URL.
  const malformedSuffix = normalized.match(/^(.*?)(?:%3C|<)$/i);
  if (malformedSuffix?.[1]) return malformedSuffix[1];

  const oldBlog = normalized.match(/^\/blog\/(.+)$/);
  if (oldBlog) return `/blogs/${oldBlog[1]}`;

  const oldProduct = normalized.match(/^\/products\/([^/]+)$/);
  if (oldProduct) return `/product/${oldProduct[1]}`;

  return null;
}

export function isPrivateIndexPath(pathname) {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return privateIndexPrefixes.some(prefix => normalized === prefix || normalized.startsWith(`${prefix}/`));
}

export function canonicalRedirectUrl(requestUrl, destinationPath) {
  const source = new URL(requestUrl);
  const destination = new URL(destinationPath || source.pathname, `https://${CANONICAL_HOST}`);
  destination.search = source.search;
  return destination;
}

