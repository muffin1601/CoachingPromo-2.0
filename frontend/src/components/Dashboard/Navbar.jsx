import React from "react";
import { Search, Bell, User, LogOut } from "lucide-react";

const AdminNavbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <nav className="admin-navbar-container">
      {/* ===== LEFT SECTION ===== */}
      <div className="admin-navbar-left">
        <h2 className="admin-navbar-title">Dashboard</h2>
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

const css = `:root {
  --brand-blue: #0b4a8d;
  --brand-orange: #d17504;
  --neutral-gray: #555;
  --light-border: #e4e4e4;
  --light-bg: #fafafa;
  --shadow-soft: 0 4px 20px rgba(0, 0, 0, 0.08);
  --glass-bg: rgba(255, 255, 255, 0.75);
  --glass-border: rgba(255, 255, 255, 0.4);
}

/* ===== NAVBAR CONTAINER ===== */
.admin-navbar-container {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--light-bg);
  border-bottom: 1px solid var(--light-border);
  padding: 14px 42px 14px 32px;
margin-left: 30px;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
  overflow: hidden;
}

/* ===== LEFT SIDE ===== */
.admin-navbar-left {
  display: flex;
  align-items: center;
}

.admin-navbar-title {
  color: var(--brand-blue);
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

/* ===== RIGHT SIDE ===== */
.admin-navbar-right {
  display: flex;
  align-items: center;
  gap: 22px;
}

/* ===== SEARCH BAR ===== */
.admin-navbar-search {
  display: flex;
  align-items: center;
  background: white;
  border: 1px solid var(--light-border);
  border-radius: 25px;
  font-family: "Outfit", sans-serif;
  padding: 6px 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: 0.25s ease;
}

.admin-navbar-search:hover {
  border-color: var(--brand-blue);
  box-shadow: 0 3px 10px rgba(11, 74, 141, 0.15);
}

.admin-navbar-search input {
  border: none;
  outline: none;
  margin-left: 6px;
  font-size: 0.9rem;
  color: var(--neutral-gray);
  font-family: "Outfit", sans-serif;
  background: transparent;
  width: 180px;
}

.admin-navbar-search-icon {
  color: var(--brand-blue);
}

/* ===== ACTION ICONS SECTION ===== */
.admin-navbar-actions {
  display: flex;
  align-items: center;
  gap: 18px;
}

/* ICON BOX */
.admin-navbar-icon-box {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 50%;
  padding: 8px;
  border: 1px solid var(--light-border);
  transition: all 0.25s ease;
  cursor: pointer;
}

.admin-navbar-icon-box:hover {
  background: var(--brand-orange);
  border-color: var(--brand-orange);
}

.admin-navbar-icon-box:hover .admin-navbar-icon {
  color: #fff;
}

/* NOTIFICATION DOT */
.admin-navbar-notif-dot {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--brand-orange);
}

/* PROFILE BOX */
.admin-navbar-profile {
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  border: 1px solid var(--light-border);
  border-radius: 30px;
  padding: 6px 14px;
  transition: 0.3s ease;
  cursor: pointer;
}

.admin-navbar-profile:hover {
  background: var(--brand-blue);
  border-color: var(--brand-blue);
}

.admin-navbar-profile:hover .admin-navbar-icon,
.admin-navbar-profile:hover .admin-navbar-username {
  color: #fff;
}

.admin-navbar-username {
  font-size: 0.9rem;
  color: var(--neutral-gray);
  font-weight: 500;
}

/* ICON BASE STYLE */
.admin-navbar-icon {
  color: var(--brand-blue);
  width: 20px;
  height: 20px;
  transition: color 0.2s ease;
}

/* ===== LOGOUT BUTTON ===== */
.admin-navbar-logout {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--brand-orange);
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 8px 14px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 8px rgba(209, 117, 4, 0.25);
}

.admin-navbar-logout:hover {
  background: #c46303;
  transform: translateY(-2px);
  box-shadow: 0 5px 12px rgba(209, 117, 4, 0.35);
}

.admin-navbar-logout span {
  font-weight: 500;
  font-family: "Outfit", sans-serif;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .admin-navbar-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 14px 16px;
  }

  .admin-navbar-right {
    width: 100%;
    justify-content: space-between;
  }

  .admin-navbar-search input {
    width: 100px;
  }

  .admin-navbar-username {
    display: none;
  }

  .admin-navbar-logout span {
    display: none;
  }
}

`;
const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);