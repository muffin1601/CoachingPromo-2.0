import React from "react";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "@/lib/react-router";

const SearchGrid = ({ products }) => (
  <section className="product-list-container" aria-label="Search results">
    <div className="product-list-grid">
      {products.map((product) => {
        const categorySlug = product.category?.slug || "category";
        const subcategorySlug = product.subcategory?.slug || "subcategory";
        const image = product.images?.[0];
        const hasRealRating = product.ratings?.average > 0 && product.ratings?.count > 0;

        return (
          <Link key={product._id || product.slug} to={`/${categorySlug}/${subcategorySlug}/${product.slug}`} className="product-card product-card-inner-link">
            <img src={image?.url || "/logo.webp"} alt={image?.altText || product.name} className="product-card-media" loading="lazy" decoding="async" width="320" height="320" />
            <div className="product-content">
              <span className="editorial-eyebrow">{product.category?.name || "Custom merchandise"}</span>
              <h3 className="product-card-title">{product.name}</h3>
              {hasRealRating && <p className="product-rating"><Star size={14} aria-hidden="true" /> {product.ratings.average} ({product.ratings.count})</p>}
              <span className="product-readmore-link">View product <ArrowRight size={15} aria-hidden="true" /></span>
            </div>
          </Link>
        );
      })}
    </div>
  </section>
);

export default SearchGrid;
