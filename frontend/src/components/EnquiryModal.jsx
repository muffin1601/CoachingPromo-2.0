import React, { useState } from "react";
import "../styles/EnquiryModal.css";
import { X, ArrowRight } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

const EnquiryModal = ({ isOpen, onClose, image}) => {
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

      toast.success("Thank you! Our Team will be in touch with you shortly.");

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
          <img src={`${image}`} alt="enquiry" />
        </div>

        {/* Form */}
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <h2 className="enq-title">Let’s Build Your Custom Merchandise!</h2>

          <p className="enq-subtitle">Submit your requirements to receive quotes, product suggestions, and branding support.</p>

          <div className="enquiry-grid">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="enquiry-input"
            />

            <input
              type="text"
              name="companyname"
              placeholder="Institute / Company"
              value={formData.companyname}
              onChange={handleChange}
              className="enquiry-input"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="enquiry-input"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
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
            placeholder="Requirements / Message"
            value={formData.message}
            onChange={handleChange}
            className="enquiry-textarea"
          />

          <button type="submit" className="enquiry-submit-btn">
            Enquire Now <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
