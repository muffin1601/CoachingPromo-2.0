import React from "react";
import { ArrowRight } from "lucide-react";
import "../styles/CustomizationExperience.css";

const CustomizationExperience = () => {
  const items = [
    {
      title:
        "Custom Round-Neck T-Shirt Designer – Logo Printing for Coaching Institutes, Schools, Colleges & Events",
      offer: "Add Your Logo",
      href: "/customize/roundneck",
      img: "/round.webp",
      bg: "#fff6e8ff",
      alt:
        "custom round neck t shirt for Coaching institutes schools colleges logo printing",
    },
    {
      title:
        "Premium Polo T-Shirt Customization – Institute Branding, Event Uniforms & Corporate Printing",
      offer: "Add Your Logo",
      href: "/customize/polotshirt",
      img: "/polo.webp",
      bg: "#fff6e8ff",
      alt:
        "custom polo t shirt with logo printing for institutes colleges events corporate branding",
    },
  ];

  return (
    <section className="cex-wrapper">
      <div className="cex-toptext">
        <h2 className="cex-title">
          Custom T-Shirt Designing for Coaching Institutes & Educational Brands
        </h2>

        <p className="cex-subtitle">
          Create personalized apparel with live previews — perfect for coaching
          institutes, schools, colleges, events, and corporate branding across India.
        </p>
      </div>

      <div className="cex-cards">
        {items.map((item, index) => (
          <div key={index} className="cex-card" style={{ background: item.bg }}>
            <div className="cex-info">
              <h3 className="cex-item-title">{item.title}</h3>

              <a href={item.href} className="cex-btn">
                {item.offer} <ArrowRight size={18} />
              </a>
            </div>

            <div className="cex-imgwrap">
              <img
                src={item.img}
                alt={item.alt}
                className="cex-img"
                loading="lazy"
                decoding="async"
                width={400}
                height={220}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomizationExperience;
