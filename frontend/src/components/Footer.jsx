import React from "react";
import "../styles/Footer.css";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">

        {/* ========== COL 1: LOGO + ABOUT ========= */}
        <div className="footer-col">
          <img src="/logo.webp" alt="Coaching Promo" className="footer-logo" />
          <p className="footer-text">
            India’s #1 customized event merchandise supplier — T-shirts,
            hoodies, diaries, bottles, trophies & accessories for schools &
            institutes.
          </p>
        </div>

        {/* ========== COL 2: QUICK LINKS ========= */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/categories">Products</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        {/* ========== COL 3: POPULAR CATEGORIES ========= */}
        <div className="footer-col">
          <h4 className="footer-heading">Popular Categories</h4>
          <ul>
            <li><a href="/tshirts">Custom T-Shirts</a></li>
            <li><a href="/hoodies">Custom Hoodies</a></li>
            <li><a href="/diaries">New Year Diaries</a></li>
            <li><a href="/bottles">Bottles & Sippers</a></li>
          </ul>
        </div>




        {/* ========== COL 5: CONTACT ========= */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <p className="contact-item"><MapPin size={18} /> Delhi, India</p>
          <p className="contact-item"><Phone size={18} /> <a href="tel:+918750708222">+91 8750 708222</a></p>
          <p className="contact-item" ><Mail size={18} /> <a href="mailto:sales@coachingpromo.in">sales@coachingpromo.in</a></p>
          <div className="social-icons-1">
            <a href="https://www.facebook.com/profile.php?id=61578398193650"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/coachingpromo.in/"><Instagram size={20} /></a>
            <a href="https://www.linkedin.com/in/mycoaching-promo-a0b4ba380"><Linkedin size={20} /></a>
          </div>
        </div>

      </div>
      {/* ========== COL 4: PARTNERS ========= */}
      <div className="footer-col">
        {/* <h4 className="footer-heading">Our Partners</h4> */}

        <div className="partners-logos">

          <a
            href="https://www.indiamart.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="partner-logo-box"
          >
            <img src="/partners/indiamart.webp" alt="IndiaMART" />
          </a>

          <a
            href="https://www.tradeindia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="partner-logo-box"
          >
            <img src="/partners/tradeindia.webp" alt="TradeIndia" />
          </a>

          <a
            href="https://www.justdial.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="partner-logo-box"
          >
            <img src="/partners/justdial.webp" alt="JustDial" />
          </a>

        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Coaching Promo • All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
