import React from "react";
import "./ProductFAQ.css";

const ProductFAQ = ({ productName, subcategoryName }) => {
  const faqs = [
    {
      q: `What makes these ${productName} suitable for Coaching institutes and colleges?`,
      a: `Our ${productName} are designed specifically for educational institutions. They offer high durability, professional branding, and comfort for daily classroom and campus use. Perfect for Coaching staff, students, university events, and academic branding.`,
    },
    {
      q: `Can we customize the ${productName} with our Institute logo or event details?`,
      a: `Yes, all ${subcategoryName} support full customization. You can add Institute logos, batch names, event branding, departments, or student personalization using high-quality print or embroidery.`,
    },
    {
      q: `Do you offer bulk pricing for large Institute orders?`,
      a: `Absolutely. CoachingPromo offers competitive bulk pricing for Coaching centers, colleges, universities, and training academies. The more you order, the better the price.`,
    },
    {
      q: `What is the delivery timeline for custom ${productName}?`,
      a: `Production and delivery typically take 5–12 days depending on order size and customization type. We also offer faster delivery options for urgent academic events, orientations, and campaigns.`,
    },
    {
      q: `Can we get a sample or design preview before finalizing the order?`,
      a: `Yes. We provide digital mockups and physical samples (on request) so institutes can check quality, printing style, and fabric before placing a bulk order.`,
    },
    {
      q: `Do you deliver custom ${subcategoryName} across India?`,
      a: `Yes, we deliver Pan-India, including major educational hubs like Delhi NCR, Kota, Pune, Hyderabad, Mumbai, Bengaluru, Jaipur, Indore, Lucknow, Ahmedabad and more.`,
    },
    {
      q: `Are the ${productName} comfortable for daily academic wear?`,
      a: `Yes. All our ${subcategoryName} are made from high-quality materials to ensure comfort during long study hours, lectures, events, and everyday academic use.`,
    },
  ];

  return (
    <section className="product-faq-section">
      <h2 className="product-faq-title">Frequently Asked Questions</h2>

      <div className="product-faq-list">
        {faqs.map((item, index) => (
          <details key={index} className="product-faq-item">
            <summary className="product-faq-question">{item.q}</summary>
            <p className="product-faq-answer">{item.a}</p>
          </details>
        ))}
      </div>
      <div className="cta-wrapper-8">
        <button className="cta-btn-blog-8" onClick={() => window.location.href = '/contact'}>
          Start Your Bulk Order – Contact Us
        </button>
      </div>
    </section>
  );
};

export default ProductFAQ;
