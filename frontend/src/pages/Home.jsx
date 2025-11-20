import React, { useRef } from "react";
import { Helmet } from "react-helmet";

import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedCategories from "../components/FeaturedCategories";
import TrustedClients from "../components/TrustedClients";
import PopularSubcategories from "../components/PopularSubcategories";
import CustomizationExperience from "../components/CustomizationExperience";
import AboutUsSection from "../components/AboutUsSection";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import CatalogueCTA from "../components/CatalogueCTA";
import BlogSection from "../components/BlogSection";
import HomeFAQ from "../components/HomeFAQ";
import ExitIntentPopup from "../components/ExitIntentPopup";
import HiddenSEOContent from "../components/HiddenSEOContent";

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

      <HeroSection  />
      <TrustedClients />
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
    </div>
  );
};

export default Home;
