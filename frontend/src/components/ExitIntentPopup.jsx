import React, { useEffect, useState } from "react";
import { X, ArrowRight } from "lucide-react";
import "../styles/ExitIntentPopup.css";

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);

  const items = [
    {
      title:
        "Custom Round-Neck T-Shirt Designer – Logo Printing for Coaching Institutes, Schools, Colleges & Events",
      offer: "Add Your Logo",
      href: "/customize/roundneck",
      img: "/round.webp",
      alt:
        "custom round neck t shirt for Coaching institutes schools colleges logo printing",
    },
    {
      title:
        "Premium Polo T-Shirt Customization – Institute Branding, Event Uniforms & Corporate Printing",
      offer: "Add Your Logo",
      href: "/customize/polotshirt",
      img: "/polo.webp",
      alt:
        "custom polo t shirt with logo printing for institutes colleges events corporate branding",
    },
  ];

  useEffect(() => {
    const handleExit = (e) => {
      if (e.clientY < 5) setShow(true);
    };
    document.addEventListener("mouseleave", handleExit);
    return () => document.removeEventListener("mouseleave", handleExit);
  }, []);

  if (!show) return null;

  return (
    <div className="exit-overlay">
      <div className="exit-modal">
        <button
          className="exit-close"
          onClick={() => setShow(false)}
          aria-label="Close popup"
        >
          <X size={26} />
        </button>

        <h2 className="exit-title">Customize Your T-Shirts Instantly</h2>
        <p className="exit-subtitle">
          Add logo, change colors & preview live — trusted by Coaching institutes, schools & colleges across India.
        </p>

        <div className="exit-cards">
          {items.map((item, i) => (
            <div key={i} className="exit-card">
              <div className="exit-info">
                <h3 className="exit-item-title">{item.title}</h3>

                <a href={item.href} className="exit-btn">
                  {item.offer} <ArrowRight size={18} />
                </a>
              </div>
1

              <div className="exit-imgwrap">.1  
                <img src={item.img} alt={item.alt} className="exit-img" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
