import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Image,
  Layers,
  Package,
  ShoppingBag,
} from "lucide-react";


const Sidebar = () => {
  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-header">
        <NavLink to="/" end style={{ display: "inline-block" }}>
          <img
            src="/logo.webp"
            alt="Logo"
            className="admin-sidebar-logo"
            style={{ width: 180, height: 80, objectFit: "contain", borderRadius: 6, display: "flex",  justifyContent: "center", }}
          />
        </NavLink>
        
      </div>

      <ul className="admin-sidebar-menu">
        <li>
          <NavLink to="/admin" end>
            <LayoutDashboard className="icon" />
            <span>Dashboard Overview</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/banners">
            <Image className="icon" />
            <span>Hero Banners</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/categories">
            <Layers className="icon" />
            <span>Categories</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/subcategories">
            <Package className="icon" />
            <span>Subcategories</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/products">
            <ShoppingBag className="icon" />
            <span>Products</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

const css = `
:root {
  --brand-blue: #0b4a8d;
  --brand-orange: #d17504;
  --neutral-gray: #555;
  --light-border: #e4e4e4;
  --light-bg: #fafafa;
}

/* SIDEBAR BASE */
.admin-sidebar {
  width: 260px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--light-bg);
  font-family: "Outfit", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 25px 15px;
  box-shadow: 4px 0 15px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;
}

/* HEADER */
.admin-sidebar-header {
  text-align: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  margin-left: 10px;
}

/* MENU */
.admin-sidebar-menu {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  margin: 0;
}

.admin-sidebar-menu li {
  display: flex;
}

.admin-sidebar-menu a {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px 14px;
  text-decoration: none;
  color: var(--neutral-gray);
  font-size: 17px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

/* ===== HOVER ===== */
.admin-sidebar-menu a:hover {
  background: rgba(11, 74, 141, 0.08);
  color: var(--brand-blue);
}

/* ===== ACTIVE LINK ===== */
.admin-sidebar-menu a.active {
  background: var(--brand-orange);
  color: #fff;
}

/* ===== ICONS ===== */
.admin-sidebar-menu .icon {
  width: 22px;
  height: 22px;
  stroke-width: 2px;
  color: var(--brand-blue);
  transition: color 0.3s ease;
}

/* ✅ Only when the link is ACTIVE, icon becomes white */
.admin-sidebar-menu a.active .icon {
  color: #fff;
}
;`

  const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);