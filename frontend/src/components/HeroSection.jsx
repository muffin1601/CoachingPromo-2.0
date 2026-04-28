import React, { useEffect, useState, useRef, lazy, Suspense } from "react";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import axios from "axios";
import "../styles/HeroSection.css";

const EnquiryModal = lazy(() => import("./EnquiryModal"));

const fallbackSlides = [
  {
    src: "/banners/banner-1-1360.webp",
    title: "Custom Promotional Products for Coaching Institutes",
    subtitle:
      "Branded apparel, student kits, stationery and gifting solutions with fast pan-India delivery.",
    type: "image",
  },
  {
    src: "/banners/banner%20(2).webp",
    title: "Bulk Merchandise Designed for Education Brands",
    subtitle:
      "Launch events, admissions and welcome kits with consistent branding across every product.",
    type: "image",
  },
];

const HeroSection = () => {
  const [slides, setSlides] = useState(fallbackSlides);
  const [current, setCurrent] = useState(0);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/slides/banners`);
        if (Array.isArray(res.data) && res.data.length > 0) {
          setSlides(res.data);
        }
      } catch (err) {
        console.error("Error fetching banners:", err);
      }
    };

    fetchSlides();
  }, []);

  const length = slides.length;

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
  const slide = slides[current];

  return (
    <>
      <section
        className="hero-wrapper"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={`hero-bg-wrapper ${current === 0 ? "" : "hero-bg-fade"}`}>
          {slide.type === "video" ? (
            <video
              className="hero-bg-media"
              src={slide.src}
              autoPlay
              muted
              loop
              preload={current === 0 ? "auto" : "metadata"}
            />
          ) : (
            <img
              className="hero-bg-media"
              src={slide.src}
              alt={slide.title || "Banner"}
              fetchpriority={current === 0 ? "high" : undefined}
              loading={current === 0 ? "eager" : "lazy"}
              decoding="async"
              width={1280}
              height={512}
              sizes="100vw"
              style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
            />
          )}
        </div>

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

        <button className="hero-arrow left" onClick={goPrev} aria-label="Previous slide">
          <ArrowLeft size={26} />
        </button>

        <button className="hero-arrow right" onClick={goNext} aria-label="Next slide">
          <ArrowRight size={26} />
        </button>

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

      <div className="hero-cta-group-2">
        <button onClick={() => setIsEnquiryOpen(true)} className="btn-primary">
          Enquire Now
        </button>
        <a href="#catalogue" className="btn-outline">
          Browse Catalogue
        </a>
      </div>

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
