import React, { useEffect, useState, useRef, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import axios from "axios";
import "../styles/HeroSection.css";

/*  Lazy load EnquiryModal */
const EnquiryModal = lazy(() => import("./EnquiryModal"));

const HeroSection = () => {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  // Fetch slides
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

  // Autoplay
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

  if (length === 0) return null;
  const slide = slides[current];

  return (
    <>
      <section
        className="hero-wrapper"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
          {/* FIRST SLIDE — NO ANIMATION FOR BETTER PERFORMANCE */}
        {current === 0 ? (
          <div className="hero-bg-wrapper">
            {slide.type === "video" ? (
              <video
                className="hero-bg-media"
                src={slide.src}
                autoPlay
                muted
                loop
                preload="auto"
              />
            ) : (
              <img
                className="hero-bg-media"
                src={slide.src}
                alt={slide.title || "Banner"}
                fetchpriority="high"
                loading="eager"
                decoding="async"
              />
            )}
          </div>
        ) : (
          /*  OTHER SLIDES — WITH ANIMATION */
          <AnimatePresence>
            <motion.div
              key={current}
              className="hero-bg-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {slide.type === "video" ? (
                <video
                  className="hero-bg-media"
                  src={slide.src}
                  autoPlay
                  muted
                  loop
                  preload="metadata"
                />
              ) : (
                <img
                  className="hero-bg-media"
                  src={slide.src}
                  alt={slide.title}
                  loading="lazy"
                  decoding="async"
                />
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h1 className="hero-title">{slide.title}</h1>
          <p className="hero-subtext">{slide.subtitle}</p>

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
            <button
              onClick={() => setIsEnquiryOpen(true)}
              className="btn-primary"
            >
              Enquire Now
            </button>
            <a href="#catalogue" className="btn-outline">
              Browse Catalogue
            </a>
          </div>
        </div>

        {/* Arrows */}
        <button className="hero-arrow left" onClick={goPrev} aria-label="Previous slide">
          <ArrowLeft size={26} />
        </button>

        <button className="hero-arrow right" onClick={goNext} aria-label="Next slide">
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

      {/* Mobile CTA */}
      <div className="hero-cta-group-2">
        <button onClick={() => setIsEnquiryOpen(true)} className="btn-primary">
          Enquire Now
        </button>
        <a href="#catalogue" className="btn-outline">
          Browse Catalogue
        </a>
      </div>

      {/*  Lazy Modal */}
      <Suspense fallback={null}>
        {isEnquiryOpen && (
          <EnquiryModal
            isOpen={isEnquiryOpen}
            onClose={() => setIsEnquiryOpen(false)}
            image="/assets/enquiry.webp"
          />
        )}
      </Suspense>
    </>
  );
};

export default HeroSection;
