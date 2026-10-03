"use client";
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Hero from './Hero';
import Categories from './Categories';
import PageMeta from '@/react-source/components/PageMeta';
import TrustedClients from '@/react-source/components/TrustedClients';
import PopularSubcategories from '@/react-source/components/PopularSubcategories';
import WhyChooseUs from '@/react-source/components/WhyChooseUs';
import CustomizationExperience from '@/react-source/components/CustomizationExperience';
import AboutUsSection from '@/react-source/components/AboutUsSection';
import Testimonials from '@/react-source/components/Testimonials';
import Gallery from '@/react-source/components/Gallery';
import CatalogueCTA from '@/react-source/components/CatalogueCTA';
import BlogSection from '@/react-source/components/BlogSection';
import HomeFAQ from '@/react-source/components/HomeFAQ';
export default function Home() {
  return <div className="cp-home">
    <PageMeta title="Promotional Products for Coaching Institutes - CoachingPromo" description="Custom T-shirts, Bags, Stationery & Gifts for Coaching Institutes. Fast delivery, bulk orders & logo branding. Boost your Coaching brand today!" canonical={process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'} />
    <Hero />
    <TrustedClients />
    <Categories />
    <section className="cp-solutions"><div><p className="cp-kicker">PRODUCTS FOR YOUR TEAM</p><h2>Start with what you need to make.</h2><p>From daily-use merchandise to event-ready kits, explore a collection built for education brands and institutional teams.</p></div><div className="cp-solutions-links">{[
      ['APPAREL', 'Teacher jackets & staff uniforms', '/apparel-accessories/uniform-jackets'],
      ['T-SHIRTS', 'Coaching institute polo T-shirts', '/apparel-accessories/polo-t-shirts'],
      ['WINTER WEAR', 'Custom hoodies for institutes', '/custom-hoodies-for-coaching-institutes'],
      ['STUDENT KITS', 'Printed tote bags', '/bags/tote-bag'],
      ['ACADEMIC', 'Custom notebooks & registers', '/stationery/notebook'],
      ['CONVOCATION', 'Degree certificate folders', '/stationery/graduation-degree-folders'],
      ['PLANNING', 'Branded coaching diaries', '/promotional-items/diary-set'],
      ['ALL PRODUCTS', 'Browse promotional products', '/categories/promotional-items'],
    ].map(([label, title, href], index) => <Link href={href} key={href}><span>{String(index + 1).padStart(2, '0')} / {label}</span><strong>{title}</strong><ArrowUpRight /></Link>)}</div></section>
    <PopularSubcategories />
    <CustomizationExperience />
    <WhyChooseUs />
    <AboutUsSection />
    <Testimonials />
    <HomeFAQ />
    <Gallery />
    <CatalogueCTA />
    <BlogSection />
  </div>;
}
