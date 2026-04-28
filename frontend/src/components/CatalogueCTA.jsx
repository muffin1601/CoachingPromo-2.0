import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../styles/CatalogueCTA.css";
import { ArrowRight } from "lucide-react";

const CatalogueCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyname: "",
    location: "",
  });
  const [showCatalogueVisual, setShowCatalogueVisual] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    return window.matchMedia("(min-width: 601px)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(min-width: 601px)");
    const updateVisualVisibility = (event) => {
      setShowCatalogueVisual(event.matches);
    };

    setShowCatalogueVisual(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateVisualVisibility);

    return () => {
      mediaQuery.removeEventListener("change", updateVisualVisibility);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/catalogue.pdf";
    link.download = "Coachingpromo-Catalogue.pdf";
    link.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        import.meta.env.VITE_CRM_API_URL,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_CRM_API_KEY,
          },
        }
      );

      await axios.post(`${import.meta.env.VITE_API_URL}/send-email`, formData);

      toast.success("Thanks! Catalogue is downloading now…");

      handleDownload();

      setFormData({
        name: "",
        email: "",
        phone: "",
        companyname: "",
        location: "",
      });
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="catalogue-cta">
      <div className="cta-wrapper">

        {/* Right Form */}
        <div id="catalogue" className="cta-right">
          <h2 className="cta-title">Download Catalogue</h2>
          <p className="cta-subtitle">
            Fill details and get complete catalogue.
          </p>

          <form onSubmit={handleSubmit} className="cta-form">

            <div className="form-grid">

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="\d{10}"
                title="Phone number must be 10 digits"
                aria-label="Enter your phone number"
              />

              <input
                type="text"
                name="location"
                placeholder="City / Location*"
                value={formData.location}
                onChange={handleChange}
                required
                aria-label="Enter your city or location"
              />

            </div>

            {/* BUTTON FIXED HERE */}
            <button
              type="submit"
              className="cta-btn"
              aria-label="Download catalogue"
            >
              Download Now <ArrowRight />
            </button>

          </form>
        </div>

        {/* Left Image */}
        {showCatalogueVisual && (
          <div className="cta-left" aria-hidden="true">
            <img
              src="/assets/catalogue-img.webp"
              alt="Catalogue preview"
              className="cta-img"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              width={600}
              height={400}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default CatalogueCTA;
