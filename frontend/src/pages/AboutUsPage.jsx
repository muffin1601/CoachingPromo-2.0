import React, { lazy, Suspense } from "react";
import PageBanner from "../components/PageBanner";
import { Helmet } from "react-helmet";

/*  Lazy-load heavy components */
const AboutUs = lazy(() => import("../components/AboutUs"));
const Gallery = lazy(() => import("../components/Gallery"));
const CatalogueCTA = lazy(() => import("../components/CatalogueCTA"));
const CustomizationExperience = lazy(() =>
  import("../components/CustomizationExperience")
);
const HiddenSEOContent = lazy(() =>
  import("../components/HiddenSEOContent")
);

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

      {/* Always keep banner non-lazy for SEO & CLS stability */}
      <PageBanner
        title="About Us"
        background="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg"
        breadcrumb={[{ label: "About" }]}
      />

      {/*  Lazy load all heavy components */}
      <Suspense fallback={null}>
        <AboutUs />

        {/* Custom T-Shirt Experience */}
        <CustomizationExperience />

        {/* Gallery */}
        <Gallery />

        {/* Catalogue CTA */}
        <CatalogueCTA />

        {/* Hidden SEO Content */}
        <HiddenSEOContent />
      </Suspense>
    </>
  );
};

export default AboutUsPage;
