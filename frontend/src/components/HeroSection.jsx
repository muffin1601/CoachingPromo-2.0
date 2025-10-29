import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
// 1. Import Lucide Icons
import { ArrowLeft, ArrowRight, Facebook, Twitter, Chrome } from "lucide-react"; 
import slides from "../data/banners";
import "../styles/HeroSection.css";
// NOTE: For 'g+', I'm using 'Chrome' as a generic circular icon/browser icon.
// Lucide does not include brand logos like Facebook, Twitter, or Google Plus.

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
            {/* Text content from your image */}
            <h1>
              <span className="text-different">A Different</span>
              <br />
              <span className="text-online-flower-shop">Online Flower Shop</span>
            </h1>
            <p className="description-text">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected humour,
              or randomised words...
            </p>

            {/* This will be placed at the bottom-left of the content overlay */}
            <a href={slides[current].ctaLink} className="hero-cta-button">
              SHOP NOW
            </a>
            {/* Social Icons based on your image - Needs absolute positioning in CSS */}
            <div className="social-icons">
                <a href="#"><Facebook size={18} /></a>
                <a href="#"><Twitter size={18} /></a>
                <a href="#"><Chrome size={18} /></a>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows: Replace ❮ and ❯ with Lucide Icons */}
      <button className="hero-arrow left" onClick={goPrev}>
        <ArrowLeft size={24} /> 
      </button>
      <button className="hero-arrow right" onClick={goNext}>
        <ArrowRight size={24} /> 
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