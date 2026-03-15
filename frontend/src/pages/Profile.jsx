import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import PageBanner from "../components/PageBanner";

const Profile = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  if (!user) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2>Please log in to view your profile</h2>
        <button onClick={() => navigate("/login")} style={{ padding: "10px 20px", marginTop: "20px" }}>
          Log In
        </button>
      </div>
    );
  }

  return (
    <>
      <PageBanner
        title="My Profile"
        background="/promo.webp"
        breadcrumb={[{ label: "Profile Settings" }]}
      />
      <div style={{ padding: "60px 20px 80px", maxWidth: "800px", margin: "0 auto", minHeight: "50vh" }}>
      <div style={{ 
        background: "white", padding: "40px", borderRadius: "0", 
        boxShadow: "var(--shadow-medium)", border: "1px solid var(--light-border)",
        display: "flex", flexDirection: "column", gap: "15px" 
      }}>
        
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid var(--light-bg-2)" }}>
          <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "var(--light-bg)", border: "2px solid var(--brand-blue)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", color: "var(--brand-blue)", fontWeight: "bold" }}>
             {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 style={{ margin: "0 0 5px 0", color: "var(--text-dark)" }}>{user.name}</h2>
            <p style={{ margin: 0, color: "var(--neutral-gray)" }}>{user.email}</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: "15px", alignItems: "center", fontSize: "1.1rem" }}>
          <strong style={{ color: "var(--brand-blue)" }}>Account ID:</strong>
          <span style={{ color: "var(--neutral-gray)" }}>{user._id}</span>
          
          <strong style={{ color: "var(--brand-blue)" }}>Role:</strong>
          <span style={{ display: "inline-block", background: user.role === 'admin' ? "#fff1b8" : "var(--light-bg)", color: user.role === 'admin' ? "#d48806" : "var(--text-medium)", padding: "4px 12px", borderRadius: "20px", fontSize: "0.9rem", fontWeight: "600", width: "fit-content" }}>
            {user.role.toUpperCase()}
          </span>
        </div>

        <button 
          onClick={handleLogout} 
          style={{ 
            marginTop: "40px", padding: "12px 25px", background: "white", color: "#ff4d4f", 
            border: "1px solid #ff4d4f", borderRadius: "8px", cursor: "pointer", fontSize: "1rem", fontWeight: "600",
            transition: "all 0.2s", alignSelf: "flex-start"
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = "#fff1f0"; }}
          onMouseOut={(e) => { e.currentTarget.style.background = "white"; }}
        >
          Sign Out of Account
        </button>
      </div>
    </div>
    </>
  );
};

export default Profile;
