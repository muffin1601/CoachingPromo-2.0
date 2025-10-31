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
import ScrollToTop from './utils/ScrollToTop';

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
      </Routes>
      <SupplyCities />
      <Footer />
      <FloatingButtons />
    </Router>
  );
}

export default app;