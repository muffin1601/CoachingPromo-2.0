import React, { lazy, Suspense } from "react";

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
      <Suspense fallback={<div className="contact-page-loading" role="status">Loading contact options…</div>}>
        <main className="contact-page">
          <section className="contact-hero">
            <div className="contact-hero-copy">
              <p className="contact-eyebrow">Bulk merchandise enquiries</p>
              <h1>Let&apos;s create something your institute will be proud to use.</h1>
              <p className="contact-hero-intro">
                Tell us what you need, your quantity and your timeline. Our team will help with product selection,
                branding methods, pricing and Pan-India delivery.
              </p>
              <div className="contact-hero-actions" aria-label="Quick contact options">
                <a className="contact-primary-action" href="#contact-enquiry">Start an enquiry</a>
                <a className="contact-secondary-action" href="tel:+918750708222">Call +91 87507 08222</a>
              </div>
            </div>

            <aside className="contact-hero-panel" aria-label="What happens next">
              <p className="contact-panel-kicker">A straightforward process</p>
              <ol className="contact-process-list">
                <li><span>01</span><div><strong>Share your brief</strong><p>Product, quantity, logo and delivery city.</p></div></li>
                <li><span>02</span><div><strong>Review your options</strong><p>Suitable materials, branding and pricing.</p></div></li>
                <li><span>03</span><div><strong>Approve and produce</strong><p>Mockup confirmation followed by production.</p></div></li>
              </ol>
              <p className="contact-response-note">Typical response during business hours: within one working day.</p>
            </aside>
          </section>

          <ContactUs />
        </main>
      </Suspense>
    </>
  );
};

export default ContactPage;
