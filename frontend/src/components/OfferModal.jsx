import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const OfferModal = ({ onBannerClick }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show after 2 seconds on every mount
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const handleClick = () => {
    setShow(false);
    onBannerClick();
  };


  if (!show) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button onClick={handleClose} style={closeButtonStyle} aria-label="Close offer">
          <X size={24} />
        </button>
        <div style={contentStyle} onClick={handleClick}>
          <img 
            src="/offerposter.jpeg" 
            alt="Exclusive Offer" 
            style={imageStyle} 
          />
          <div style={badgeStyle}>Special Offer!</div>
        </div>
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
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 11000,
  backdropFilter: "blur(6px)",
};

const modalStyle = {
  position: "relative",
  width: "90%",
  maxWidth: "350px",
  backgroundColor: "transparent",
  animation: "offerFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
};



const closeButtonStyle = {
  position: "absolute",
  top: "-40px",
  right: "0",
  background: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "28px",
  height: "28px",
  display: "flex",

  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  color: "#333",
  zIndex: 1,
};

const contentStyle = {
  cursor: "pointer",
  // borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
  position: "relative",
};

const imageStyle = {
  width: "100%",
  display: "block",
  transition: "transform 0.4s",
};

const badgeStyle = {
  position: "absolute",
  top: "20px",
  right: "20px",
  backgroundColor: "#d17504",
  color: "white",
  padding: "8px 16px",
  borderRadius: "20px",
  fontWeight: "bold",
  fontSize: "0.80rem",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",

  textTransform: "uppercase",
  letterSpacing: "1px",
};

export default OfferModal;
