import React, { lazy, Suspense, useState } from "react";
import { ArrowRight, MessageSquareText } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/HeroSection.css";

const EnquiryModal = lazy(() => import("./EnquiryModal"));

const HeroSection = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <>
      <section className="hero-wrapper editorial-hero">
        <div className="editorial-hero-copy">
          <p className="editorial-eyebrow">COACHINGPROMO · CORPORATE & INSTITUTE ORDERS</p>
          <h1 className="hero-title">Branded merchandise, thoughtfully made for education teams.</h1>
          <p className="hero-subtext">
            Apparel, student kits, stationery and gifting with custom branding, bulk order support and delivery across India.
          </p>
          <div className="editorial-hero-actions">
            <button onClick={() => setIsEnquiryOpen(true)} className="btn-primary">
              Discuss a bulk order <ArrowRight size={17} />
            </button>
            <Link to="/categories/apparel-accessories" className="btn-outline">Explore products</Link>
          </div>
          <div className="editorial-hero-note"><span /> Built around your quantity, branding and timeline</div>
        </div>
        <div className="editorial-hero-image">
          <img src="/banners/banner-1-1360.webp" alt="Branded merchandise and promotional products for education teams" width="1360" height="544" fetchPriority="high" decoding="async" />
          <div className="editorial-image-caption"><span>Custom merchandise</span><span>Bulk orders · Pan-India delivery</span></div>
        </div>
      </section>
      <section className="capability-strip" aria-label="Ordering capabilities">
        <p><strong>01</strong> Bulk order support</p><p><strong>02</strong> Custom branding</p><p><strong>03</strong> Product guidance</p><p><strong>04</strong> Pan-India delivery</p>
      </section>
      <Suspense fallback={null}>
        {isEnquiryOpen && <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} image="/assets/enquiry.webp" />}
      </Suspense>
    </>
  );
};

export default HeroSection;
