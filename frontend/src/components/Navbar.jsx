import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import {
  Search,
  User,
  ChevronDown,
  GraduationCap,
  Phone,
  MessageCircle,
  Menu
} from "lucide-react";
import categories from "../data/categories";
import axios from "axios";
import EnquiryModal from "./EnquiryModal";
import RegisterInstituteModal from "./RegisterInstituteModal";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Visitor Count
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/visitors/count`)
      .then((res) => setVisitorCount(res.data.totalVisitors))
      .catch((err) => console.error("Failed to fetch visitor count", err));
  }, []);

  return (
    <>
      <header className="navbar-flory">
        <div className={`navbar-container ${isScrolled ? "top-bar-hidden" : ""}`}>
          
          {/* TOP BAR */}
          <div className="navbar-top-bar">

            <div className="top-bar-left">
              <div className="logo-section">
                <img src="/logo.webp" alt="Coaching Promo" className="logo-image" />
              </div>

              <div className="visitor-count desktop-only">Visitors: {visitorCount}</div>
            </div>

            {/* RIGHT SECTION */}
            <div className="top-bar-right desktop-only">

              {/* Search */}
              <div className="full-search-container">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="full-search-input"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <Search className="search-icon" />
              </div>

              {/* Phone */}
              <a href="tel:+918750708222" className="phone-btn">
                <Phone size={18} /> Call
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918750708222"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>

              {/* User */}
              <button onClick={() => (window.location.href = "/login")} className="nav-icon-link">
                <User />
              </button>

              <button onClick={() => setIsRegisterOpen(true)} className="nav-icon-link cart-icon">
                <GraduationCap />
              </button>

              {/* CTA */}
              <a href="#" onClick={() => setIsEnquiryOpen(true)} className="primary-cta-btn">
                Get Quote
              </a>

            </div>

            {/* MOBILE HAMBURGER */}
            <button className="hamburger-btn mobile-only" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={28} />
            </button>

          </div>

          {/* DESKTOP MENU */}
          <nav className={`navbar-bottom-menu desktop-only ${isScrolled ? "sticky" : ""}`}>
            <ul className="nav-links">
              <li><a href="/" className="active">Home</a></li>

              {categories.map((cat, i) => (
                <li className="dropdown" key={i}>
                  <div
                    className="dropdown-wrapper"
                    onMouseEnter={() => setDropdownOpen(cat.category)}
                    onMouseLeave={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget)) {
                        setDropdownOpen(null);
                      }
                    }}
                  >
                    <a href={cat.href}>
                      {cat.category} <ChevronDown size={16} />
                    </a>

                    {dropdownOpen === cat.category && (
                      <div className="mega-dropdown">
                        {Array.from({
                          length: Math.ceil(cat.subcategories.length / 2),
                        }).map((_, columnIndex) => {
                          const subGroup = cat.subcategories.slice(
                            columnIndex * 2,
                            columnIndex * 2 + 2
                          );

                          return (
                            <div className="mega-column" key={columnIndex}>
                              {subGroup.map((sub, subIndex) => (
                                <div className="dropdown-category" key={subIndex}>
                                  <li href={sub.href} className="dropdown-category-title">
                                    {sub.name}
                                  </li>

                                  <ul>
                                    {sub.products?.map((prod, j) => (
                                      <li key={j}>
                                        <a href={prod.href}>{prod.name}</a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </li>
              ))}

              <li><a href="/blogs">Blog</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>

            </ul>
          </nav>

        </div>
      </header>

      {/* SIDEBAR MOBILE MENU */}
      <Sidebar isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* MODALS */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        image="/assets/enquiry.webp"
      />

      <RegisterInstituteModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </>
  );
};

export default Navbar;
