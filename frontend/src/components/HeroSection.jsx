import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import slides from "../data/banners";
import "../styles/HeroSection.css";

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const length = slides.length;
  const timeoutRef = useRef(null);

  // Auto-slide
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
    <div
      className="hero-wrapper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence>
        <motion.div
          key={current}
          className="hero-slide"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* Media */}
          {slides[current].type === "video" ? (
            <video
              className="hero-media"
              src={slides[current].src}
              autoPlay
              muted
              loop
            />
          ) : (
            <img className="hero-media" src={slides[current].src} alt="" />
          )}

          {/* Content */}
          <div className="hero-content">
            <h1>
              {slides[current].title || "Welcome to Coaching Promo"}
            </h1>
            <p className="description-text">
              {slides[current].subtitle || "Welcome to Coaching Promo"}
            </p>

            {/* CTA */}
            <a href={slides[current].ctaLink} className="hero-cta-button">
              {slides[current].ctaText}
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button className="hero-arrow left" onClick={goPrev}>
        <ArrowLeft size={20} />
      </button>
      <button className="hero-arrow right" onClick={goNext}>
        <ArrowRight size={20} />
      </button>

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`hero-dot ${current === i ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
