import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GraduationCap, PhoneCall } from "lucide-react";
import "../styles/FloatingButtons.css";

import EnquiryModal from "./EnquiryModal";
import RegisterInstituteModal from "./RegisterInstituteModal";

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowScroll(true);
      else setShowScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* LEFT — SCROLL TO TOP */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="floatingBtn scrollTopBtn"
          aria-label="Scroll to top"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 15V5M10 5L5 10M10 5l5 5"
              stroke="#ffffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {/* RIGHT — REGISTER + WHATSAPP + ENQUIRY */}
      <div className="floatingRight">
        {/*  REGISTER INSTITUTE BUTTON */}
        <button
          onClick={() => setIsRegisterOpen(true)}
          className="floatingBtn registerBtn-1"
          aria-label="Register Institute"
          title="Register Institute"
        >
          <GraduationCap size={28} />
        </button>

        {/*  WHATSAPP */}
        <a
          href="https://wa.me/918750708222"
          target="_blank"
          rel="noopener noreferrer"
          className="floatingBtn whatsappBtn"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>

        {/*  ENQUIRY */}
        <div className="enquiryHint">
          <PhoneCall size={16} strokeWidth={2.5} />
          Request a Call
        </div>
        <button
          onClick={() => setIsEnquiryOpen(true)}
          className="floatingBtn enquiryBtn"
          aria-label="Enquiry"
        >
          <FiMail size={28} />
        </button>
      </div>

      {/*  MODALS */}
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

export default FloatingButtons;
