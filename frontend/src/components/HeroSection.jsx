import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import slides from "../data/banners";
import "../styles/HeroSection.css";

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);
  const length = slides.length;

  useEffect(() => {
    if (!paused) {
      timeoutRef.current = setTimeout(
        () => setCurrent((prev) => (prev + 1) % length),
        4500
      );
    }
    return () => clearTimeout(timeoutRef.current);
  }, [current, paused, length]);

  const goNext = () => setCurrent((prev) => (prev + 1) % length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + length) % length);

  return (
    <section
      className="hero-wrapper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Change */}
      <AnimatePresence>
        <motion.div
          key={current}
          className="hero-bg-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          AutoPlay
        >
          {slides[current].type === "video" ? (
            <video className="hero-bg-media" src={slides[current].src} autoPlay muted loop />
          ) : (
            <img className="hero-bg-media" src={slides[current].src} alt="" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* LEFT CONTENT */}
      <div className="hero-content">
        <h1 className="hero-title">
           {slides[current].title}
        </h1>

        <p className="hero-subtext">
           {slides[current].subtitle}
        </p>

        {/*  USP LIST WITH ICONS */}
        <ul className="hero-usps">
          <li>
            <CheckCircle size={18} className="usp-icon" />
            Bulk Discounts
          </li>
          <li>
            <CheckCircle size={18} className="usp-icon" />
            Fast Delivery
          </li>
          <li>
            <CheckCircle size={18} className="usp-icon" />
            Pan-India Shipping
          </li>
        </ul>

        <div className="hero-cta-group">
          <a href="/get-quote" className="btn-primary">
            Get Quote
          </a>
          <a href="/catalogue" className="btn-outline">
            Browse Catalogue
          </a>
        </div>
      </div>

      {/*  Navigation Arrows */}
      <button className="hero-arrow left" onClick={goPrev}>
        <ArrowLeft size={26} />
      </button>

      <button className="hero-arrow right" onClick={goNext}>
        <ArrowRight size={26} />
      </button>

      {/*  Dots */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`hero-dot ${current === i ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
