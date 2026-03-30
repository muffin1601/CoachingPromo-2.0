import React, { useState } from "react";
import axios from "axios";
import { X, User, Mail, Phone, Loader2, Send } from "lucide-react";

const LeadFormModal = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyname: "Retail Offer Lead",
    location: "Website",
    message: "Interested in Special Offer Products",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // 1. Send to CRM (Matching EnquiryModal logic)
      await axios.post(import.meta.env.VITE_CRM_API_URL, formData, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_CRM_API_KEY,
        },
      });

      // 2. Send Email via our backend (Matching EnquiryModal logic)
      await axios.post(`${import.meta.env.VITE_API_URL}/send-email`, formData);

      // 3. Save to our database for tracking
      await axios.post(`${import.meta.env.VITE_API_BASE_URL || ""}/api/leads`, {
        ...formData,
        mobile: formData.phone, // Map phone back to mobile for our DB
        productInterest: "Special Offer Banner"
      });

      onSuccess();
    } catch (err) {
      console.error("Enquiry Error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;


  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button onClick={onClose} style={closeButtonStyle}>
          <X size={20} />
        </button>

        <div style={headerStyle}>
          <h2 style={titleStyle}>Exclusive Offers!</h2>
          <p style={subtitleStyle}>Submit your details to unlock premium discounts and explore our offer catalog.</p>
        </div>

        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputGroupStyle}>
            <User size={18} style={iconStyle} />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div style={inputGroupStyle}>
            <Mail size={18} style={iconStyle} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div style={inputGroupStyle}>
            <Phone size={18} style={iconStyle} />
            <input
              type="text"
              name="phone"
              placeholder="Mobile Number (+91)"
              required
              value={formData.phone}
              onChange={handleChange}
              style={inputStyle}
            />

          </div>

          {error && <p style={errorStyle}>{error}</p>}

          <button type="submit" disabled={loading} style={submitButtonStyle}>
            {loading ? (
              <Loader2 className="spinner" size={20} />
            ) : (
              <>
                Continue to Offers <Send size={18} style={{ marginLeft: "8px" }} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 10000,
  backdropFilter: "blur(4px)",
};

const modalStyle = {
  backgroundColor: "#fff",
  padding: "40px",
  borderRadius: "12px",
  width: "90%",
  maxWidth: "450px",
  position: "relative",
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
  animation: "modalFadeIn 0.3s ease-out",
};

const closeButtonStyle = {
  position: "absolute",
  top: "15px",
  right: "15px",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "#888",
  transition: "color 0.2s",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "30px",
};

const titleStyle = {
  fontSize: "1.8rem",
  color: "#0b4a8d",
  margin: "0 0 10px 0",
  fontWeight: "700",
};

const subtitleStyle = {
  fontSize: "0.95rem",
  color: "#666",
  lineHeight: "1.5",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const inputGroupStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
};

const iconStyle = {
  position: "absolute",
  left: "15px",
  color: "#0b4a8d",
};

const inputStyle = {
  width: "100%",
  padding: "12px 15px 12px 45px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  fontSize: "1rem",
  outline: "none",
  transition: "border-color 0.2s",
};

const errorStyle = {
  color: "#d32f2f",
  fontSize: "0.85rem",
  textAlign: "center",
  margin: "0",
};

const submitButtonStyle = {
  padding: "14px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#d17504",
  color: "#fff",
  fontSize: "1rem",
  fontWeight: "600",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "background-color 0.2s, transform 0.1s",
};

export default LeadFormModal;
