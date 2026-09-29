import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@/lib/react-router";
import "../styles/RelatedProducts.css";

const RelatedProducts = ({ categorySlug, subSlug, currentProdSlug, onEnquiryClick, initialProducts = [] }) => {
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(initialProducts.length === 0);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const res = await axios.get(
          `${(process.env.NEXT_PUBLIC_API_PATH || "/api")}/subcategories/${categorySlug}/${subSlug}`
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

    if (initialProducts.length > 0) return;
    if (categorySlug && subSlug) {
      fetchRelatedProducts();
    }
  }, [categorySlug, subSlug, currentProdSlug, initialProducts]);

  const getImageUrl = (images) => {
    const img = images?.[0]?.url || images?.[0];
    if (!img) return "/placeholder.jpg";
    if (img.startsWith("http")) return img;
    const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || "") || "";
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
            <article
              key={product._id}
              className="related-product-card"
            >
              <Link to={productUrl} className="related-product-link" aria-label={`View ${product.name}`}>
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
                </div>
              </Link>
              <div className="related-product-content related-product-actions">
                <div className="related-product-footer">
                  <button
                    className="related-product-quote-btn"
                    onClick={() => onEnquiryClick?.()}
                    type="button"
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedProducts;
