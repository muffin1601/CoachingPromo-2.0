import React, { lazy, Suspense } from "react";

/* Lazy-load heavy components */
const PageBanner = lazy(() => import("../components/PageBanner"));
const ContactUs = lazy(() => import("../components/ContactUs"));
import SEO from "../components/Category/SEO";

const ContactPage = () => {
  const canonicalURL = `${(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")}/contact`;
  return (
    <>
    <SEO
        title="CoachingPromo | Corporate & Promotional Gifting Delhi "
        description="Get in touch with CoachingPromo for custom corporate gifts, promotional items, diaries, calendars & branding solutions in Delhi NCR. Call or WhatsApp now."
        keywords="corporate gifting contact, custom merchandise support, bulk gifting enquiry"
        canonical={canonicalURL}
      />
      {/* Lazy-loaded UI to reduce initial JS bundle */}
      <Suspense fallback={<div></div>}>

        <PageBanner
          title="Contact Us"
          background="/apparel.webp"
          breadcrumb={[{ label: "Contact" }]}
        />

        <ContactUs />


      </Suspense>
    </>
  );
};

export default ContactPage;
