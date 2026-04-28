import React, { useState, useEffect, lazy, Suspense } from "react";
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
import Sidebar from "./Sidebar";
import UserProfileSidebar from "./UserProfileSidebar";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const EnquiryModal = lazy(() => import("./EnquiryModal"));
const RegisterInstituteModal = lazy(() => import("./RegisterInstituteModal")); 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileSidebarOpen, setProfileSidebarOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Visitor Count (Silent Capture) */
  useEffect(() => {
    let timeoutId;
    let cancelled = false;

    const captureVisitor = () => {
      if (cancelled) return;

      // Generate or retrieve a persistent visitor ID
      let visitorId = localStorage.getItem("visitorId");
      if (!visitorId) {
        // Modern browsers support crypto.randomUUID()
        if (window.crypto && window.crypto.randomUUID) {
          visitorId = window.crypto.randomUUID();
        } else {
          // Fallback for older browsers
          visitorId = Math.random().toString(36).substring(2) + Date.now().toString(36);
        }
        localStorage.setItem("visitorId", visitorId);
      }

      fetch(`${import.meta.env.VITE_API_URL}/visitors/count?vid=${visitorId}`, {
        keepalive: true,
      })
        .catch((err) => console.error("Visitor capture failed", err));
    };

    const scheduleVisitorCapture = () => {
      timeoutId = window.setTimeout(captureVisitor, 15000);
    };

    if (document.readyState === "complete") {
      scheduleVisitorCapture();
    } else {
      window.addEventListener("load", scheduleVisitorCapture, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", scheduleVisitorCapture);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <>
      <header className="navbar-flory">
        <div className={`navbar-container ${isScrolled ? "top-bar-hidden" : ""}`}>
          
          {/* TOP BAR */}
          <div className="navbar-top-bar">
            <div className="top-bar-left">
              <div className="logo-section">
                <img 
                  src="/logo.webp" 
                  alt="Coaching Promo" 
                  className="logo-image"
                  width={160}
                  height={70}
                  decoding="async"
                />
              </div>
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
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && searchInput.trim()) {
                      navigate(`/search?q=${searchInput}`);
                    }
                  }}
                />
                <Search 
                  className="search-icon" 
                  onClick={() => searchInput.trim() && navigate(`/search?q=${searchInput}`)} 
                  style={{ cursor: "pointer" }}
                />
              </div>

              {/* Phone */}
              <a href="tel:+918800898643" className="phone-link">
                <Phone size={18} /> 88008 98643
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918800898643"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>

              {/* User Icon */}
              <button
                onClick={() => user ? setProfileSidebarOpen(true) : navigate("/login")}
                className="nav-icon-link"
                aria-label={user ? "Profile Sidebar" : "Login"}
                title={user ? `Hello, ${user.name}` : "Log in"}
              >
                <User />
              </button>
              

              {/* Register Institute Modal */}
              <button
                onClick={() => setIsRegisterOpen(true)}
                className="nav-icon-link cart-icon"
                aria-label="Register"
              >
                <GraduationCap />
              </button>

              {/* CTA – Get Quote */}
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="primary-cta-btn"
              >
                Get Quote
              </button>

            </div>

            {/* MOBILE HAMBURGER */}
            <button
              className="hamburger-btn mobile-only"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Toggle navigation menu"
            >
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
                                  <a className="dropdown-category-title">
                                    {sub.name}
                                  </a>

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

      {/* USER PROFILE SIDEBAR */}
      <UserProfileSidebar isOpen={profileSidebarOpen} onClose={() => setProfileSidebarOpen(false)} />

      {/*  LAZY-LOADED MODALS */}
      <Suspense fallback={null}>
        {isEnquiryOpen && (
          <EnquiryModal
            isOpen={isEnquiryOpen}
            onClose={() => setIsEnquiryOpen(false)}
            image="/assets/enquiry.webp"
          />
        )}

        {isRegisterOpen && (
          <RegisterInstituteModal
            isOpen={isRegisterOpen}
            onClose={() => setIsRegisterOpen(false)}
          />
        )}
      </Suspense>
    </>
  );
};

export default Navbar;
