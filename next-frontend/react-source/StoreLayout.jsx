
import React, { Suspense, lazy, useEffect, useState } from "react";
import { useLocation, useNavigate } from "@/lib/react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SupplyCities from "./components/SupplyCities";
import LeadFormModal from "./components/LeadFormModal";
import dynamic from "next/dynamic";
const Chatbot = dynamic(() => import("./components/Chatbot/Chatbot"), { ssr: false });
const FloatingButtons = lazy(() => import("./components/FloatingButtons"));
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAdmin = location.pathname.startsWith("/admin");
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [showDeferredUi, setShowDeferredUi] = useState(false);

  useEffect(() => {
    if (isAdmin) {
      setShowDeferredUi(false);
      return undefined;
    }

    let timeoutId;
    const triggerEvents = ["pointerdown", "keydown", "touchstart", "scroll"];
    const showUi = () => {
      setShowDeferredUi(true);
      triggerEvents.forEach((eventName) => {
        window.removeEventListener(eventName, showUi);
      });
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };

    triggerEvents.forEach((eventName) => {
      window.addEventListener(eventName, showUi, {
        passive: true,
        once: true,
      });
    });
    timeoutId = window.setTimeout(showUi, 15000);

    return () => {
      triggerEvents.forEach((eventName) => {
        window.removeEventListener(eventName, showUi);
      });
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [isAdmin, location.pathname]);


  return (
    <>
      {!isAdmin && (
        <>
          {/* {location.pathname === "/" && (
            <OfferModal onBannerClick={() => setIsLeadFormOpen(true)} />
          )} */}
          <LeadFormModal 
            isOpen={isLeadFormOpen} 
            onClose={() => setIsLeadFormOpen(false)} 
            onSuccess={() => {
              setIsLeadFormOpen(false);
              navigate("/offers");
            }} 
          />
          <Navbar />
        </>
      )}

      <main id="main-content" role="main">
        {children}
      </main>

      {!isAdmin && <SupplyCities />}
      {!isAdmin && <Footer />}
      {!isAdmin && showDeferredUi && (
        <Suspense fallback={null}>
          <Chatbot />
        </Suspense>
      )}
      {!isAdmin && showDeferredUi && (
        <Suspense fallback={null}>
          <FloatingButtons />
        </Suspense>
      )}
    </>
  );
};


export default LayoutWrapper;
