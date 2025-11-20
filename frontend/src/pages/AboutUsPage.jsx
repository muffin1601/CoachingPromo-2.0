import React from "react";
import PageBanner from "../components/PageBanner";
import AboutUs from "../components/AboutUs";
import Gallery from "../components/Gallery";
import CatalogueCTA from "../components/CatalogueCTA";
import CustomizationExperience from "../components/CustomizationExperience"; 
import { Helmet } from "react-helmet";
import HiddenSEOContent from "../components/HiddenSEOContent";

const AboutUsPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | CoachingPromo</title>
        <meta
          name="description"
          content="Learn about CoachingPromo – India's trusted supplier for custom T-shirts, bags, student kits, event merchandise and promotional products for coaching institutes, schools, colleges and universities."
        />
        <link rel="canonical" href="https://coachingpromo.in/about" />
      </Helmet>

      <PageBanner
        title="About Us"
        background="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg"
        breadcrumb={[
          { label: "About" },
        ]}
      />

      {/* ABOUT SECTION */}
      <AboutUs />

      {/* CUSTOMIZATION EXPERIENCE SECTION (Added here) */}
      <CustomizationExperience />

      {/* GALLERY */}
      <Gallery />

      {/* CTA */}
      <CatalogueCTA />
      <HiddenSEOContent />
    </>
  );
};

export default AboutUsPage;
