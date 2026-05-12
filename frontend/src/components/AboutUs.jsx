import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <article className="about-wrapper">

      {/* ========== HERO SECTION ========== */}
      <header className="about-hero">
        <h1>About CoachingPromo – India’s Leading Institute Branding Partner</h1>
        <p>
          CoachingPromo is India’s most trusted provider of customized promotional
          merchandise for Coaching institutes, schools, colleges, universities, and
          corporate training organizations. We help institutions strengthen their
          identity with high-quality branded gifts, apparel, and event merchandise.
        </p>
      </header>

      {/* ========== MAIN CONTENT ========== */}
      <section className="about-content">
        <div className="about-left">
          <h2>Who We Are</h2>
          <p>
            For over a decade, CoachingPromo has been empowering educational and
            training organizations with premium promotional products that enhance
            visibility and brand value. From customized student kits to faculty gifts,
            event merchandise, welcome kits, convocation branding, and more — we
            offer complete end-to-end solutions.
          </p>

          <p>
            Our product range includes customized notebooks, t-shirts, hoodies,
            stationery, backpacks, awards, corporate gifts, orientation kits, and
            premium merchandise designed with precision. Every product is crafted to
            reflect your institution’s identity and deliver long-lasting impact.
          </p>

          <div className="about-highlights">
            <div>
              <h3>10+ Years</h3>
              <p>Experience in Branding & Merchandise</p>
            </div>
            <div>
              <h3>500+ Institutes</h3>
              <p>Served Across India</p>
            </div>
            <div>
              <h3>10,000+</h3>
              <p>Customized Orders Successfully Delivered</p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-image-box">
            <img
              src="/assets/about.webp"
              alt="Custom promotional merchandise and branding solutions for institutes"
              loading="lazy"
              decoding="async"
              width={600}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* ========== MISSION BLOCK ========== */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To simplify Institute branding with premium, meaningful, and high-quality
          promotional products that inspire students, create lasting impressions, and
          build institutional pride. We focus on creativity, innovation, and fast
          delivery—making merchandising easy and affordable for every organization.
        </p>
      </section>

      {/* ========== TIMELINE ========== */}
      <section className="about-timeline">

        <div className="timeline-item">
          <h4>2015</h4>
          <p>Began offering creative branding solutions for Coaching institutes.</p>
        </div>
        <div className="timeline-item">
          <h4>2018</h4>
          <p>Expanded into apparel, stationery, event gifting & onboarding kits.</p>
        </div>
        <div className="timeline-item">
          <h4>2022</h4>
          <p>Reached 500+ Coaching centers, colleges & universities across India.</p>
        </div>
        <div className="timeline-item">
          <h4>Today</h4>
          <p>
            Recognized as a leading national provider of custom institute
            merchandise, onboarding kits, event gifts, and branding accessories.
          </p>
        </div>
      </section>

      {/* ========== FAQ SECTION (SEO BOOSTER) ========== */}
      <section className="about-faq-1">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item-1">
          <h4>Do you provide customized merchandise for all types of institutes?</h4>
          <p>
            Yes, we work with Coaching centers, colleges, schools, universities, and training companies across India.
          </p>
        </div>

        <div className="faq-item-1">
          <h4>What products can be customized?</h4>
          <p>
            T-shirts, hoodies, bags, stationery, notebooks, bottles, welcome kits,
            awards, corporate gifts, and more.
          </p>
        </div>

        <div className="faq-item-1">
          <h4>Do you offer bulk discounts?</h4>
          <p>
            Yes, bulk orders receive tier-based discounts for institutions.
          </p>
        </div>

        {/* NEW FAQ #4 */}
        <div className="faq-item-1">
          <h4>What is the minimum order quantity (MOQ)?</h4>
          <p>
            Most products have an MOQ of 20–50 units, but it varies based on the item. Some items can be customized even in smaller quantities.
          </p>
        </div>

        {/* NEW FAQ #5 */}
        <div className="faq-item-1">
          <h4>How long does it take to deliver customized merchandise?</h4>
          <p>
            Standard delivery takes 5–12 working days depending on the product type,
            customization process, and your location.
          </p>
        </div>

        {/* NEW FAQ #6 */}
        <div className="faq-item-1">
          <h4>Can I see a sample before placing a bulk order?</h4>
          <p>
            Yes, we provide digital mockups and physical samples on request so you can
            approve the design before production.
          </p>
        </div>
      </section>

    </article>
  );
};

export default AboutUs;
