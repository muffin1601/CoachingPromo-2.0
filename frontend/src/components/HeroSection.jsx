import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import axios from "axios";
import "../styles/HeroSection.css";
import EnquiryModal from "./EnquiryModal";

const HeroSection = () => {
  const [slides, setSlides] = useState([]); 
  const [current, setCurrent] = useState(0);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  //  Fetch slides from backend
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/slides/banners`);
        setSlides(res.data);
      } catch (err) {
        console.error("Error fetching banners:", err);
      }
    };
    fetchSlides();
  }, []);

  const length = slides.length;

  //  Only start autoplay if slides are loaded
  useEffect(() => {
    if (!paused && length > 0) {
      timeoutRef.current = setTimeout(
        () => setCurrent((prev) => (prev + 1) % length),
        4500
      );
    }
    return () => clearTimeout(timeoutRef.current);
  }, [current, paused, length]);

  const goNext = () => setCurrent((prev) => (prev + 1) % length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + length) % length);

  if (length === 0) return null; // or show a loader/spinner

  return (
    <>
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
          >
            {slides[current].type === "video" ? (
              <video
                className="hero-bg-media"
                src={slides[current].src}
                autoPlay
                muted
                loop
              />
            ) : (
              <img
                className="hero-bg-media"
                src={slides[current].src}
                alt=""
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h1 className="hero-title">{slides[current].title}</h1>

          <p className="hero-subtext">{slides[current].subtitle}</p>

          <ul className="hero-usps">
            <li>
              <CheckCircle size={18} className="usp-icon" /> Bulk Discounts
            </li>
            <li>
              <CheckCircle size={18} className="usp-icon" /> Fast Delivery
            </li>
            <li>
              <CheckCircle size={18} className="usp-icon" /> Pan-India Shipping
            </li>
          </ul>

          <div className="hero-cta-group">
            <a
              href="#"
              onClick={() => setIsEnquiryOpen(true)}
              className="btn-primary"
            >
              Get Quote
            </a>
            <a href="#catalogue" className="btn-outline">
              Browse Catalogue
            </a>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className="hero-arrow left" onClick={goPrev}>
          <ArrowLeft size={26} />
        </button>
        <button className="hero-arrow right" onClick={goNext}>
          <ArrowRight size={26} />
        </button>

        {/* Dots */}
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

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        image="/assets/enquiry.webp"
      />
    </>
  );
};

export default HeroSection;
