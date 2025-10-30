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

const Home = () => {
  return (
    <div>
      
      <Helmet>
        <title>Corporate Gifting Solutions | Coaching Promo</title>
        <meta
          name="description"
          content="Discover premium corporate gifting solutions at Coaching Promo. Customize t-shirts, polos, caps, and more for employees, clients, and events with high-quality printing."
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
      <Gallery />
      <CatalogueCTA />
      <BlogSection />
    </div>
  );
};

export default Home;
