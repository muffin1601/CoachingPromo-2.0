import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart } from "lucide-react";
import "../styles/RelatedProducts.css";

const RelatedProducts = ({ categorySlug, subSlug, currentProdSlug, onEnquiryClick }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
    const baseUrl = import.meta.env.VITE_API_BASE_URL || "https://coachingpromo.in";
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
        {products.map((product) => (
          <div key={product._id} className="related-product-card">
            <Link to={`/${categorySlug}/${subSlug}/${product.slug}`} className="related-product-image-wrap">
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
            </Link>

            <div className="related-product-content">
              <span className="related-product-category">{subSlug.replace(/-/g, ' ')}</span>
              <h3 className="related-product-name">{product.name}</h3>
              <div className="related-product-footer">
                <div 
                  className="related-product-price" 
                  onClick={onEnquiryClick}
                  title="Click to get a quote"
                >
                  <span>Get a Quote</span>
                </div>
                <Link to={`/${categorySlug}/${subSlug}/${product.slug}`} className="related-product-btn">
                  View Detail <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
