import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/RelatedProducts.css";

const RelatedProducts = ({ categorySlug, subSlug, currentProdSlug, onEnquiryClick }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/subcategories/${categorySlug}/${subSlug}`
        );
        if (res.data.success) {
          // Filter out the current product and take only first 4
          const filtered = res.data.products
            .filter((p) => p.slug !== currentProdSlug)
            .slice(0, 4);
          setProducts(filtered);
        }
      } catch (err) {
        console.error("Error fetching related products:", err);
      } finally {
        setLoading(false);
      }
    };

    if (categorySlug && subSlug) {
      fetchRelatedProducts();
    }
  }, [categorySlug, subSlug, currentProdSlug]);

  const getImageUrl = (images) => {
    const img = images?.[0]?.url || images?.[0];
    if (!img) return "/placeholder.jpg";
    if (img.startsWith("http")) return img;
    const baseUrl = import.meta.env.VITE_API_BASE_URL || "";
    return img.startsWith("/uploads") ? `${baseUrl}${img}` : img;
  };

  if (loading) return null;
  if (products.length === 0) return null;

  return (
    <section className="related-products-section">
      <div className="related-products-header">
        <h2 className="related-products-title">You Might Also Like</h2>
        <p className="related-products-subtitle">
          Discover more premium products specially curated for your institute's needs.
        </p>
      </div>

      <div className="related-products-grid">
        {products.map((product) => {
          const productUrl = `/${categorySlug}/${subSlug}/${product.slug}`;
          return (
            <div
              key={product._id}
              className="related-product-card"
              role="button"
              tabIndex={0}
              onClick={() => navigate(productUrl)}
              onKeyDown={(e) => {
                if (e.key === "Enter") navigate(productUrl);
              }}
            >
              <div className="related-product-image-wrap">
                <img
                  src={getImageUrl(product.images)}
                  alt={product.name}
                  className="related-product-image"
                  loading="lazy"
                  decoding="async"
                  width={250}
                  height={250}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
                {product.salePrice && <div className="product-badge">SALE</div>}
              </div>

              <div className="related-product-content">
                <h3 className="related-product-name">{product.name}</h3>
                <div className="related-product-footer">
                  <button
                    className="related-product-quote-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onEnquiryClick?.();
                    }}
                    type="button"
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

export default RelatedProducts;
