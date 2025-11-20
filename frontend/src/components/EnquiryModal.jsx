import React, { useState } from "react";
import "../styles/EnquiryModal.css";
import { X, ArrowRight } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

const EnquiryModal = ({ isOpen, onClose, image }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyname: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(import.meta.env.VITE_CRM_API_URL, formData, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_CRM_API_KEY,
        },
      });

      await axios.post(`${import.meta.env.VITE_API_URL}/send-email`, formData);

      toast.success("Thank you! Our team will contact you shortly.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        companyname: "",
        location: "",
        message: "",
      });

      onClose();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={`enquiry-overlay ${isOpen ? "show" : ""}`}>
      <div className={`enquiry-modal ${isOpen ? "slide" : ""}`}>

        {/* Close Button */}
        <button className="enquiry-close-btn" onClick={onClose}>
          <X size={26} />
        </button>

        {/* Left Image */}
        <div className="enquiry-img-box">
          <img
            src={`${image}`}
            alt="Custom merchandise enquiry for coaching institutes, schools and colleges"
          />
        </div>

        {/* Form */}
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <h2 className="enq-title">
            Get a Quote for Custom Merchandise & Institute Branding
          </h2>

          <p className="enq-subtitle">
            Share your requirements to receive pricing, product suggestions,
            branding guidance & bulk order support for coaching institutes,
            schools, colleges and training centers.
          </p>

          <div className="enquiry-grid">
            <input
              type="text"
              name="name"
              placeholder="Full Name*"
              value={formData.name}
              onChange={handleChange}
              required
              className="enquiry-input"
            />

            <input
              type="text"
              name="companyname"
              placeholder="Institute / Coaching Center / Company*"
              value={formData.companyname}
              onChange={handleChange}
              required
              className="enquiry-input"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              value={formData.email}
              onChange={handleChange}
              required
              className="enquiry-input"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (10 digits)*"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="\d{10}"
              title="Phone number must be 10 digits"
              className="enquiry-input"
            />
          </div>

          <input
            type="text"
            name="location"
            placeholder="City / Location*"
            value={formData.location}
            onChange={handleChange}
            required
            className="enquiry-input-full"
          />

          <textarea
            name="message"
            placeholder="Tell us what you need: T-shirts, polo uniforms, student welcome kits, bags, water bottles, stationery, promotional items, etc."
            value={formData.message}
            onChange={handleChange}
            className="enquiry-textarea"
          />

          <button
            type="submit"
            className="enquiry-submit-btn"
            aria-label="Submit enquiry"
          >
            Enquire Now <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
