import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";
import "../styles/CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <span className="cta-eyebrow">Get In Touch</span>
          <h2 className="cta-title">Ready to Elevate Your Institute's Brand?</h2>
          <p className="cta-description">
            Join 500+ institutes that trust us for premium quality merchandise and custom branding. Get expert consultation and a personalized quote for your bulk requirements today.
          </p>
          
          <div className="cta-actions">
            <a href="https://wa.me/918800898643" target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-primary">
              <FaWhatsapp size={22} />
              Chat on WhatsApp
            </a>
            <a href="tel:+918800898643" className="cta-btn cta-btn-secondary">
              <Phone size={20} />
              +91 8800898643
            </a>
          </div>
        </div>
        
        <div className="cta-badges">
          <div className="cta-badge-item">
            <span className="badge-num">500+</span>
            <span className="badge-txt">Happy Institutes</span>
          </div>
          <div className="cta-badge-divider"></div>
          <div className="cta-badge-item">
            <span className="badge-num">100%</span>
            <span className="badge-txt">Quality Guarantee</span>
          </div>
          <div className="cta-badge-divider"></div>
          <div className="cta-badge-item">
            <span className="badge-num">7-10</span>
            <span className="badge-txt">Days Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
