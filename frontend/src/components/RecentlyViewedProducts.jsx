import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, History } from "lucide-react";
import "../styles/RecentlyViewedProducts.css";

const RecentlyViewedProducts = ({ currentProdSlug, onEnquiryClick }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getRecentlyViewed = () => {
      const stored = localStorage.getItem("recentlyViewed");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          // Filter out current product and return items
          const filtered = parsed.filter(p => p.slug !== currentProdSlug).slice(0, 4);
          setProducts(filtered);
        } catch (e) {
          console.error("Error parsing recently viewed", e);
        }
      }
    };

    getRecentlyViewed();
    
    // Listen for storage changes in case other tabs update it
    window.addEventListener('storage', getRecentlyViewed);
    return () => window.removeEventListener('storage', getRecentlyViewed);
  }, [currentProdSlug]);

  const getImageUrl = (images) => {
    const img = images?.[0]?.url || images?.[0];
    if (!img) return "/placeholder.jpg";
    if (img.startsWith("http")) return img;
    const baseUrl = import.meta.env.VITE_API_BASE_URL || "https://coachingpromo.in";
    return img.startsWith("/uploads") ? `${baseUrl}${img}` : img;
  };

  if (products.length === 0) return null;

  return (
    <section className="recently-viewed-section">
      <div className="recently-viewed-header">
        <div className="rv-title-wrap">
            <History className="rv-icon" size={24} />
            <h2 className="recently-viewed-title">Recently Viewed</h2>
        </div>
        <p className="recently-viewed-subtitle">
          Jump back into the products you've recently explored.
        </p>
      </div>

      <div className="recently-viewed-grid">
        {products.map((product) => (
          <div key={product._id || product.id} className="rv-product-card">
            <Link to={`/${product.categorySlug}/${product.subSlug}/${product.slug}`} className="rv-product-image-wrap">
              <img
                src={getImageUrl(product.images)}
                alt={product.name}
                className="rv-product-image"
                loading="lazy"
              />
            </Link>

            <div className="rv-product-content">
              <h3 className="rv-product-name">{product.name}</h3>
              <div className="rv-product-footer">
                <span 
                  className="rv-product-price" 
                  onClick={onEnquiryClick}
                  title="Click to get a quote"
                >
                  Get a Quote
                </span>
                <Link to={`/${product.categorySlug}/${product.subSlug}/${product.slug}`} className="rv-product-btn">
                  View Detail <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentlyViewedProducts;
