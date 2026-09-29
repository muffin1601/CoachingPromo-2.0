import { NextResponse } from 'next/server';
import { CANONICAL_HOST, canonicalRedirectUrl, isPrivateIndexPath, legacyRedirectPath } from './lib/redirects.mjs';

export function middleware(request) {
  const forwardedHost = request.headers.get('x-forwarded-host')?.split(',')[0].trim();
  const requestHost = forwardedHost || request.headers.get('host') || '';
  const hostname = requestHost.replace(/:\d+$/, '').replace(/\.$/, '').toLowerCase();
  const forwardedProto = request.headers.get('x-forwarded-proto')?.split(',')[0].trim().toLowerCase();
  const protocol = forwardedProto || request.nextUrl.protocol.replace(':', '').toLowerCase();
  const destinationPath = legacyRedirectPath(request.nextUrl.pathname);
  const needsCanonicalHost = hostname === 'coachingpromo.in';
  const isPublicHost = hostname === CANONICAL_HOST || needsCanonicalHost;
  const needsCanonicalProtocol = isPublicHost && protocol !== 'https';

  if (destinationPath || needsCanonicalHost || needsCanonicalProtocol) {
    const destination = canonicalRedirectUrl(request.url, destinationPath);
    return NextResponse.redirect(destination, 308);
  }

  const response = NextResponse.next();
  if (isPrivateIndexPath(request.nextUrl.pathname)) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }
  return response;
}
