import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-wrapper">
      {/* ========== HERO ========== */}
      <div className="about-hero">
        
        <p>
          We are India’s trusted partner for customized promotional merchandise
          for coaching institutes, schools, colleges, and corporate training
          organizations.
        </p>
      </div>

      {/* ========== CONTENT GRID ========== */}
      <div className="about-content">
        <div className="about-left">
          <h2>Who We Are</h2>
          <p>
            CoachingPromo is dedicated to helping educational institutions and
            training organizations enhance branding through quality promotional
            merchandise. Whether you need customized gifts for students, faculty,
            events, or convocation branding, we deliver high-quality solutions
            crafted with creativity and precision.
          </p>

          <p>
            From personalized notebooks, welcome kits, apparel, and bags to
            premium awards and accessories — we ensure your brand message reaches
            the right audience in style. Our process is designed to be seamless,
            offering quick customization, affordable pricing, and nationwide
            delivery.
          </p>

          <div className="about-highlights">
            <div>
              <h3>10+ Years</h3>
              <p>Branding & Merchandise</p>
            </div>
            <div>
              <h3>500+ Institutes</h3>
              <p>Served Nationwide</p>
            </div>
            <div>
              <h3>10,000+</h3>
              <p>Customized Orders Delivered</p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-image-box">
            <img
              src="/assets/about.webp"
              alt="Institute Branding & Promotional Gifts"
            />
          </div>
        </div>
      </div>

      {/* ========== MISSION BLOCK ========== */}
      <div className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To empower educational organizations with meaningful, high-quality
          branded products that inspire students, strengthen identity, and boost
          institutional pride. We strive to simplify gifting and merchandising
          through efficiency, creativity, and innovation.
        </p>
      </div>

      {/* ========== TIMELINE STRIP ========== */}
      <div className="about-timeline">
        <div className="timeline-item">
          <h4>2015</h4>
          <p>Founded to provide creative branding solutions for institutes.</p>
        </div>
        <div className="timeline-item">
          <h4>2018</h4>
          <p>
            Expanded product lines to apparel, stationery & event gifting.
          </p>
        </div>
        <div className="timeline-item">
          <h4>2022</h4>
          <p>
            Served 500+ coaching centers, schools & universities across India.
          </p>
        </div>
        <div className="timeline-item">
          <h4>Today</h4>
          <p>
            Leading national provider of customized institute promotional
            merchandise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
