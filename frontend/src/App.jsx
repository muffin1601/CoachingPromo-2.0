import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Lazy-load everything except Navbar/Footer/Home (critical display)
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const SupplyCities = lazy(() => import("./components/SupplyCities"));
const FloatingButtons = lazy(() => import("./components/FloatingButtons"));

// Public pages
const Home = lazy(() => import("./pages/Home"));
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
const SearchResults = lazy(() => import("./pages/SearchResults"));

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

// Utilities
import ScrollToTop from "./utils/ScrollToTop";
import ProtectedRoute from "./utils/ProtectedRoute";
import Chatbot from "./components/Chatbot/Chatbot";

// Skeleton fallback for smoother UX
const Loader = () => (
  <div style={{ padding: "40px", textAlign: "center" }}>Loading…</div>
);

// Layout wrapper (keeps Navbar/Footer off admin pages)
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && (
        <Suspense fallback={<Loader />}>
          <Navbar />
        </Suspense>
      )}

      <main id="main-content" role="main">
        {children}
      </main>

      {!isAdmin && (
        <Suspense fallback={<Loader />}>
          <Chatbot />
          <SupplyCities />
          <Footer />
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
            <Route path="/search" element={<SearchResults />} />
            <Route path="/login" element={<Login />} />

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
            </Route>
          </Routes>
        </Suspense>
      </LayoutWrapper>
    </Router>
  );
};

export default App;
