import React from "react";
import PageBanner from "../components/PageBanner";
// import { Contact } from "lucide-react";
import AboutUs from "../components/AboutUs";
import Gallery from "../components/Gallery";
import CatalogueCTA from "../components/CatalogueCTA";

const AboutUsPage = () => {
  return (
    <>
      <PageBanner
        title="About Us"
        background="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg"
        breadcrumb={[
          { label: "About" },
        ]}
      />

      <AboutUs />
      <Gallery />
      <CatalogueCTA />
    </>
  );
};

export default AboutUsPage;
