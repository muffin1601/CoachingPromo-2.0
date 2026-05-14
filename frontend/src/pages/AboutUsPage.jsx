import React, { lazy, Suspense } from "react";
import PageBanner from "../components/PageBanner";
import PageMeta from "../components/PageMeta";

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
      <PageMeta
        title="About Us | CoachingPromo"
        description="Learn about CoachingPromo - India's trusted supplier for custom T-shirts, bags, student kits, event merchandise and promotional products for Coaching institutes, schools, colleges and universities."
        canonical={`${import.meta.env.VITE_FRONTEND_URL}/about`}
      />

      <PageBanner
        title="About Us"
        background="/apparel.webp"
        breadcrumb={[{ label: "About" }]}
      />

      <Suspense fallback={null}>
        <AboutUs />
        <CustomizationExperience />
        <Gallery />
        <CatalogueCTA />
        <HiddenSEOContent />
      </Suspense>
    </>
  );
};

export default AboutUsPage;
