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
  width: 100%;
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
  background: #fff;
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
  transform: translateY(-3px);
}

/* IMAGE */
.product-card-media {
  width: 100%;
  height: auto;
  object-fit: cover;
  background: #f7f7f7;
}

/* CONTENT */
.product-content {
  padding: 14px 16px 18px;
}

/* NAME */
.product-card-title {
  font-size: 17px;
  font-weight: 600;
  color: #111;
  margin-bottom: 10px;
  line-height: 1.35;
}

/* PRICE WRAPPER */
.product-price-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

/* PRICES */
.product-regular-price {
  font-size: 17px;
  font-weight: 600;
}

.product-sale-price {
  font-size: 18px;
  font-weight: 700;
  color: var(--brand-orange);
}

.product-main-price {
  font-size: 14px;
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

/* ================================
   RESPONSIVE STYLES
================================ */

/* Tablet */
@media (max-width: 900px) {
  .product-card-media {
    height: 200px;
  }

  .product-card-title {
    font-size: 16px;
  }
}

/*  Mobile — 2 cards per row */
@media (max-width: 600px) {
.product-list-container {
  width: 100%;
padding: 0px;
  margin: 20px auto;
  
}
  .product-list-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }

  .product-card-media {
    height: 160px;
  }

  .product-card-title {
    font-size: 15px;
  }

  .product-content {
    padding: 12px 14px;
  }
}

/*  Extra-small — still 2 per row */
@media (max-width: 400px) {
  .product-list-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .product-card-media {
    height: 140px;
  }

  .product-card-title {
    font-size: 14px;
  }
}
`;

const style = document.createElement("style");
style.textContent = css;
document.head.appendChild(style);


