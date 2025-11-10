import React from "react";
import {
  X,
  ChevronDown,
  Search
} from "lucide-react";
import categories from "../data/categories";
import "../styles/Sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar-overlay ${isOpen ? "open" : ""}`}>
      <div className="sidebar">
        {/* Header */}
        <div className="sidebar-header">
          <div className="logo-section-2">
                <img src="/logo.webp" alt="Coaching Promo" className="logo-image-2" />
              </div>
          <button className="close-btn" onClick={onClose}>
            <X size={26} />
          </button>
        </div>

        {/* Search */}
        <div className="sidebar-search">
          <Search />
          <input type="text" placeholder="Search products..." />
        </div>

        {/* Categories */}
         
        <ul className="sidebar-list">
            <li><a href="/">Home</a></li>
          {categories.map((cat, index) => (
            <li key={index}>
              <details>
                <summary>
                  {cat.category}
                  <ChevronDown size={16} />
                </summary>

                {cat.subcategories.map((sub, i) => (
                  <div key={i} className="sidebar-sub">
                    <p className="sub-title">{sub.name}</p>
                    <ul>
                      {sub.products.map((prod, j) => (
                        <li key={j}>
                          <a href={prod.href}>{prod.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </details>
            </li>
          ))}

          <li><a href="/blogs">Blogs</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>

        {/* CTA */}
        <a className="sidebar-cta" href="#" onClick={onClose}>Get Quote</a>
      </div>
    </div>
  );
};

export default Sidebar;
