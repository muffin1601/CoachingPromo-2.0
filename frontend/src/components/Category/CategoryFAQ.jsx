import "./CategoryFAQ.css";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const CategoryFAQ = ({ categoryName }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: `What types of ${categoryName} products can be customized?`,
      a: `We offer customization for all types of ${categoryName.toLowerCase()} including logos, text, institute names, event branding, and color customization based on your requirements.`,
    },
    {
      q: `Do you have a minimum order quantity (MOQ) for ${categoryName}?`,
      a: `Yes, the MOQ varies depending on the product type, but most ${categoryName.toLowerCase()} items start from 20–50 units.`,
    },
    {
      q: `What is the delivery time for customized ${categoryName}?`,
      a: `Our standard production + delivery time is 5–12 working days depending on order size, printing method, and your location.`,
    },
    {
      q: `Can you provide a digital sample before printing ${categoryName}?`,
      a: `Absolutely! We share digital mockups for approval before starting production to ensure your branding looks perfect.`,
    },
    {
      q: `Do you offer bulk pricing for ${categoryName} orders?`,
      a: `Yes, we offer tier-based bulk pricing to help institutes, schools, and coaching centers save more on large orders.`,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="catfaq-wrapper">
      <h2 className="catfaq-heading">
        Frequently Asked Questions – {categoryName}
      </h2>

      <div className="catfaq-list">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`catfaq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="catfaq-question">
              <h4>{item.q}</h4>
              <ChevronDown className="catfaq-icon" />
            </div>

            <p className="catfaq-answer">{item.a}</p>
          </div>
        ))}
      </div>
      <div className="cta-wrapper">
        <button className="cta-btn-blog" onClick={() => window.location.href = '/contact'}>
          Start Your Bulk Order – Contact Us
        </button>
      </div>
    </section>
  );
};

export default CategoryFAQ;
