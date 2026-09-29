import React from "react";
import { Search, Bell, User, LogOut } from "lucide-react";

const AdminNavbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userInfo");
    window.location.href = "/";
  };

  return (
    <nav className="admin-navbar-container">
      {/* ===== LEFT SECTION ===== */}
      <div className="admin-navbar-left">
        <h2 className="admin-navbar-title"> Welcome!!!!</h2>
      </div>

      {/* ===== RIGHT SECTION ===== */}
      <div className="admin-navbar-right">
        {/* Search */}
        <div className="admin-navbar-search">
          <Search className="admin-navbar-search-icon" size={18} />
          <input type="text" placeholder="Search" />
        </div>

        {/* Icons */}
        <div className="admin-navbar-actions">
          <div className="admin-navbar-icon-box">
            <Bell className="admin-navbar-icon" />
            <span className="admin-navbar-notif-dot"></span>
          </div>

          <div className="admin-navbar-profile">
            <User className="admin-navbar-icon" />
            <span className="admin-navbar-username">Admin</span>
          </div>

          <button className="admin-navbar-logout" onClick={handleLogout}>
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;


import "./Navbar.jsx.css";
