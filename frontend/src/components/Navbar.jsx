import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { Search, User, ChevronDown, GraduationCap, Phone, MessageCircle } from "lucide-react";
import categories from "../data/categories";
import axios from "axios";
import EnquiryModal from "./EnquiryModal";
import RegisterInstituteModal from "./RegisterInstituteModal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(null);
 const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState("");
      const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //  Visitor Count
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

        {/*  TOP BAR */}
        <div className="navbar-top-bar">
          <div className="top-bar-left">
            <div className="logo-section">
              <img src="/logo.webp" alt="Coaching Promo" className="logo-image" />
            </div>

            <div className="visitor-count">Visitors: {visitorCount}</div>
          </div>

          {/* Search + Phone + WhatsApp + CTA */}
          <div className="top-bar-right">

            {/*  Search */}
            <div className="full-search-container">
              {/* <select
                className="category-dropdown"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((cat, i) => (
                  <option key={i} value={cat.category}>{cat.category}</option>
                ))}
              </select> */}

              <input
                type="text"
                placeholder="Search products..."
                className="full-search-input"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <Search className="search-icon" />
            </div>

            {/* Phone Button */}
            <a href="tel:+918750708222" className="phone-btn">
              <Phone size={18} /> Call
            </a>

            {/*  WhatsApp Button */}
            <a
              href="https://wa.me/918750708222"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>

            {/* User */}
            <div className="nav-icon-link">
              <User />
            </div>

            <button onClick={() => setIsRegisterOpen(true)} className="nav-icon-link cart-icon">
              <GraduationCap />
            </button>

            {/*  CTA Get Quote */}
            <a  href="#" onClick={() => setIsEnquiryOpen(true)} className="primary-cta-btn">Get Quote</a>

          </div>
        </div>


        {/*  BOTTOM MENU */}
        <nav className={`navbar-bottom-menu ${isScrolled ? "sticky" : ""}`}>
          <ul className="nav-links">

            <li>
              <a href="/" className="active">Home</a>
            </li>

            {/*  MEGA MENU */}
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

                  {/*  2-column MEGA MENU */}
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
     <EnquiryModal
            isOpen={isEnquiryOpen}
            onClose={() => setIsEnquiryOpen(false)}
        />
         <RegisterInstituteModal
                isOpen={isRegisterOpen}
                onClose={() => setIsRegisterOpen(false)}
              /></>
  );
};

export default Navbar;
