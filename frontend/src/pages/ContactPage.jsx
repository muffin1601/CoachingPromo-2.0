import React, { lazy, Suspense } from "react";

/* Lazy-load heavy components */
const PageBanner = lazy(() => import("../components/PageBanner"));
const ContactUs = lazy(() => import("../components/ContactUs"));
const HiddenSEOContent = lazy(() => import("../components/HiddenSEOContent"));

const ContactPage = () => {
  return (
    <>
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
