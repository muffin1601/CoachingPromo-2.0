import React, { useState } from "react";
import "../styles/EnquiryModal.css";
import { X, ArrowRight } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

const RegisterInstituteModal = ({ isOpen, onClose }) => {
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

      toast.success("Thank you! Your institute registration request has been submitted.");

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

        {/* Close */}
        <button className="enquiry-close-btn" onClick={onClose}>
          <X size={26} />
        </button>

        {/* LEFT IMAGE */}
        <div className="enquiry-img-box">
          <img src="/assets/enquiry.webp" alt="register-institute" />
        </div>

        {/* FORM */}
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <h2 className="enq-title">Register Your Institute With Us</h2>

          <p className="enq-subtitle">
            Join our network and get access to premium customized merchandise, promotional products & branding support.
          </p>

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
              placeholder="Institute Name"
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
            placeholder="Tell us more about your institute & requirements"
            value={formData.message}
            onChange={handleChange}
            className="enquiry-textarea"
          />

          <button type="submit" className="enquiry-submit-btn">
            Register Now <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterInstituteModal;
