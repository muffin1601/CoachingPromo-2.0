"use client";
import { useState, lazy, Suspense } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Package, Palette, Truck, MessagesSquare } from 'lucide-react';
const EnquiryModal = lazy(() => import('@/react-source/components/EnquiryModal'));
export default function Hero() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return <>
    <section className="cp-hero">
      <div className="cp-hero-copy">
        <p className="cp-kicker"><span /> COACHINGPROMO · CORPORATE & INSTITUTE ORDERS</p>
        <h1>Branded merchandise,<br /><em>thoughtfully made</em><br />for education teams.</h1>
        <p className="cp-hero-description">Apparel, student kits, stationery and gifting with custom branding, bulk order support and delivery across India.</p>
        <div className="cp-actions"><button className="cp-button" onClick={() => setQuoteOpen(true)}>Discuss a bulk order <ArrowUpRight size={19} /></button><Link href="#collections" className="cp-text-link">Explore products <ArrowRight size={18} /></Link></div>
        <p className="cp-hero-note">Built around your quantity, branding and timeline</p>
      </div>
      <div className="cp-hero-gallery" aria-label="Explore custom merchandise">
        <Link className="cp-hero-tile cp-hero-apparel" href="/categories/apparel-accessories"><img src="/assets/category/apparel.webp" alt="Custom apparel for institutes, staff and students" width="257" height="257" loading="eager" fetchPriority="high" /><span><small>01 / APPAREL</small><strong>Your team. Your identity.</strong><ArrowUpRight /></span></Link>
        <Link className="cp-hero-tile cp-hero-bags" href="/categories/bags"><img src="/assets/category/bag.webp" alt="Custom logo bags for students and faculty" width="257" height="257" loading="eager" fetchPriority="high" /><span><small>02 / BAGS</small><strong>Made for everyday.</strong><ArrowUpRight /></span></Link>
        <div className="cp-hero-label"><Palette size={24} /><span>Custom merchandise<strong>Bulk orders · Pan-India delivery</strong></span></div>
        <Link className="cp-hero-tile cp-hero-gifts" href="/categories/promotional-items"><img src="/assets/category/promotional-items.webp" alt="Promotional products and branded gifting" width="257" height="257" loading="eager" fetchPriority="high" /><span><small>03 / GIFTS</small><strong>A lasting impression.</strong><ArrowUpRight /></span></Link>
      </div>
    </section>
    <div className="cp-capabilities">{[[Package, 'Bulk order support'], [Palette, 'Custom branding'], [MessagesSquare, 'Product guidance'], [Truck, 'Pan-India delivery']].map(([Icon, text]) => <div key={text}><Icon size={21} /><span>{text}</span></div>)}</div>
    <Suspense fallback={null}>{quoteOpen && <EnquiryModal isOpen onClose={() => setQuoteOpen(false)} image="/assets/enquiry.webp" />}</Suspense>
  </>;
}
