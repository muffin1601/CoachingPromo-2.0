import React, { useState } from "react";
import "../styles/ContactUs.css";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

const ContactUs = () => {
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
      console.log("Lead captured and email sent.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        companyname: "",
        location: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="contactus-wrapper">
      
      {/*  CONTACT INFO CARDS */}
      <div className="contactus-info-section">
        
        <div className="contactus-card">
          <div className="contactus-card-icon">
            <MapPin size={32} fontWeight={400} />
          </div>
          <h3 className="contactus-card-title">Our Location</h3>
          <p className="contactus-card-text">
            F90/1, Beside ESIC Hospital, Okhla Industrial Area Phase 1,
            New Delhi – 110020, India
          </p>
        </div>

        <div className="contactus-card">
          <div className="contactus-card-icon">
            <Mail size={32} />
          </div>
          <h3 className="contactus-card-title">Our Email Address</h3>
          <p className="contactus-card-text">
            <a href="mailto:sales@coachingpromo.com" className="contactus-link">
              sales@coachingpromo.com
            </a>
            <br />
            <a href="mailto:sales@mfglobalservices.com" className="contactus-link">
              sales@mfglobalservices.com
            </a>
          </p>
        </div>

        <div className="contactus-card">
          <div className="contactus-card-icon">
            <Phone size={32} />
          </div>
          <h3 className="contactus-card-title">Contact Phone Number</h3>
          <p className="contactus-card-text">
            +91 8750708222
          </p>
        </div>
      </div>

      {/*  MAP + FORM SECTION */}
      <div className="contactus-body">
        <div className="contactus-map-box">
          <iframe
            title="office-map"
            src="https://maps.google.com/maps?q=india&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="contactus-map-frame"
            loading="lazy"
          ></iframe>
        </div>

        <form className="contactus-form" onSubmit={handleSubmit}>
          <div className="contactus-form-grid">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
             
              className="contactus-input"
            />

            <input
              type="text"
              name="companyname"
              placeholder="Company / Institute Name"
              value={formData.companyname}
              onChange={handleChange}
              
              className="contactus-input"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
             
              className="contactus-input"
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
              className="contactus-input"
            />
          </div>
          <input
              type="text"
              name="location"
              placeholder="City / Location*"
              value={formData.location}
              onChange={handleChange}
              required
              className="contactus-input-loc"
            />
          <textarea
            name="message"
            placeholder="Requirements / Message"
            value={formData.message}
            onChange={handleChange}
          
            className="contactus-textarea"
          />

          <button type="submit" className="contactus-submit-btn">
            Request A Call Back <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
