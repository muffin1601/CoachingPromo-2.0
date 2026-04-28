import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SupplyCities from "./components/SupplyCities";
const Chatbot = lazy(() => import("./components/Chatbot/Chatbot"));
const FloatingButtons = lazy(() => import("./components/FloatingButtons"));

// Public pages
import Home from "./pages/Home";
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const BlogList = lazy(() => import("./pages/BlogList"));
const BlogForm = lazy(() => import("./pages/BlogForm"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const SubcategoryPage = lazy(() => import("./pages/SubcategoryPage"));
const SingleProductPage = lazy(() => import("./pages/SingleProductPage"));
const CustomizerSVG = lazy(() => import("./pages/Customize/CustomizerSVG"));
const CustomizerAll = lazy(() => import("./pages/Customize/CustomizerAll"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const Profile = lazy(() => import("./pages/Profile"));
const OffersPage = lazy(() => import("./pages/OffersPage"));

const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const SearchResults = lazy(() => import("./pages/SearchResults"));
const Favorites = lazy(() => import("./pages/Favorites"));

import LeadFormModal from "./components/LeadFormModal";

// Admin pages
const AdminDashboard = lazy(() => import("./pages/Admin/AdminDashboard"));
const HeroManagerPage = lazy(() =>
  import("./pages/Admin/HeroManagerPage")
);
const CategoryManager = lazy(() =>
  import("./pages/Admin/CategoryManagerPage")
);
const SubcategoryManager = lazy(() =>
  import("./pages/Admin/SubcategoryManagerPage")
);
const ProductManager = lazy(() =>
  import("./pages/Admin/ProductManagerPage")
);
const OrderManager = lazy(() =>
  import("./pages/Admin/OrderManagerPage")
);

// Utilities
import ScrollToTop from "./utils/ScrollToTop";
import ProtectedRoute from "./utils/ProtectedRoute";

// Skeleton fallback for smoother UX
const Loader = () => (
  <div style={{ padding: "40px", textAlign: "center" }}>Loading…</div>
);

// Layout wrapper (keeps Navbar/Footer off admin pages)
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
    const idleCallbackId = window.requestIdleCallback?.(
      () => setShowDeferredUi(true),
      { timeout: 1500 }
    );

    if (!idleCallbackId) {
      timeoutId = window.setTimeout(() => setShowDeferredUi(true), 900);
    }

    return () => {
      if (idleCallbackId) {
        window.cancelIdleCallback?.(idleCallbackId);
      }
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

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <LayoutWrapper>
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/post" element={<BlogForm />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/categories/:slug" element={<CategoryPage />} />
            <Route
              path="/:categorySlug/:subSlug"
              element={<SubcategoryPage />}
            />
            <Route
              path="/:categorySlug/:subSlug/:prodSlug"
              element={<SingleProductPage />}
            />
            <Route path="/product/:prodSlug" element={<SingleProductPage />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/resetpassword/:token" element={<ResetPassword />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route
              path="/customize/:productType"
              element={<CustomizerSVG />}
            />
            <Route path="/customize/all" element={<CustomizerAll />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<ProtectedRoute />}>
              <Route index element={<AdminDashboard />} />
              <Route path="banners" element={<HeroManagerPage />} />
              <Route path="categories" element={<CategoryManager />} />
              <Route path="subcategories" element={<SubcategoryManager />} />
              <Route path="products" element={<ProductManager />} />
              <Route path="orders" element={<OrderManager />} />
            </Route>
          </Routes>
        </Suspense>
      </LayoutWrapper>
    </Router>
  );
};



export default App;
