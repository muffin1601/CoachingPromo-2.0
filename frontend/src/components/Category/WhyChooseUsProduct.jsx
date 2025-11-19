import React from "react";
import {
  ShieldCheck,
  BadgeCheck,
  Truck,
  Handshake,
  Sparkles,
  Headset,
} from "lucide-react";

import "./WhyChooseUsProduct.css";

const WhyChooseUsProduct = ({ productName, subcategoryName, categoryName }) => {
  const points = [
    {
      icon: BadgeCheck,
      title: "Trusted by Top Institutes Across India",
      desc: `Schools, coaching institutes, colleges, and universities rely on us for premium-quality ${productName} and consistent branding.`,
    },
    {
      icon: Sparkles,
      title: `High-Quality Customization`,
      desc: `Get vibrant logo printing, embroidery, personalization, and institute branding on all ${subcategoryName}. Long-lasting and professional finish guaranteed.`,
    },
    {
      icon: ShieldCheck,
      title: "Durable & Institute-Approved Quality",
      desc: `All ${productName} undergo strict durability checks, ensuring comfort and quality suitable for everyday academic use.`,
    },
    {
      icon: Truck,
      title: "Fast Pan-India Delivery",
      desc: `We deliver customized ${subcategoryName} quickly to all major education hubs, including Delhi NCR, Mumbai, Pune, Chennai, Hyderabad, Kota, and more.`,
    },
    {
      icon: Handshake,
      title: "Bulk Order Pricing",
      desc: `Special bulk discounts for coaching institutes, training centers, universities, and event organizers ordering large quantities.`,
    },
    {
      icon: Headset,
      title: "Dedicated Support Team",
      desc: `From product selection to design preview, our support team guides you through your ${productName} order for a smooth experience.`,
    },
  ];

  return (
    <section className="wcu-product-wrapper">
      <h2 className="wcu-product-title">
        Why Institutes Choose Us for {productName}
      </h2>

      <p className="wcu-product-subtitle">
        Delivering premium-quality {subcategoryName} for coaching institutes, schools,
        colleges, universities, and training centers across India.
      </p>

      <div className="wcu-product-grid">
        {points.map((p, i) => {
          const Icon = p.icon;
          return (
            <div key={i} className="wcu-product-card">
              <div className="wcu-product-icon">
                <Icon size={28} />
              </div>
              <div className="wcu-product-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUsProduct;
