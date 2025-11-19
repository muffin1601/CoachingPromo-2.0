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
            <strong>coaching institutes, schools, colleges, and training centers across India</strong>. 
            We specialize in helping educational brands create professional identity and 
            long-lasting impressions through high-quality promotional products.
          </p>

          <p>
            From <strong>custom T-shirts, polo uniforms, student welcome kits, backpacks, 
            stationery, trophies, water bottles</strong> to complete institute branding 
            solutions—our products are crafted to match the needs of modern 
            educational organizations. Every item we produce is designed to reflect 
            the values, culture, and credibility of your institute.
          </p>

          <p>
            With years of experience in serving top coaching centers and academic 
            institutions, we ensure <strong>professional printing, durable materials, 
            premium finishing, and fast Pan-India delivery</strong>. Our team also 
            provides expert consultation to help institutes choose the right products 
            for admissions, seminars, student onboarding, staff uniforms, events, and 
            promotional campaigns.
          </p>

          <p>
            Whether you're a small coaching class or a large educational network, 
            our mission is to make <strong>custom merchandise accessible, affordable, 
            and impactful</strong>. With our streamlined process, live product previews, 
            and custom design support, we make it easier than ever for institutes to 
            upgrade their branding.
          </p>

          <a href="/about" className="about-btn">
            Learn More <ArrowRight size={18} />
          </a>
        </div>

        <div className="about-image">
          <img
            src="/assets/about.webp"
            alt="custom merchandise for coaching institutes branded T shirts student welcome kits corporate gifting for schools colleges"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
