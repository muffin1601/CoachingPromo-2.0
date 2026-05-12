import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { History } from "lucide-react";
import "../styles/RecentlyViewedProducts.css";

const RecentlyViewedProducts = ({ currentProdSlug, onEnquiryClick }) => {
  const navigate = useNavigate();
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
        {products.map((product) => {
          const productUrl = `/${product.categorySlug}/${product.subSlug}/${product.slug}`;
          return (
            <div
              key={product._id || product.id}
              className="rv-product-card"
              role="button"
              tabIndex={0}
              onClick={() => navigate(productUrl)}
              onKeyDown={(e) => {
                if (e.key === "Enter") navigate(productUrl);
              }}
            >
              <div className="rv-product-image-wrap">
                <img
                  src={getImageUrl(product.images)}
                  alt={product.name}
                  className="rv-product-image"
                  loading="lazy"
                />
              </div>

              <div className="rv-product-content">
                <h3 className="rv-product-name">{product.name}</h3>
                <div className="rv-product-footer">
                  <button
                    className="rv-product-quote-btn"
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onEnquiryClick?.();
                    }}
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecentlyViewedProducts;
