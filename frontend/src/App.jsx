import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import SupplyCities from './components/SupplyCities';
import ContactPage from './pages/ContactPage';
import AboutUsPage from './pages/AboutUsPage';
import FloatingButtons from './components/FloatingButtons';
import BlogList from './pages/BlogList';
import BlogForm from './pages/BlogForm';
import BlogDetail from './pages/BlogDetail';
import ScrollToTop from './utils/ScrollToTop';
import CategoryPage from './pages/CategoryPage';
import SubcategoryPage from './pages/SubcategoryPage';
import SingleProductPage from './pages/SingleProductPage';
import Login from './pages/Login';

const app =() => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/contact" element={ <ContactPage />} />
        <Route path="/about" element={ <AboutUsPage />} />
        <Route path="/blogs" element={ <BlogList />} />
        <Route path="/blogs/post" element={ <BlogForm />} />
        <Route path="/blogs/:id" element={ <BlogDetail />} />

        <Route path="/categories/:slug" element={ <CategoryPage />} />
        <Route path="/:categorySlug/:subSlug" element={ <SubcategoryPage />} />
        <Route path="/:categorySlug/:subSlug/:prodSlug" element={ <SingleProductPage/>} />

        <Route path="/login" element={<Login />} />
      </Routes>
      <SupplyCities />
      <Footer />
      <FloatingButtons />
    </Router>
  );
}

export default app;