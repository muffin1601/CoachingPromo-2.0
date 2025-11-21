import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";

import HeroSection from "../components/HeroSection"; 
import TrustedClients from "../components/TrustedClients"; 

// Lazy-load heavy sections
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
const ExitIntentPopup = lazy(() => import("../components/ExitIntentPopup"));
const HiddenSEOContent = lazy(() => import("../components/HiddenSEOContent"));

// Fallback
const Loader = () => <div style={{ height: "60px" }}></div>;

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Promotional Products for Coaching Institutes – CoachingPromo</title>
        <meta
          name="description"
          content="Custom T-shirts, Bags, Stationery & Gifts for Coaching Institutes. Fast delivery, bulk orders & logo branding. Boost your coaching brand today!"
        />
        <link rel="canonical" href="https://coachingpromo.in/" />
      </Helmet>

      {/* 🚀 Only 2 components render immediately */}
      <HeroSection />
      <TrustedClients />

      <Suspense fallback={<Loader />}>
        <FeaturedCategories />
        <PopularSubcategories />
        <WhyChooseUs />
        <CustomizationExperience />
        <AboutUsSection />
        <Testimonials />
        <HomeFAQ />
        <Gallery />
        <CatalogueCTA />
        <BlogSection />
        <ExitIntentPopup />
        <HiddenSEOContent />
      </Suspense>
    </div>
  );
};

export default Home;
