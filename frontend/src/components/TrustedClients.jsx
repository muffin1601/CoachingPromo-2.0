import React from "react";
import "../styles/TrustedClients.css";

const logos = [
  { name: "IIT", src: "/clients/client (1).webp" },
  { name: "IIM", src: "/clients/client (2).webp" },
  { name: "Delhi University", src: "/clients/client (3).webp" },
  { name: "DPS", src: "/clients/client (4).webp" },
  { name: "Coaching Institutes", src: "/clients/client (5).webp" },
  { name: "IIT", src: "/clients/client (1).webp" },
  { name: "IIM", src: "/clients/client (2).webp" },
  { name: "Delhi University", src: "/clients/client (3).webp" },
  { name: "DPS", src: "/clients/client (4).webp" },
  { name: "Coaching Institutes", src: "/clients/client (5).webp" },
];

const TrustedClients = () => {
  return (
    <section className="trusted-wrapper">
      <div className="trusted-container">
        <h2 className="trusted-title">Trusted by Universities & Institutions</h2>
        <p className="trusted-subtext">
          IIT • IIM • Delhi University • DPS • Top Coaching Institutes & More
        </p>

        {/*  Infinite Marquee */}
        <div className="marquee">
          <div className="marquee-track">
            {logos.map((logo, index) => (
              <div key={index} className="trusted-logo">
                <img src={logo.src} alt={logo.name} />
              </div>
            ))}

            {/* Duplicate for seamless loop */}
            {logos.map((logo, index) => (
              <div key={"dup-" + index} className="trusted-logo">
                <img src={logo.src} alt={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
