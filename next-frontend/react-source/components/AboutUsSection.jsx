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
            CoachingPromo is a dedicated merchandising partner for 
            <strong> Coaching Institutes, Schools, Colleges, and training centers across India</strong>. 
            We specialize in helping educational brands create professional identity and 
            long-lasting impressions through high-quality promotional products.
          </p>

          <p>
            From <strong>custom T-shirts, uniforms, student welcome kits, backpacks, 
            stationery, trophies, water bottles</strong> to complete Institute branding 
            solutions—our products are crafted to match the needs of modern 
            educational organizations. Every item we produce is designed to reflect 
            the values, culture, and credibility of your institute.
          </p>

          <p>
            With years of experience in serving top Coaching centers and academic 
            institutions, we ensure <strong>professional printing, durable materials, 
            premium finishing, and fast Pan-India delivery</strong>. Our team also 
            provides expert consultation to help institutes choose the right products 
            for admissions, seminars, student onboarding, staff uniforms, events, and 
            promotional campaigns.
          </p>


          <a href="/about" className="about-btn" title="About CoachingPromo">
            Learn More
            <span className="sr-only"> about CoachingPromo</span>
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="about-image">
          <img
            src="/assets/about.webp"
            alt="custom merchandise for Coaching institutes branded T shirts student welcome kits corporate gifting for schools colleges"
            loading="lazy"
            decoding="async"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
