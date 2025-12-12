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
    <footer className="footer-wrapper" itemScope itemType="https://schema.org/Organization">
      
      {/* ================= MAIN CONTENT =============== */}
      <div className="footer-container">

        {/* ========== COL 1: LOGO + ABOUT ========= */}
        <div className="footer-col">
          <img
            src="/logo.webp"
            alt="Coaching Promo - Custom Merchandise Supplier for Institutes"
            className="footer-logo"
            itemProp="logo"
          />

          <p className="footer-text" itemProp="description">
            Coaching Promo is India’s leading supplier of
            <strong> custom T-shirts, hoodies, student kits, event merchandise, diaries, bottles, and trophies</strong>
            for Coaching Institutes, Schools, Colleges, and Universities. We help education brands elevate their identity with premium customized products.
          </p>
        </div>

        {/* ========== COL 2: QUICK LINKS ========= */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            <li><a href="/" title="Coaching Promo Home">Home</a></li>
            <li><a href="#categories" title="Browse Custom Products">Products</a></li>
            <li><a href="/blogs" title="Branding & Merchandise Blogs">Blogs</a></li>
            <li><a href="/about" title="About Coaching Promo">About Us</a></li>
            <li>
              <a
                href="/contact"
                title="Contact Coaching Promo – Enquiry & Support"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* ========== COL 3: POPULAR CATEGORIES ========= */}
        <div className="footer-col">
          <h4 className="footer-heading">Popular Categories</h4>
          <ul>
            <li>
              <a href="/apparel-accessories/polo-t-shirts" title="Custom Printed T-Shirts for Institutes">
                Custom T-Shirts
              </a>
            </li>
            <li>
              <a href="/apparel-accessories/hoodies-jackets" title="Customized Hoodies & Jackets">
                Custom Hoodies
              </a>
            </li>
            <li>
              <a href="/promotional-items/diary-set" title="Branded Diaries & Gift Sets">
                New Year Diaries
              </a>
            </li>
            <li>
              <a href="/promotional-items/water-bottle" title="Branded Water Bottles & Sippers">
                Bottles & Sippers
              </a>
            </li>
          </ul>
        </div>

        {/* ========== COL 4: CONTACT ========= */}
        <div className="footer-col" itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
          <h4 className="footer-heading">Contact Us</h4>

          <p className="contact-item" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <MapPin size={18} />
            <span itemProp="addressLocality">Delhi</span>, India
          </p>

          <p className="contact-item">
            <Phone size={18} />
            <a href="tel:+918750708222" itemProp="telephone">+91 8750 708222</a>
          </p>

          <p className="contact-item">
            <Mail size={18} />
            <a href="mailto:sales@coachingpromo.in" itemProp="email">
              sales@coachingpromo.in
            </a>
          </p>

          <div className="social-icons-1">
            <a href="https://www.facebook.com/profile.php?id=61578398193650" title="Coaching Promo Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/coachingpromo.in/" title="Coaching Promo Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mycoaching-promo-a0b4ba380" title="Coaching Promo LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* ================= PARTNERS =============== */}
      <div className="footer-col footer-partners">
        {/* <h4 className="footer-heading partners-heading">Trusted Marketplace Partners</h4> */}

        <div className="partners-logos">
          <a
            href="https://www.indiamart.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="partner-logo-box"
            title="Coaching Promo on IndiaMART"
          >
            <img src="/partners/indiamart.webp" alt="IndiaMART Supplier - Coaching Promo" />
          </a>

          <a
            href="https://www.tradeindia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="partner-logo-box"
            title="Coaching Promo on TradeIndia"
          >
            <img src="/partners/tradeindia.webp" alt="TradeIndia Supplier - Coaching Promo" />
          </a>

          <a
            href="https://www.justdial.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="partner-logo-box"
            title="Coaching Promo on JustDial"
          >
            <img src="/partners/justdial.webp" alt="JustDial Business Listing - Coaching Promo" />
          </a>
        </div>
      </div>

      {/* ================= FOOTER BOTTOM =============== */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Coaching Promo • All Rights Reserved.</p>

        {/* Hidden SEO Keywords for Google */}
        <p className="visually-hidden">
          Custom merchandise for Coaching institutes, branded T-shirts India, corporate gifting for schools,
          promotional products supplier Delhi NCR, custom event kits India, onboarding kits for colleges,
          student welcome kits, custom hoodies, branded diaries, custom bottles, corporate awards,
          trophy manufacturer India, educational Institute branding.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
