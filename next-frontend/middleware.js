import { NextResponse } from 'next/server';
import { CANONICAL_HOST, canonicalRedirectUrl, legacyRedirectPath } from './lib/redirects.mjs';

export function middleware(request) {
  const forwardedHost = request.headers.get('x-forwarded-host')?.split(',')[0].trim();
  const requestHost = forwardedHost || request.headers.get('host') || '';
  const hostname = requestHost.replace(/:\d+$/, '').toLowerCase();
  const destinationPath = legacyRedirectPath(request.nextUrl.pathname);
  const needsCanonicalHost = hostname === 'coachingpromo.in';

  if (!destinationPath && !needsCanonicalHost) return NextResponse.next();

  const destination = canonicalRedirectUrl(request.url, destinationPath);
  return NextResponse.redirect(destination, 308);
}

