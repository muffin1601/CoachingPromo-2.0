import React, { Suspense, lazy, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import HeroSection from "../components/HeroSection";
import PageMeta from "../components/PageMeta";
import "../styles/Home.css";

const TrustedClients = lazy(() => import("../components/TrustedClients"));
const FeaturedCategories = lazy(() => import("../components/FeaturedCategories"));
const PopularSubcategories = lazy(() => import("../components/PopularSubcategories"));
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));
const CustomizationExperience = lazy(() => import("../components/CustomizationExperience"));
const AboutUsSection = lazy(() => import("../components/AboutUsSection"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const Gallery = lazy(() => import("../components/Gallery"));
const CatalogueCTA = lazy(() => import("../components/CatalogueCTA"));
const BlogSection = lazy(() => import("../components/BlogSection"));
const HomeFAQ = lazy(() => import("../components/HomeFAQ"));

const Home = () => {
  const [showPrioritySections, setShowPrioritySections] = useState(true);
  const [showDeferredSections, setShowDeferredSections] = useState(true);

  useEffect(() => {
    let priorityTimeoutId;
    let deferredTimeoutId;
    const triggerEvents = ["pointerdown", "keydown", "touchstart", "scroll"];

    const removePriorityListeners = () => {
      triggerEvents.forEach((eventName) => {
        window.removeEventListener(eventName, showPriority);
      });
    };

    const removeDeferredListeners = () => {
      triggerEvents.forEach((eventName) => {
        window.removeEventListener(eventName, showSections);
      });
    };

    const showPriority = () => {
      setShowPrioritySections(true);
      removePriorityListeners();
      if (priorityTimeoutId) {
        window.clearTimeout(priorityTimeoutId);
      }
    };

    const showSections = () => {
      setShowDeferredSections(true);
      removeDeferredListeners();
      if (deferredTimeoutId) {
        window.clearTimeout(deferredTimeoutId);
      }
    };

    // Critical commercial content is immediately available without user interaction.
    showPriority();
    showSections();

    return () => {
      removePriorityListeners();
      removeDeferredListeners();
      if (priorityTimeoutId) {
        window.clearTimeout(priorityTimeoutId);
      }
      if (deferredTimeoutId) {
        window.clearTimeout(deferredTimeoutId);
      }
    };
  }, []);

  return (
    <div>
      <PageMeta
        title="Promotional Products for Coaching Institutes - CoachingPromo"
        description="Custom T-shirts, Bags, Stationery & Gifts for Coaching Institutes. Fast delivery, bulk orders & logo branding. Boost your Coaching brand today!"
        canonical={`${import.meta.env.VITE_FRONTEND_URL}`}
      />

      <HeroSection />
      <section className="home-solutions editorial-section">
        <div className="editorial-section-heading">
          <div><p className="editorial-eyebrow">PRODUCTS FOR YOUR TEAM</p><h2>Start with what you need to make.</h2></div>
          <p>From daily-use merchandise to event-ready kits, explore a collection built for education brands and institutional teams.</p>
        </div>
        <div className="home-solution-list">
          <Link to="/categories/apparel-accessories"><span>01 / APPAREL</span><strong>Team apparel & uniforms</strong><ArrowUpRight /></Link>
          <Link to="/categories/bags"><span>02 / BAGS</span><strong>Backpacks & carry goods</strong><ArrowUpRight /></Link>
          <Link to="/categories/stationery"><span>03 / STATIONERY</span><strong>Notebooks & office essentials</strong><ArrowUpRight /></Link>
          <Link to="/categories/promotional-items"><span>04 / GIFTS</span><strong>Promotional products & gifting</strong><ArrowUpRight /></Link>
        </div>
      </section>
      <div className={`home-priority-sections ${showPrioritySections ? "is-loaded" : ""}`}>
        {showPrioritySections && (
          <Suspense fallback={null}>
            <TrustedClients />
            <FeaturedCategories />
          </Suspense>
        )}
      </div>

      <div className={`home-deferred-sections ${showDeferredSections ? "is-loaded" : ""}`}>
        <section className="home-reserved-section home-reserved-popular">
          {showDeferredSections && (
            <Suspense fallback={null}>
              <PopularSubcategories />
            </Suspense>
          )}
        </section>

        <section className="home-reserved-section home-reserved-why">
          {showDeferredSections && (
            <Suspense fallback={null}>
              <WhyChooseUs />
            </Suspense>
          )}
        </section>

        <section className="home-reserved-section home-reserved-customize">
          {showDeferredSections && (
            <Suspense fallback={null}>
              <CustomizationExperience />
            </Suspense>
          )}
        </section>

        <section className="home-reserved-section home-reserved-about">
          {showDeferredSections && (
            <Suspense fallback={null}>
              <AboutUsSection />
            </Suspense>
          )}
        </section>

        <section className="home-reserved-section home-reserved-testimonials">
          {showDeferredSections && (
            <Suspense fallback={null}>
              <Testimonials />
            </Suspense>
          )}
        </section>

        <section className="home-reserved-section home-reserved-faq">
          {showDeferredSections && (
            <Suspense fallback={null}>
              <HomeFAQ />
            </Suspense>
          )}
        </section>

        <section className="home-reserved-section home-reserved-gallery">
          {showDeferredSections && (
            <Suspense fallback={null}>
              <Gallery />
            </Suspense>
          )}
        </section>

        <section className="home-reserved-section home-reserved-catalogue">
          {showDeferredSections && (
            <Suspense fallback={null}>
              <CatalogueCTA />
            </Suspense>
          )}
        </section>

        <section className="home-reserved-section home-reserved-blog">
          {showDeferredSections && (
            <Suspense fallback={null}>
              <BlogSection />
            </Suspense>
          )}
        </section>

      </div>
    </div>
  );
};

export default Home;
