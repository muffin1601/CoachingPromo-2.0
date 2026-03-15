import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { X } from "lucide-react";

const UserProfileSidebar = ({ isOpen, onClose }) => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!user) return null;

  const handleLogout = () => {
    logoutUser();
    onClose();
    navigate("/login");
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          onClick={onClose}
          style={{
            position: "fixed", top: 0, left: 0, width: "100%", height: "100%", 
            background: "rgba(0,0,0,0.5)", zIndex: 9999, 
            opacity: isOpen ? 1 : 0, transition: "opacity 0.3s ease"
          }} 
        />
      )}

      {/* Sidebar Panel */}
      <div 
        style={{
          position: "fixed", top: 0, right: isOpen ? 0 : "-400px", 
          width: "100%", maxWidth: "400px", height: "100%", 
          background: "var(--white)", zIndex: 10000, 
          boxShadow: "-4px 0 15px rgba(0,0,0,0.1)", 
          transition: "right 0.3s ease-in-out",
          display: "flex", flexDirection: "column"
        }}
      >
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{ 
            position: "absolute", top: "20px", right: "20px", background: "none", 
            border: "none", cursor: "pointer", color: "var(--text-dark)", padding: "5px"
          }}
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        <div style={{ padding: "80px 40px 40px", flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
          
          {/* Logo */}
          <div style={{ marginBottom: "30px", borderBottom: "1px solid var(--light-border)", paddingBottom: "20px" }}>
            <img src="/logo.webp" alt="Coaching Promo" style={{ height: "40px", objectFit: "contain" }} />
          </div>

          {/* Welcome Header */}
          <div style={{ marginBottom: "40px" }}>
            <p style={{ fontSize: "11px", color: "var(--neutral-gray)", letterSpacing: "1.5px", margin: "0 0 8px 0", textTransform: "uppercase" }}>
              Welcome
            </p>
            <h3 style={{ margin: 0, fontSize: "22px", fontWeight: "600", color: "var(--text-dark)", letterSpacing: "0.5px" }}>
              {user.name}
            </h3>
          </div>

          {/* Customer Account Details */}
          <div style={{ marginBottom: "40px" }}>
            <h4 style={{ fontSize: "11px", color: "var(--neutral-gray)", letterSpacing: "1.5px", margin: "0 0 25px 0", textTransform: "uppercase" }}>
              Customer Account
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
              {user.role === "admin" && (
                <Link to="/admin" onClick={onClose} style={linkStyle}>ADMIN DASHBOARD</Link>
              )}
              {/* <Link to="/profile" onClick={onClose} style={linkStyle}>MY PROFILE</Link> */}
              <Link to="/favorites" onClick={onClose} style={linkStyle}>WISHLIST</Link>
              <Link to="/cart" onClick={onClose} style={linkStyle}>MY CART</Link>
            </div>
          </div>

          {/* Customer Care */}
          <div style={{ marginBottom: "50px" }}>
            <h4 style={{ fontSize: "11px", color: "var(--neutral-gray)", letterSpacing: "1.5px", margin: "0 0 25px 0", textTransform: "uppercase" }}>
              Customer Care
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
              <Link to="/contact" onClick={onClose} style={linkStyle}>CONTACT US</Link>
            </div>
          </div>

          {/* Logout Button (Fixed at bottom or end of scroll) */}
          <div style={{ marginTop: "auto" }}>
            <button 
              onClick={handleLogout}
              style={{
                width: "100%", padding: "16px", backgroundColor: "var(--brand-orange)", 
                color: "var(--white)", border: "none", fontSize: "13px", fontWeight: "600", 
                letterSpacing: "1.5px", cursor: "pointer", textTransform: "uppercase",
                transition: "background-color 0.2s ease"
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "var(--brand-orange-dark)"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "var(--brand-orange)"}
            >
              Logout
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

const linkStyle = {
  textDecoration: "none", 
  color: "var(--text-dark)", 
  fontSize: "13px", 
  fontWeight: "600",
  letterSpacing: "0.5px",
  textTransform: "uppercase",
  transition: "color 0.2s ease"
};

export default UserProfileSidebar;
