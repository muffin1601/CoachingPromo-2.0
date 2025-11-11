import React, { useState } from "react";
import EnquiryModal from "./EnquiryModal";

import {
  X,
  ChevronDown,
  Search,
  Phone,
  MessageCircle
} from "lucide-react";
import categories from "../data/categories";
import "../styles/Sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      window.location.href = `/search?q=${searchInput}`;
    }
  };

  return (
    <>
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
            <Search className="sidebar-search-icon" onClick={handleSearch} />

            <input
              type="text"
              placeholder="Search products..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
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
          <a className="sidebar-cta" onClick={() => setIsEnquiryOpen(true)}>
            Get Quote
          </a>

          {/* Phone & WhatsApp Buttons */}
          <div className="sidebar-contact-buttons">
            <a href="tel:+918750708222" className="sidebar-contact-item">
              <Phone size={20} /> Call Us
            </a>

            <a
              href="https://wa.me/918750708222"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-contact-item whatsapp"
            >
              <MessageCircle size={20} /> WhatsApp
            </a>
          </div>

        </div>
      </div>

      {/* Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        image="/assets/enquiry.webp"
      />
    </>
  );
};

export default Sidebar;
