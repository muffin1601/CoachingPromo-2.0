import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  if (!products?.length)
    return <p className="text-center p-8">No Products Found</p>;

  return (
    <div className="product-list-container">
      <div className="product-list-grid">
        {products.map((product) => {
          const { slug, name, images, price, salePrice, ratings } = product;

          return (
            <Link
              key={product._id}
              to={`/product/${slug}`}
              className="product-card"
            >
              <img
                src={images?.[0]?.url}
                alt={images?.[0]?.altText || name}
                className="product-card-media"
              />

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
                  ⭐ {ratings.average} ({ratings.count})
                </p>
              )}

              <span className="product-readmore-link">
                View Details →
              </span>
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
  --neutral-gray: #555;
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
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  gap: 25px;
}

/* CARD */
.product-card {
  background: #fff;
  border: 1px solid var(--light-border);
  overflow: hidden;
  transition: all 0.25s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
}

.product-card:hover {
  box-shadow: 0 10px 25px #0000001a;
}

/* IMAGE */
.product-card-media {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* NAME */
.product-card-title {
  font-size: 19px;
  font-weight: 600;
  color: #222;
  line-height: 1.4;
  padding: 16px 18px 8px 18px;
}

/* PRICE WRAPPER */
.product-price-wrapper {
  padding: 0 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 6px;
}

/* PRICES */
.product-regular-price {
  font-size: 18px;
  font-weight: 600;
  color: #111;
}

.product-sale-price {
  font-size: 18px;
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
  color: var(--brand-blue);
  font-size: 14px;
  padding: 0 18px;
}

/* CTA */
.product-readmore-link {
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  color: var(--brand-orange);
  margin: 14px 18px 18px;
  transition: 0.3s ease;
}

.product-readmore-link:hover {
  color: var(--brand-blue);
}
`;

const style = document.createElement("style");
style.textContent = css;
document.head.appendChild(style);

