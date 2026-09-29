"use client";
import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, ChevronDown, Menu, X, UserRound, Heart, ShoppingBag, Phone, GraduationCap } from 'lucide-react';
import categories from '@/react-source/data/categories';
import SearchBox from '@/react-source/components/SearchBox';
import UserProfileSidebar from '@/react-source/components/UserProfileSidebar';
import { useAuth } from '@/react-source/context/AuthContext';
import { useCart } from '@/react-source/context/CartContext';
const EnquiryModal = lazy(() => import('@/react-source/components/EnquiryModal'));
const RegisterInstituteModal = lazy(() => import('@/react-source/components/RegisterInstituteModal'));
export default function Header() {
  const pathname = usePathname();
  const { user } = useAuth();
  const { cartItems } = useCart();
  const [quote, setQuote] = useState(false);
  const [register, setRegister] = useState(false);
  const [profile, setProfile] = useState(false);
  const [menu, setMenu] = useState(false);
  const header = useRef(null);
  const dialog = useRef(null);
  const cartCount = cartItems.reduce((count, item) => count + Number(item.qty || 0), 0);
  useEffect(() => {
    header.current?.querySelectorAll('details[open]').forEach(detail => { detail.open = false; });
    setMenu(false);
  }, [pathname]);
  useEffect(() => {
    if (!menu) { dialog.current?.close(); return; }
    dialog.current?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = overflow; };
  }, [menu]);
  useEffect(() => {
    const closeMenus = event => {
      if (event.key === 'Escape' || (event.type === 'pointerdown' && !header.current?.contains(event.target))) {
        header.current?.querySelectorAll('details[open]').forEach(detail => { detail.open = false; });
      }
    };
    document.addEventListener('keydown', closeMenus);
    document.addEventListener('pointerdown', closeMenus);
    return () => { document.removeEventListener('keydown', closeMenus); document.removeEventListener('pointerdown', closeMenus); };
  }, []);
  // Keep the original visitor integration and deferred timing.
  useEffect(() => {
    const timer = setTimeout(() => {
      let id = localStorage.getItem('visitorId');
      if (!id) { id = window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`; localStorage.setItem('visitorId', id); }
      fetch(`${process.env.NEXT_PUBLIC_API_PATH || '/api'}/visitors/count?vid=${encodeURIComponent(id)}`, { keepalive: true }).catch(() => {});
    }, 15000);
    return () => clearTimeout(timer);
  }, []);
  const active = href => pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));
  return <>
    <a className="cp-skip" href="#main-content">Skip to content</a>
    <header className="cp-header" ref={header}>
      <div className="cp-announcement"><span>Bulk order support <i /> Custom branding assistance</span><a href="tel:+918750708222">Talk to sales: 87507 08222 <ArrowUpRight size={13} /></a></div>
      <div className="cp-mainbar">
        <Link href="/" className="cp-logo" aria-label="CoachingPromo home"><img src="/logo.webp" width="160" height="70" alt="Coaching Promo" /></Link>
        <div className="cp-desktop-search"><SearchBox /></div>
        <div className="cp-header-actions">
          <a className="cp-whatsapp" href="https://wa.me/918750708222" target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={14} /></a>
          {user ? <button className="cp-icon cp-account" aria-label="Open your profile" onClick={() => setProfile(true)}><UserRound size={21} /></button> : <Link className="cp-icon cp-account" href="/login" aria-label="Log in"><UserRound size={21} /></Link>}
          <Link className="cp-icon cp-favorites" href="/favorites" aria-label="Favorites"><Heart size={21} /></Link>
          <Link className="cp-icon" href="/cart" aria-label={`Shopping cart, ${cartCount} items`}><ShoppingBag size={21} />{cartCount > 0 && <span className="cp-cart-count">{cartCount}</span>}</Link>
          <button className="cp-button cp-header-quote" onClick={() => setQuote(true)}>Get Quote <ArrowUpRight size={17} /></button>
          <button className="cp-icon cp-menu-toggle" onClick={() => setMenu(true)} aria-label="Open navigation menu" aria-haspopup="dialog" aria-expanded={menu}><Menu size={25} /></button>
        </div>
      </div>
      <div className="cp-mobile-search"><SearchBox mobile /></div>
      <nav className="cp-navigation" aria-label="Main navigation">
        <Link href="/" aria-current={active('/') ? 'page' : undefined}>Home</Link>
        {categories.map(category => <details key={category.category} className="cp-nav-group" onToggle={event => { if (event.currentTarget.open) header.current?.querySelectorAll('details[open]').forEach(detail => { if (detail !== event.currentTarget) detail.open = false; }); }}>
          <summary>{category.category}<ChevronDown size={13} /></summary>
          <div className="cp-mega"><div className="cp-mega-intro"><p className="cp-kicker">EXPLORE THE COLLECTION</p><h2>{category.category}</h2><Link href={category.href}>View all products <ArrowUpRight size={17} /></Link></div><div className="cp-mega-links">{category.subcategories.map(group => <div key={group.name}><strong>{group.name}</strong>{group.products?.map(product => <Link href={product.href} key={product.href}>{product.name}<ArrowUpRight size={12} /></Link>)}</div>)}</div></div>
        </details>)}
        <Link href="/blogs" aria-current={active('/blogs') ? 'page' : undefined}>Blog</Link><Link href="/about" aria-current={active('/about') ? 'page' : undefined}>About Us</Link><Link href="/contact" aria-current={active('/contact') ? 'page' : undefined}>Contact Us</Link>
        <button className="cp-institute" onClick={() => setRegister(true)}><GraduationCap size={17} /> Register your institute</button>
      </nav>
    </header>
    <dialog ref={dialog} className="cp-mobile-dialog" onClose={() => setMenu(false)} onCancel={() => setMenu(false)} onClick={event => { if (event.target === event.currentTarget) setMenu(false); }}>
      <div className="cp-mobile-dialog-content"><div className="cp-mobile-dialog-top"><strong>Explore CoachingPromo</strong><button className="cp-icon" onClick={() => setMenu(false)} aria-label="Close navigation"><X /></button></div>
        <nav aria-label="Mobile navigation"><Link href="/" onClick={() => setMenu(false)}>Home</Link>{categories.map(category => <details key={category.category}><summary>{category.category}<ChevronDown size={16} /></summary><Link href={category.href} onClick={() => setMenu(false)}>View all {category.category}</Link>{category.subcategories.map(group => <div className="cp-mobile-category" key={group.name}><strong>{group.name}</strong>{group.products?.map(product => <Link key={product.href} href={product.href} onClick={() => setMenu(false)}>{product.name}</Link>)}</div>)}</details>)}{[['Blog', '/blogs'], ['About Us', '/about'], ['Contact Us', '/contact'], ['Favorites', '/favorites'], ['My account', user ? '/profile' : '/login']].map(([label, href]) => <Link href={href} key={href} onClick={() => setMenu(false)}>{label}</Link>)}</nav>
        <div className="cp-mobile-dialog-actions"><button className="cp-button" onClick={() => { setMenu(false); setQuote(true); }}>Get Quote <ArrowUpRight size={18} /></button><button className="cp-text-link" onClick={() => { setMenu(false); setRegister(true); }}>Register your institute</button><a href="tel:+918750708222"><Phone size={16} /> 87507 08222</a><a href="https://wa.me/918750708222" target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={16} /></a></div>
      </div>
    </dialog>
    <UserProfileSidebar isOpen={profile} onClose={() => setProfile(false)} />
    <Suspense fallback={null}>{quote && <EnquiryModal isOpen onClose={() => setQuote(false)} image="/assets/enquiry.webp" />}{register && <RegisterInstituteModal isOpen onClose={() => setRegister(false)} />}</Suspense>
  </>;
}
