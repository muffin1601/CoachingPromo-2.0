import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <article className="about-wrapper">

      {/* ========== HERO SECTION ========== */}
      <header className="about-hero">
        <h2>About CoachingPromo – Institute Merchandise and Branding Support</h2>
        <p>
          CoachingPromo helps Coaching institutes, schools, colleges, universities,
          and training organizations plan customized merchandise. The catalogue
          brings together apparel, student products, stationery, awards and event
          merchandise for institutional requirements.
        </p>
      </header>

      {/* ========== MAIN CONTENT ========== */}
      <section className="about-content">
        <div className="about-left">
          <h2>Who We Are</h2>
          <p>
            We support educational and training organizations with product selection,
            artwork planning and bulk-order quotations. From student kits and faculty
            apparel to event merchandise and convocation products, each requirement is
            specified around its audience, quantity, branding and schedule.
          </p>

          <p>
            Our product range includes customized notebooks, t-shirts, hoodies,
            stationery, backpacks, awards, corporate gifts, orientation kits, and
            merchandise. Available materials, branding methods and commercial terms
            are confirmed for the selected product before an order is approved.
          </p>

          <div className="about-highlights">
            <div>
              <h3>Product Planning</h3>
              <p>Options selected for the programme and recipient</p>
            </div>
            <div>
              <h3>Artwork Review</h3>
              <p>Logo placement and customization checked before production</p>
            </div>
            <div>
              <h3>Bulk Quotations</h3>
              <p>Current pricing and timelines based on the requirement</p>
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
          To make institutional merchandise easier to plan by connecting each product
          with a clear use, recipient and approved identity. We focus on practical
          specifications, accurate artwork and transparent quotation-stage decisions.
        </p>
      </section>

      {/* ========== TIMELINE ========== */}
      <section className="about-timeline">

        <div className="timeline-item">
          <h4>Plan</h4>
          <p>Define the programme, recipients, quantity, destination and required date.</p>
        </div>
        <div className="timeline-item">
          <h4>Specify</h4>
          <p>Select the product, material, size or format and suitable branding method.</p>
        </div>
        <div className="timeline-item">
          <h4>Approve</h4>
          <p>Review the quotation, artwork, product details and confirmed schedule.</p>
        </div>
        <div className="timeline-item">
          <h4>Produce</h4>
          <p>Proceed against the approved specification and agreed delivery plan.</p>
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
            Bulk pricing is quoted for the selected product, quantity, branding and delivery requirement.
          </p>
        </div>

        {/* NEW FAQ #4 */}
        <div className="faq-item-1">
          <h4>What is the minimum order quantity (MOQ)?</h4>
          <p>
            MOQ varies by product and customization. Contact us with the item and quantity so the current requirement can be confirmed.
          </p>
        </div>

        {/* NEW FAQ #5 */}
        <div className="faq-item-1">
          <h4>How long does it take to deliver customized merchandise?</h4>
          <p>
            Timing depends on the product, quantity, customization, approvals and destination.
            Share the required date so a realistic schedule can be confirmed before ordering.
          </p>
        </div>

        {/* NEW FAQ #6 */}
        <div className="faq-item-1">
          <h4>Can I see a sample before placing a bulk order?</h4>
          <p>
            Artwork approval and sample options vary by product and order size. Ask what
            can be arranged for the item you are considering before approving production.
          </p>
        </div>
      </section>

    </article>
  );
};

export default AboutUs;
