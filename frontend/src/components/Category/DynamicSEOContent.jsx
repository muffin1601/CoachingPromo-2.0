import React from "react";
import { subcategoryTitles } from "../../data/subcategories";
import { subcategoryKeywords } from "../../data/subcategoryKeywords";
import "./DynamicSEOContent.css";

const DynamicSEOContent = ({ slug }) => {
  const title = subcategoryTitles[slug] || "";
  const keywords = subcategoryKeywords[slug] || [];

  const productName = title.replace("Custom", "").replace("Premium", "");

  return (
    <section className="seo-dynamic-wrapper">
      <h2 className="seo-dynamic-title">{title}</h2>

      {/* INTRO */}
      <p className="seo-dynamic-p">
        {productName} are one of the most popular branding choices for{" "}<mark>coaching institutes</mark>,{" "}
        <mark>colleges</mark>, and{" "} <mark>universities</mark> across India. They help strengthen your
        institute’s identity and provide a professional, trustworthy look to
        students, staff, and faculty members.
      </p>

      {/* WHY SECTION */}
      <h3 className="seo-dynamic-h3">Why Institutes Need {productName}</h3>
      <p className="seo-dynamic-p">
        In today's competitive education industry, institutes must maintain a
        strong, recognizable presence. {productName} offer a practical and
        effective way to build consistency across campuses. They enhance brand
        recall during seminars, admissions, events, exams, and daily academic
        use. Parents and students perceive institutes with unified identity as
        more organized and credible.
      </p>

      {/* CUSTOMIZATION */}
      <h3 className="seo-dynamic-h3">
        Customization Options for {productName}
      </h3>
      <p className="seo-dynamic-p">
        You can fully personalize your {productName} with{" "}
        <mark>logo printing</mark>, <mark>branding</mark>,{" "}
        <mark>embroidery</mark>, color selection, and layout customization. Our
        design experts help you create impactful branding for student kits,
        teacher uniforms, event merchandise, and promotional campaigns.
      </p>

      {/* USE CASES */}
      {/* <h3 className="seo-dynamic-h3">
        Best Use Cases for {productName} in Educational Institutes
      </h3>
      <ul className="seo-dynamic-ul">
        <li>Student welcome kits</li>
        <li>Coaching staff uniforms</li>
        <li>Seminars & academic events</li>
        <li>Open houses & orientation programs</li>
        <li>Examination drives</li>
        <li>University clubs & activity groups</li>CD ..
      </ul> */}

      {/* BENEFITS */}
      <h3 className="seo-dynamic-h3">
        Key Benefits of Using {productName} for Your Institute
      </h3>
      <p className="seo-dynamic-p">
        These products offer lasting brand visibility and practical utility.
        Students wear or use them regularly, making them a powerful promotional
        asset. They also help unify teams, improve discipline, and create a
        sense of belonging among students and staff.
      </p>

      {/* ORDER */}
      <h3 className="seo-dynamic-h3">Ordering & Delivery</h3>
      <p className="seo-dynamic-p">
        We offer fast delivery across India with bulk pricing for Coaching
        centres and universities. Share your logo, quantity, and requirements to
        receive a <mark>free mockup</mark> and quotation.
      </p>

      {/* KEYWORD CHIPS */}
      <div className="seo-keyword-chips">
        {keywords.map((k, i) => (
          <span key={i} className="keyword-chip">
            {k}
          </span>
        ))}
      </div>
    </section>
  );
};

export default DynamicSEOContent;
