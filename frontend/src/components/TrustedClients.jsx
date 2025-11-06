import React from "react";
import "../styles/TrustedClients.css";

const logos = [
 

  //  Newly Added
  { name: "Basu Classes", src: "/clients/client (3).webp" },
  { name: "Photon Classes", src: "/clients/client (1).webp" },
  { name: "Chemistry Solutions", src: "/clients/client (2).webp" },
  { name: "Basu Classes", src: "/clients/client (3).webp" },
  { name: "Photon Classes", src: "/clients/client (1).webp" },
  { name: "Chemistry Solutions", src: "/clients/client (2).webp" },
  { name: "Basu Classes", src: "/clients/client (3).webp" },
  { name: "Photon Classes", src: "/clients/client (1).webp" },
  { name: "Chemistry Solutions", src: "/clients/client (2).webp" },

];


const TrustedClients = () => {
  return (
    <section className="trusted-wrapper">
      <div className="trusted-container">
        <h2 className="trusted-title">Trusted by Coachings, Institutions, and many more Study Centers</h2>
        <p className="trusted-subtext">
          Chemistry Solutions • Photon Classes • Basu Classes • Top Coaching Institutes & More
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
