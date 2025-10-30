import React, { useRef } from "react";
import { Helmet } from "react-helmet";

import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedCategories from "../components/FeaturedCategories";


import QualitySection from "../components/QualitySection";
import SeoFooterText from "../components/SeoFooterText";
import Content from "../components/Content";
import TrustedClients from "../components/TrustedClients";
import PopularSubcategories from "../components/PopularSubcategories";
import CustomizationExperience from "../components/CustomizationExperience";
import AboutUsSection from "../components/AboutUsSection";

const Home = () => {
  return (
    <div>
      
      {/* <Helmet>
        <title>Corporate Gifting Solutions | Coaching Promo</title>
        <meta
          name="description"
          content="Discover premium corporate gifting solutions at Coaching Promo. Customize t-shirts, polos, caps, and more for employees, clients, and events with high-quality printing."
        />
        <link rel="canonical" href="https://coachingpromo.in/" />
      </Helmet> */}

      <HeroSection  />
      
       
      
        <TrustedClients />
      <FeaturedCategories />
      <PopularSubcategories />
      <WhyChooseUs />
      <CustomizationExperience />
      <AboutUsSection />
      <Content />
      <SeoFooterText />
    </div>
  );
};

export default Home;
