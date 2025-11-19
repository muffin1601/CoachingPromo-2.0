import React from "react";
import "../styles/HomeFAQ.css";

const HomeFAQ = () => {
  const faqs = [
    {
      q: "What types of custom merchandise do you provide for coaching institutes and schools?",
      a: "We offer a wide range of products including custom T-shirts, polo uniforms, student welcome kits, tote bags, notebooks, branded stationery, bottles, trophies, and promotional items. All products are tailored specifically for coaching institutes, schools, colleges, and educational centers across India."
    },
    {
      q: "Can I order custom T-shirts and uniforms with my coaching institute logo?",
      a: "Yes, you can fully customize round-neck T-shirts, polo T-shirts, hoodies, jackets, and staff uniforms with your institute logo, name, tagline, and colors. Our printing options include screen printing, DTF, embroidery, and premium digital printing."
    },
    {
      q: "Do you provide student welcome kits for coaching centers and colleges?",
      a: "Absolutely. We specialize in ready-to-use welcome kits that include notebooks, pens, ID cards, bags, bottles, folders, and branded merchandise. Kits can be tailored based on your budget, quantity, and institute branding requirements."
    },
    {
      q: "What is the minimum order quantity (MOQ) for custom products?",
      a: "We support low MOQs so coaching centers, small tuition classes, and individual academies can order without extra charges. For apparel, printing, and accessories, MOQs vary—but we always keep them institute-friendly."
    },
    {
      q: "Do you offer bulk order pricing for large coaching institutes or colleges?",
      a: "Yes. We provide attractive bulk discounts for high-volume orders from large coaching institutes, universities, and corporate training centers. The higher the quantity, the better the pricing and customization benefits."
    },
    {
      q: "How long does delivery take for custom merchandise?",
      a: "We offer fast Pan-India delivery. Most custom apparel, bags, and accessories are delivered within 5–12 working days depending on the quantity and printing method. Express delivery options are available for events and urgent orders."
    },
    {
      q: "Can your team help with design, branding, and customization?",
      a: "Yes. Our design experts assist with logo placement, color matching, text layout, and overall brand styling to ensure your merchandise looks professional and aligned with your institute identity."
    },
    {
      q: "Do you supply products to all states and cities in India?",
      a: "Yes, we serve coaching institutes, schools, and colleges across India—including metro cities, tier-2 cities, and local coaching hubs. We ship to all states with reliable logistics partners."
    }
  ];

  return (
    <section className="homefaq-wrapper">
      <h2 className="homefaq-title">Frequently Asked Questions</h2>
      <p className="homefaq-subtitle">
        Answers for coaching institutes, schools & colleges looking for custom merchandise and branding solutions.
      </p>

      <div className="faq-list">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{item.q}</h3>
            <p className="faq-answer">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeFAQ;
