import React from "react";
import Link from "next/link";
import { subcategoryTitles } from "../../data/subcategories";
import { subcategorySeoContent } from "../../../lib/seo-content";
import "./DynamicSEOContent.css";

const DynamicSEOContent = ({ slug }) => {
  const title = subcategoryTitles[slug] || "Institute merchandise";
  const editorial = subcategorySeoContent[slug];

  if (editorial) {
    return (
      <section className="seo-dynamic-wrapper" aria-labelledby={`${slug}-guide-title`}>
        <h2 className="seo-dynamic-title" id={`${slug}-guide-title`}>{editorial.title}</h2>
        {editorial.intro.map((paragraph) => <p className="seo-dynamic-p" key={paragraph}>{paragraph}</p>)}
        {editorial.sections.map((section) => (
          <div className="seo-content-section" key={section.heading}>
            <h3 className="seo-dynamic-h3">{section.heading}</h3>
            {section.paragraphs.map((paragraph) => <p className="seo-dynamic-p" key={paragraph}>{paragraph}</p>)}
            {section.items && <ul className="seo-dynamic-ul">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
          </div>
        ))}
        <nav className="seo-related-links" aria-label={`Related links for ${title}`}>
          <strong>Related products and guidance</strong>
          {editorial.relatedLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
        </nav>
      </section>
    );
  }

  const productName = title.replace("Custom", "").replace("Premium", "").trim();
  return (
    <section className="seo-dynamic-wrapper">
      <h2 className="seo-dynamic-title">{title}</h2>
      <p className="seo-dynamic-p">
        Explore {productName.toLowerCase()} for coaching institutes, schools, colleges and education teams.
        Compare the listed products, then share your quantity, branding artwork and delivery location for
        an accurate recommendation and quotation.
      </p>
      <h3 className="seo-dynamic-h3">Planning an institute order</h3>
      <p className="seo-dynamic-p">
        Start with the intended use, approximate quantity and required date. Product material, size, print
        area and finishing can affect suitability and cost, so confirm the current specification before
        approving a bulk order.
      </p>
      <h3 className="seo-dynamic-h3">Branding options</h3>
      <p className="seo-dynamic-p">
        Depending on the selected product, {productName.toLowerCase()} can be configured with an institute
        logo, name, colours or event artwork. Available printing, embroidery and finishing methods vary by
        material; the team will confirm suitable options during quotation.
      </p>
      <h3 className="seo-dynamic-h3">Ordering and delivery</h3>
      <p className="seo-dynamic-p">
        Share the product link, quantity, branding file, delivery city and needed date. CoachingPromo will
        confirm availability, customization, pricing and the estimated production and delivery schedule.
      </p>
    </section>
  );
};

export default DynamicSEOContent;
