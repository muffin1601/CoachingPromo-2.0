import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SupplyCities from "./components/SupplyCities";
import FloatingButtons from "./components/FloatingButtons";

import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import BlogList from "./pages/BlogList";
import BlogForm from "./pages/BlogForm";
import BlogDetail from "./pages/BlogDetail";
import CategoryPage from "./pages/CategoryPage";
import SubcategoryPage from "./pages/SubcategoryPage";
import SingleProductPage from "./pages/SingleProductPage";
import Login from "./pages/Login";

import ScrollToTop from "./utils/ScrollToTop";
import ProtectedRoute from "./utils/ProtectedRoute";

//  Import admin pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
import HeroManagerPage from "./pages/Admin/HeroManagerPage";
import CategoryManager from "./pages/Admin/CategoryManager";
import SubcategoryManager from "./pages/Admin/SubcategoryManager";
import ProductManager from "./pages/Admin/ProductManager";

//  Layout wrapper to hide Navbar/Footer on admin pages
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Navbar />}
      {children}
      {!isAdmin && (
        <>
          <SupplyCities />
          <Footer />
          <FloatingButtons />
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <LayoutWrapper>
        <Routes>
          {/* ---------- Public Routes ---------- */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/post" element={<BlogForm />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/categories/:slug" element={<CategoryPage />} />
          <Route path="/:categorySlug/:subSlug" element={<SubcategoryPage />} />
          <Route
            path="/:categorySlug/:subSlug/:prodSlug"
            element={<SingleProductPage />}
          />
          <Route path="/login" element={<Login />} />

          {/* ---------- Admin Routes (Protected) ---------- */}
          <Route path="/admin" element={<ProtectedRoute />}>
            <Route index element={<AdminDashboard />} />
            <Route path="banners" element={<HeroManagerPage />} />
            <Route path="categories" element={<CategoryManager />} />
            <Route path="subcategories" element={<SubcategoryManager />} />
            <Route path="products" element={<ProductManager />} />
          </Route>
        </Routes>
      </LayoutWrapper>
    </Router>
  );
};

export default App;
