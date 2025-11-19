import React from "react";
import {
  BadgeCheck,
  Truck,
  Sparkles,
  Handshake,
  Globe,
  Headset,
} from "lucide-react";
import "../styles/WhyChooseUs.css";

// Updated Keyword-Rich Features
const features = [
  { 
    title: "Lowest MOQ for Institutes", 
    icon: BadgeCheck, 
    desc: "Place small-quantity orders perfect for coaching institutes, schools, colleges, and training centers without extra premium charges." 
  },
  { 
    title: "Bulk Discounts for Education Orders", 
    icon: Handshake, 
    desc: "Get competitive pricing and volume-based discounts on custom merchandise, student kits, apparel, and promotional items." 
  },
  { 
    title: "Fast & Reliable Delivery", 
    icon: Truck, 
    desc: "Pan-India quick dispatch ensuring timely delivery to coaching institutes, academies, and educational organizations." 
  },
  { 
    title: "Custom Printing & Branding", 
    icon: Sparkles, 
    desc: "Full customization with logo printing, institute branding, student personalization, and promotional design support." 
  },
  { 
    title: "Pan-India Institute Coverage", 
    icon: Globe, 
    desc: "We supply coaching centers, schools, colleges, and universities across every region in India." 
  },
  { 
    title: "Dedicated Expert Support", 
    icon: Headset, 
    desc: "Expert assistance for product selection, branding, order planning, and institute requirements." 
  },
];

const WhyChooseUs = () => {
  const firstCol = features.slice(0, 3);
  const secondCol = features.slice(3, 6);

  return (
    <section className="wcu-outer">
      <div className="wcu-header-2">
        <h2 className="wcu-title">
          Why Educational Institutes Choose Us for Custom Products
        </h2>

        <p className="wcu-subtitle-2">
          Trusted by coaching institutes, schools, and colleges across India — we
          deliver top-quality custom merchandise, fast service, and unmatched pricing.
        </p>
      </div>

      <div className="wcu-grid">
        {/* LEFT COLUMN */}
        <div className="wcu-col left-col">
          {firstCol.map((f, i) => {
            const Icon = f.icon;
            return (
              <div className="wcu-item" key={i}>
                <div className="wcu-node">
                  <Icon size={30} />
                  <span className="glow"></span>
                </div>

                <div className="wcu-info">
                  <h3 className="wcu-info-h">{f.title}</h3>
                  <p className="wcu-info-t">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CENTER TIMELINE */}
        <div className="wcu-center-line"></div>

        {/* RIGHT COLUMN */}
        <div className="wcu-col right-col">
          {secondCol.map((f, i) => {
            const Icon = f.icon;
            return (
              <div className="wcu-item" key={i}>
                <div className="wcu-node">
                  <Icon size={26} />
                  <span className="glow"></span>
                </div>

                <div className="wcu-info">
                  <h3 className="wcu-info-h">{f.title}</h3>
                  <p className="wcu-info-t">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
