import { useEffect } from "react";
import { useLocation } from "@/lib/react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  //  Run when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  //  Run once on initial page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return null;
};

export default ScrollToTop;
