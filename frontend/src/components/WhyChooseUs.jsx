import React from "react";
import "../styles/whychooseus.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyChooseUs = () => {
  const isSmallScreen =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  };

  const benefits_1 = [
    { title: "Premium Quality", desc: "Top-notch materials and printing for lasting impressions.", img: "/assets/icons/1 (2).webp" },
    { title: "Affordable Pricing", desc: "Competitive rates without compromising on quality.", img: "/assets/icons/1 (1).webp" },
    { title: "Bulk Order Discounts", desc: "Special pricing for large quantities to save your costs.", img: "/assets/icons/1 (3).webp" },
    { title: "Customization", desc: "Personalized designs to reflect your brand identity.", img: "/assets/icons/1.webp" }
  ];

  const benefits_2 = [
    { title: "On-Time Delivery", desc: "Reliable service ensuring prompt product delivery.", img: "/assets/icons/1 (4).webp" },
    { title: "Eco-Friendly Products", desc: "Environmentally conscious materials for a sustainable future.", img: "/assets/icons/1 (5).webp" },
    { title: "Expert Support", desc: "Dedicated team to assist you at every step of the process.", img: "/assets/icons/1 (6).webp" },
    { title: "Wide Range of Products", desc: "Extensive selection to meet all your promotional needs.", img: "/assets/icons/1 (7).webp" }
  ];

  return (
    <section className="why-choose-us">
      <h2 className="heading">Why Coaching Institutes Choose Us?</h2>
      <p className="subtitle">
        At CoachingPromo, we provide high quality corporate promotional products specifically designed for coaching institutes. Our range ensures premium materials and superior printing, delivering both durability and visual impact.
      </p>
      <div className="benefits-full">
        <div className="benefits-1">
          {benefits_1.map((item, idx) => {
            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
            return (
              <div className="benefit" key={idx}>
                <motion.div
                  ref={ref}
                  initial={isSmallScreen ? undefined : "hidden"}
                  animate={isSmallScreen ? undefined : inView ? "visible" : "hidden"}
                  variants={variants}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="animated-section"
                >
                  <img src={item.img} loading="lazy" alt={`${item.title} icon`} className="icon-check" />
                  <h3>{item.title}</h3> {/* Changed h4 → h3 */}
                  <p>{item.desc}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
        <img src="/assets/photo.webp" loading="lazy" alt="Promotional products showcase" className="photo" />
        <div className="benefits-2">
          {benefits_2.map((item, idx) => {
            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
            return (
              <div className="benefit" key={idx}>
                <motion.div
                  ref={ref}
                  initial={isSmallScreen ? undefined : "hidden"}
                  animate={isSmallScreen ? undefined : inView ? "visible" : "hidden"}
                  variants={variants}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="animated-section"
                >
                  <img src={item.img} loading="lazy" alt={`${item.title} icon`} className="icon-check" />
                  <h3>{item.title}</h3> {/* Changed h4 → h3 */}
                  <p>{item.desc}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
