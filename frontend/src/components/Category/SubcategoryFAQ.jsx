import React from "react";
import "./SubcategoryFAQ.css";

const SubcategoryFAQ = ({ subcategoryName }) => {
  const faqs = [
    {
      q: `What types of ${subcategoryName} are available for coaching institutes and schools?`,
      a: `We offer a variety of ${subcategoryName} designed for coaching institutes, schools, colleges, and training centers. All products support custom printing, logo branding, and bulk ordering.`,
    },
    {
      q: `Do you provide logo printing and customization on all ${subcategoryName}?`,
      a: `Yes. We offer full customization on all ${subcategoryName} including logo printing, institute branding, student personalization, event printing, and corporate-style finishing.`,
    },
    {
      q: `Is bulk ordering available for ${subcategoryName}?`,
      a: `Absolutely. We specialize in bulk orders for educational organizations and offer competitive pricing, bulk discounts, and fast Pan-India delivery.`,
    },
    {
      q: `How long does it take to deliver customized ${subcategoryName}?`,
      a: `Production time depends on order size, but most customized ${subcategoryName} are delivered within 5–12 days across India. Express production is also available for urgent requirements.`,
    },
    {
      q: `Can I see a sample before placing a bulk order for ${subcategoryName}?`,
      a: `Yes. We provide digital mockups, live previews, and sample products upon request so institutes can review quality before finalizing bulk orders.`,
    },
    {
      q: `Are the ${subcategoryName} suitable for student welcome kits and events?`,
      a: `Yes. Many institutes use our ${subcategoryName} for student welcome kits, orientation events, annual functions, seminars, and staff branding.`,
    },
    {
      q: `Do you ship customized ${subcategoryName} across India?`,
      a: `Yes. We offer reliable Pan-India shipping to coaching institutes, schools, colleges, training organizations, and companies in every major city.`,
    },
  ];

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-list">
        {faqs.map((f, index) => (
          <details key={index} className="faq-item">
            <summary className="faq-question">{f.q}</summary>
            <p className="faq-answer">{f.a}</p>
          </details>
        ))}
      </div>
      <div className="cta-wrapper-5">
        <button className="cta-btn-blog-5" onClick={() => window.location.href = '/contact'}>
          Start Your Bulk Order – Contact Us
        </button>
      </div>
    </section>
  );
};

export default SubcategoryFAQ;
  