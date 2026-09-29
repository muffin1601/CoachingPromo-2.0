"use client";
import NextLink from 'next/link';
import { usePathname, useRouter, useParams as nextParams, useSearchParams as nextSearch } from 'next/navigation';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const StateContext = createContext(null);
export function NavigationState({ children }) {
  const [state, setState] = useState(null);
  const pathname = usePathname();
  useEffect(() => {
    try { setState(JSON.parse(sessionStorage.getItem(`cp-navigation:${pathname}`) || 'null')); }
    catch { setState(null); }
  }, [pathname]);
  return <StateContext.Provider value={{ state, setState }}>{children}</StateContext.Provider>;
}
const hrefFor = (to) => typeof to === 'string' ? to : `${to.pathname || ''}${to.search || ''}${to.hash || ''}`;
export function useNavigate() {
  const router = useRouter();
  const context = useContext(StateContext);
  return useCallback((to, options = {}) => {
    if (typeof to === 'number') { if (to < 0) router.back(); else router.forward(); return; }
    const href = hrefFor(to);
    if (options.state !== undefined) {
      context?.setState(options.state);
      sessionStorage.setItem(`cp-navigation:${href.split(/[?#]/)[0]}`, JSON.stringify(options.state));
    }
    router[options.replace ? 'replace' : 'push'](href);
  }, [router, context]);
}
export function useParams() {
  const params = nextParams() || {};
  return { ...params, categorySlug: params.category, subSlug: params.subcategory,
    prodSlug: params.product || params.slug, id: params.id || params.slug };
}
export function useLocation() {
  const pathname = usePathname();
  const query = nextSearch();
  const context = useContext(StateContext);
  return { pathname, search: query.size ? `?${query}` : '', state: context?.state || null };
}
export function useSearchParams() {
  const params = nextSearch();
  const router = useRouter();
  const pathname = usePathname();
  return [useMemo(() => new URLSearchParams(params.toString()), [params]),
    (value, options = {}) => router[options.replace ? 'replace' : 'push'](`${pathname}?${new URLSearchParams(value)}`)];
}
export function Link({ to, state, replace, onClick, children, ...props }) {
  const navigate = useNavigate();
  return <NextLink href={hrefFor(to)} replace={replace} {...props} onClick={(event) => {
    onClick?.(event);
    if (state !== undefined && !event.defaultPrevented && event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
      event.preventDefault(); navigate(to, { state, replace });
    }
  }}>{children}</NextLink>;
}
export function NavLink({ to, end, className, style, children, ...props }) {
  const pathname = usePathname();
  const isActive = end ? pathname === to : pathname === to || pathname.startsWith(`${to}/`);
  return <Link to={to} {...props} aria-current={isActive ? 'page' : undefined}
    className={typeof className === 'function' ? className({ isActive }) : `${className || ''}${isActive ? ' active' : ''}`}
    style={typeof style === 'function' ? style({ isActive }) : style}>
    {typeof children === 'function' ? children({ isActive }) : children}</Link>;
}
export function Navigate({ to, replace }) {
  const router = useRouter();
  useEffect(() => { router[replace ? 'replace' : 'push'](to); }, [router, to, replace]);
  return null;
}
