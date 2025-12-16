import React, { lazy, Suspense } from "react";

/* Lazy-load heavy components */
const PageBanner = lazy(() => import("../components/PageBanner"));
const ContactUs = lazy(() => import("../components/ContactUs"));
const HiddenSEOContent = lazy(() => import("../components/HiddenSEOContent"));
import SEO from "../components/Category/SEO";

const ContactPage = () => {
  const canonicalURL = `https://coachingpromo.in/contact`;
  return (
    <>
    <SEO
        title="Contact CoachingPromo | Corporate & Custom Gifting Solutions"
        description="Get in touch with Printkee for corporate gifting, custom merchandise, bulk orders, and branding solutions. Our team is ready to assist you."
        keywords="contact printkee, corporate gifting contact, custom merchandise support, bulk gifting enquiry"
        canonical={canonicalURL}
      />
      {/* Lazy-loaded UI to reduce initial JS bundle */}
      <Suspense fallback={<div></div>}>

        <PageBanner
          title="Contact Us"
          background="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg"
          breadcrumb={[{ label: "Contact" }]}
        />

        <ContactUs />

        {/* SEO text (lazy is safe; content is static) */}
        <HiddenSEOContent />

      </Suspense>
    </>
  );
};

export default ContactPage;
