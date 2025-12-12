import { BadgeCheck, Truck, ShieldCheck, Sparkles } from "lucide-react";
import "./WhyChooseUsCategory.css";

const WhyChooseUsCategory = ({ categoryName }) => {
  return (
    <section className="whycat-wrapper">
      <h2 className="whycat-heading">
        Why Choose Us for {categoryName}?
      </h2>

      <p className="whycat-description">
        At CoachingPromo, we specialize in delivering high-quality, fully customizable 
        <strong> {categoryName} </strong> products that help Coaching institutes, 
        schools, colleges, and training organizations strengthen their branding. 
        Here’s why thousands of institutions trust us.
      </p>

      <div className="whycat-grid">

        <div className="whycat-card">
          <BadgeCheck className="whycat-icon" size={36} />
          <h3>Premium Quality</h3>
          <p>
            We use top-grade materials and advanced printing technology to 
            ensure every {categoryName.toLowerCase()} product looks professional and lasts long.
          </p>
        </div>

        <div className="whycat-card">
          <Sparkles className="whycat-icon" size={36} />
          <h3>Custom Branding</h3>
          <p>
            Your Institute logos, colors, and themes are applied with precision 
            for perfect branding and memorable presentation.
          </p>
        </div>

        <div className="whycat-card">
          <Truck className="whycat-icon" size={36} />
          <h3>Fast Nationwide Delivery</h3>
          <p>
            We deliver customized {categoryName.toLowerCase()} products across India 
            with quick turnaround and reliable shipping.
          </p>
        </div>

        <div className="whycat-card">
          <ShieldCheck className="whycat-icon" size={36} />
          <h3>Trusted by 500+ Institutes</h3>
          <p>
            From Coaching centers to universities, institutions choose us for 
            reliable service, quality, and competitive pricing.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsCategory;
