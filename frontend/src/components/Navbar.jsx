import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { Search, User,  ChevronDown,GraduationCap, } from "lucide-react";
import categories from "../data/categories";
import axios from "axios";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/visitors/count`) 
      .then((res) => setVisitorCount(res.data.totalVisitors))
      .catch((err) => console.error("Failed to fetch visitor count", err));
  }, []);

  const toggleSearch = () => setShowSearchBar((prev) => !prev);

  return (
    <header className="navbar-flory">
      <div className={`navbar-container ${isScrolled ? "top-bar-hidden" : ""}`}>

        {/* ✅ TOP BAR */}
        <div className="navbar-top-bar">
          <div className="top-bar-left">
            <div className="logo-section">
              <img src="/logo.webp" alt="Coaching Promo" className="logo-image" />
            </div>

            <div className="visitor-count">
              Visitors: {visitorCount}
            </div>
          </div>

          <div className="top-bar-right">
            
              <div className="full-search-container">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="full-search-input"
                />
                <Search className="search-icon" onClick={toggleSearch} />
              </div>
             

            <div className="nav-icon-link">
              <User />
            </div>

            <div className="nav-icon-link cart-icon">
              <GraduationCap />
            </div>
          </div>
        </div>

        
        <nav className={`navbar-bottom-menu ${isScrolled ? "sticky" : ""}`}>
          <ul className="nav-links">

            <li>
              <a href="/" className="active">Home</a>
            </li>

          
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
                  {/*  Category Link */}
                  <a href={cat.href}>
                    {cat.category} <ChevronDown size={16} />
                  </a>

                  {/*  Mega Menu */}
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

                                {/* Subcategory Link */}
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

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
