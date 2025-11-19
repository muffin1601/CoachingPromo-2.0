import React from "react";
import {
  BadgeCheck,
  Truck,
  Handshake,
  Sparkles,
  ShieldCheck,
  Headset,
} from "lucide-react";
import "./WhyChooseUsSubcategory.css";

const WhyChooseUsSubcategory = ({ subcategoryName }) => {
  const points = [
    {
      icon: BadgeCheck,
      title: "Trusted by Top Institutes",
      desc: `Leading coaching centers, schools, and colleges across India prefer our ${subcategoryName} for branding, events, and student kits.`,
    },
    {
      icon: Sparkles,
      title: "Premium Customization",
      desc: `High-quality logo printing, institute branding, and personalization available on all ${subcategoryName}.`,
    },
    {
      icon: Truck,
      title: "Fast Pan-India Delivery",
      desc: `Quick and reliable delivery of customized ${subcategoryName} to every major city and educational hub in India.`,
    },
    {
      icon: Handshake,
      title: "Bulk Order Pricing",
      desc: `Special pricing and bulk discounts for coaching institutes, academic organizations, and training centers.`,
    },
    {
      icon: ShieldCheck,
      title: "Quality Checked Products",
      desc: `Every ${subcategoryName} undergoes strict quality checks to ensure durability, comfort, and professional finishing.`,
    },
    {
      icon: Headset,
      title: "Dedicated Support Team",
      desc: `Expert assistance for product selection, customization, design previews, and order planning for institutes.`,
    },
  ];

  return (
    <section className="why-subcat-wrapper">
      <h2 className="why-subcat-title">
        Why Institutes Choose Us for {subcategoryName}
      </h2>

      <p className="why-subcat-subtitle">
        Reliable, high-quality, and fully customizable {subcategoryName} for
        coaching institutes, schools, colleges, training academies, and
        educational brands across India.
      </p>

      <div className="why-subcat-grid">
        {points.map((p, i) => {
          const Icon = p.icon;
          return (
            <div className="why-subcat-card" key={i}>
              <div className="why-subcat-icon">
                <Icon size={28} />
              </div>
              <div className="why-subcat-info">
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

export default WhyChooseUsSubcategory;
