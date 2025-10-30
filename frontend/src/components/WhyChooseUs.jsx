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

const features = [
  { title: "Lowest MOQ", icon: BadgeCheck, desc: "Order small without premium pricing." },
  { title: "Bulk Discounts", icon: Handshake, desc: "Best price advantage for volume orders." },
  { title: "Fast Delivery", icon: Truck, desc: "Pan-India fast dispatch & delivery." },
  { title: "Custom Printing", icon: Sparkles, desc: "Logos, branding & personalization." },
  { title: "Pan-India Delivery", icon: Globe, desc: "We serve institutes across every region." },
  { title: "Expert Support", icon: Headset, desc: "Consulting guided by experienced teams." },
];

const WhyChooseUs = () => {
  const firstCol = features.slice(0, 3);
  const secondCol = features.slice(3, 6);

  return (
    <section className="wcu-outer">
      <div className="wcu-header-2">
        <h2 className="wcu-title">Why Choose Our Custom Institute Products?</h2>
        <p className="wcu-subtitle-2">Industry-leading quality, competitive pricing, and exceptional service for your brand</p>
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
