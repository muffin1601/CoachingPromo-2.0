import React from "react";
import { ArrowRight } from "lucide-react";
import "../styles/AboutUsSection.css";

const AboutUsSection = () => {
  return (
    <section className="about-short">
      <div className="about-container">
        <div className="about-text">
          <h2>About CoachingPromo</h2>
          <p>
            CoachingPromo helps institutes, coaching centers, and educational
            organizations strengthen their brand identity with high-quality
            promotional merchandise. From personalized apparel to branded
            accessories, we ensure thoughtful design, reliable quality, and
            timely delivery—helping you create lasting impressions.
          </p>
          <a href="/about" className="about-btn">
            Learn More <ArrowRight size={18} />
          </a>
        </div>

        <div className="about-image">
          <img
            src="/assets/about.webp"
            alt="Branded Merchandise for Institutes"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
