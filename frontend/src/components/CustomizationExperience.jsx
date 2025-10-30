import React from "react";
import { ArrowRight } from "lucide-react";
import "../styles/CustomizationExperience.css";

const CustomizationExperience = () => {
  const items = [
  {
    title: "Personalized Round-Neck T-Shirt Customization – Logo Printing for Colleges, Schools & Corporate Branding",
    offer: "Customize Now",
    href: "https://printkee.com/customize/roundneck",
    img: "/assets/RoundNecktshirt/maroon (1).webp",
    bg: "#fff6e8ff",
  },
  {
    title: "Custom Polo T-Shirt Designer – Premium Logo Branding & Printing for Institutes, Events & Corporate Gifting",
    offer: "Customize Now",
    href: "https://printkee.com/customize/polotshirt",
    img: "/assets/Polotshirt/polo5 (1).webp",
    bg: "#fff6e8ff",
  },
];


  return (
    <section className="cex-wrapper">
      <div className="cex-toptext">
        <h2>The Customization Experience</h2>
        <p>Bring your brand to life with personalized apparel & live previews.</p>
      </div>

      <div className="cex-cards">
        {items.map((item, index) => (
          <div key={index} className="cex-card" style={{ background: item.bg }}>
            <div className="cex-info">
              <h3>{item.title}</h3>
              <a href={item.href} className="cex-btn">
                {item.offer} <ArrowRight size={18} />
              </a>
            </div>

            <div className="cex-imgwrap">
              <img src={item.img} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomizationExperience;
