import React from "react";
import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";

const SearchGrid = ({ products }) => {
  if (!products?.length)
    return <p className="text-center p-8">No matching products.</p>;

  return (
    <div className="product-list-container">
      <div className="product-list-grid">
        {products.map((product) => {
          const { _id, slug, name, images, price, salePrice, ratings } = product;
          const catSlug = product.category?.slug || "category";
          const subSlug = product.subcategory?.slug || "subcategory";

          return (
            <Link key={_id} to={`/${catSlug}/${subSlug}/${slug}`} className="product-card">
              <img
                src={images?.[0]?.url}
                alt={images?.[0]?.altText || name}
                className="product-card-media"
                loading="lazy"
              />

              <div className="product-content">
                <h3 className="product-card-title">{name}</h3>

                {/* PRICE */}
                <div className="product-price-wrapper">
                  {salePrice ? (
                    <>
                      <span className="product-sale-price">₹{salePrice}</span>
                      <span className="product-main-price">₹{price}</span>
                    </>
                  ) : (
                    <span className="product-regular-price">₹{price}</span>
                  )}
                </div>

                {/* RATING */}
                {ratings?.average > 0 && (
                  <p className="product-rating">
                    <Star size={16} /> {ratings.average} ({ratings.count})
                  </p>
                )}

                <span className="product-readmore-link">
                  View Details <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchGrid;
