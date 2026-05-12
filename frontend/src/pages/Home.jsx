import React, { Suspense, lazy, useEffect, useState } from "react";

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
const HiddenSEOContent = lazy(() => import("../components/HiddenSEOContent"));

const canShowDesktopSections = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(min-width: 768px)").matches;

const Home = () => {
  const [showPrioritySections, setShowPrioritySections] = useState(canShowDesktopSections);
  const [showDeferredSections, setShowDeferredSections] = useState(false);

  useEffect(() => {
    let priorityTimeoutId;
    let deferredTimeoutId;
    const desktop = canShowDesktopSections();
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

    if (!desktop) {
      triggerEvents.forEach((eventName) => {
        window.addEventListener(eventName, showPriority, {
          passive: true,
          once: true,
        });
      });
      priorityTimeoutId = window.setTimeout(showPriority, 3500);
    }

    triggerEvents.forEach((eventName) => {
      window.addEventListener(eventName, showSections, {
        passive: true,
        once: true,
      });
    });
    deferredTimeoutId = window.setTimeout(showSections, 15000);

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
        canonical="https://coachingpromo.in/"
      />

      <HeroSection />
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

        {showDeferredSections && (
          <Suspense fallback={null}>
            <HiddenSEOContent />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Home;
