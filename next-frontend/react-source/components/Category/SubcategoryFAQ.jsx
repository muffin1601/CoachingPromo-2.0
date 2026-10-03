import React from "react";
import { subcategorySeoContent } from "../../../lib/seo-content";
import "./SubcategoryFAQ.css";

const SubcategoryFAQ = ({ subcategoryName, subSlug }) => {
  const defaultFaqs = [
    {
      q: `What types of ${subcategoryName} are available for institutes?`,
      a: `The options shown on this page are intended for institutes, schools, colleges and training centres. Branding availability depends on the selected product and material.`,
    },
    {
      q: `Can a logo be added to ${subcategoryName}?`,
      a: `Logo printing or another customization method may be available. Share the product link and artwork so the team can confirm a suitable process and print area.`,
    },
    {
      q: `Can ${subcategoryName} be ordered in bulk?`,
      a: `Yes. Share the required quantity and delivery city to receive current availability, pricing and order details.`,
    },
    {
      q: `How long does a customized order take?`,
      a: `Timing depends on quantity, stock, customization and destination. Confirm your required date before ordering so the team can provide a realistic schedule.`,
    },
    {
      q: `Can an approval or sample be arranged?`,
      a: `Approval and sample options vary by product and order size. Ask what can be arranged for the item you are considering.`,
    },
    {
      q: `Do you deliver ${subcategoryName} across India?`,
      a: `Delivery is arranged across India. Serviceability and the estimated schedule are confirmed for your destination with the quotation.`,
    },
  ];
  const faqs = subcategorySeoContent[subSlug]?.faqs || defaultFaqs;

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.q} className="faq-item">
            <summary className="faq-question">{faq.q}</summary>
            <p className="faq-answer">{faq.a}</p>
          </details>
        ))}
      </div>
      <div className="cta-wrapper-5">
        <button className="cta-btn-blog-5" onClick={() => { window.location.href = "/contact"; }}>
          Discuss a bulk order
        </button>
      </div>
    </section>
  );
};

export default SubcategoryFAQ;
