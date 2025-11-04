import React from "react";
import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";

const ProductGrid = ({ products, catSlug, subSlug }) => {
  if (!products?.length)
    return <p className="text-center p-8">No Products Found</p>;

  return (
    <div className="product-list-container">
      <div className="product-list-grid">
        {products.map((product) => {
          const { _id, slug, name, images, price, salePrice, ratings } = product;

          return (
            <Link
              key={_id}
              to={`/${catSlug}/${subSlug}/${slug}`}
              className="product-card"
            >
              {/* BADGE IF SALE
              {salePrice && <span className="sale-badge">Sale</span>} */}

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

                {/* CTA */}
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

export default ProductGrid;

const css = `
:root {
  --brand-blue: #0b4a8d;
  --brand-orange: #d17504;
  --neutral-gray: #444;
  --light-border: #e4e4e4;
  --light-bg: #fafafa;
}

/* CONTAINER */
.product-list-container {
  max-width: 80%;
  margin: 50px auto;
}

/* GRID */
.product-list-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 32px;
}

/* CARD */
.product-card {
  background: #fdf6e9ff;
  // border-radius: 14px;
  border: 1px solid var(--light-border);
  overflow: hidden;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
}

.product-card:hover {
  box-shadow: 0 12px 30px rgba(0,0,0,0.11);
  transform: translateY(-1px);
}

/* SALE BADGE */
.sale-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: var(--brand-orange);
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 8px;
  z-index: 3;
}

/* IMAGE */
.product-card-media {
  width: 100%;
  height: 270px;
  object-fit: cover;
}

/* CONTENT */
.product-content {
  padding: 16px 18px 20px;
}

/* NAME */
.product-card-title {
  font-size: 18px;
  font-weight: 600;
  color: #111;
  line-height: 1.3;
  margin-bottom: 12px;
}

/* PRICE WRAPPER */
.product-price-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

/* PRICES */
.product-regular-price {
  font-size: 18px;
  font-weight: 600;
  color: #000;
}

.product-sale-price {
  font-size: 19px;
  font-weight: 700;
  color: var(--brand-orange);
}

.product-main-price {
  font-size: 15px;
  text-decoration: line-through;
  color: #777;
}

/* RATING */
.product-rating {
  font-size: 14px;
  color: var(--brand-blue);
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
}

/* CTA */
.product-readmore-link {
  font-size: 15px;
  font-weight: 600;
  color: var(--brand-orange);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: 0.25s ease;
}

.product-readmore-link:hover {
  color: var(--brand-blue);
}
`;

const style = document.createElement("style");
style.textContent = css;
document.head.appendChild(style);


