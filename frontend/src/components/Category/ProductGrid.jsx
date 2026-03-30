import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Star, ArrowRight, Trash2, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";

const ProductGrid = ({ products, catSlug, subSlug, onRemove, isFavoritesPage = false }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Helper to ensure image URLs are absolute
  const getImageUrl = (imagePath) => {
    let img = imagePath;

    // Handle object with url property (common in Favorites)
    if (img && typeof img === "object" && img.url) {
      img = img.url;
    }

    if (Array.isArray(img) && img.length > 0) {
      img = img[0];
      if (img && typeof img === "object" && img.url) {
        img = img.url;
      }
    }

    if (!img || typeof img !== "string") return "/placeholder.jpg";
    if (img.startsWith("http")) return img;
    if (img.startsWith("/uploads")) {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || "https://coachingpromo.in";
      return `${baseUrl}${img}`;
    }
    return img;
  };

  if (!products?.length)
    return <p className="text-center p-8">No Products Found</p>;

  return (
    <div className="product-list-container">
      <div className="product-list-grid">
        {products.map((item) => {
          // item might be a product from API or a Favorite item from context
          const { _id, slug, name, images, price, salePrice, ratings, product, href, image, category, subcategory, discount } = item;
          
          const itemId = _id || product;
          const finalName = name;
          const finalPrice = price;
          // Calculate discounted price if discount exists and salePrice is not already set
          const finalSalePrice = salePrice || (discount > 0 ? Math.round(price * (1 - discount / 100)) : null);
          
          // Use item.image if available (fav items), otherwise images[0] (api items)
          const finalImageUrl = getImageUrl(image || images?.[0]?.url || images?.[0]);
          
          // Determine the target URL
          let targetUrl = href;
          if (!targetUrl) {
            const cSlug = catSlug || category?.slug;
            const sSlug = subSlug || subcategory?.slug;
            targetUrl = (cSlug && sSlug && slug) ? `/${cSlug}/${sSlug}/${slug}` : `/product/${itemId}`;
          }

          return (
            <div key={itemId} className="product-card">
              {/* DISCOUNT BADGE */}
              {discount > 0 && (
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  background: 'var(--brand-orange)',
                  color: '#fff',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  zIndex: 5
                }}>
                  {discount}% OFF
                </div>
              )}
              
              {/* REMOVE BUTTON (only on favorites page) */}
              {isFavoritesPage && onRemove && (
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onRemove(itemId);
                  }}
                  className="product-card-remove-btn"
                  title="Remove from favorites"
                >
                  <Trash2 size={16} />
                </button>
              )}

              <Link to={targetUrl} className="product-card-inner-link">
                <img
                  src={finalImageUrl}
                  alt={finalName}
                  className="product-card-media"
                  loading="lazy"
                />

                <div className="product-content">
                  <h3 className="product-card-title">{finalName}</h3>

                  {/* PRICE */}
                  <div className="product-price-wrapper">
                    {finalSalePrice ? (
                      <>
                        <span className="product-sale-price">₹{finalSalePrice}</span>
                        <span className="product-main-price">₹{finalPrice}</span>
                      </>
                    ) : (
                      <span className="product-regular-price">₹{finalPrice}</span>
                    )}
                  </div>

                  {/* FOOTER ACTIONS */}
                  <div className="product-card-footer">
                    {isFavoritesPage ? (
                      <button 
                         onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            const productToCart = {
                              _id: itemId,
                              name: finalName,
                              images: [{ url: finalImageUrl }],
                              price: finalSalePrice || finalPrice
                            };
                            addToCart(productToCart, 1, "Default", "Default");
                            navigate("/cart");
                         }}
                         className="product-card-fav-add-btn"
                      >
                         <ShoppingCart size={16} /> Add to Cart
                      </button>
                    ) : (
                      <span className="product-readmore-link">
                        View Details <ArrowRight size={16} />
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
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

/* FAVORITES SPECIFIC STYLES (ADDED) */
.product-card-remove-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255,255,255,0.9);
  border: none;
  border-radius: 50% !important;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  color: #ff4d4f;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.product-card-fav-add-btn {
  width: 100%;
  padding: 10px;
  background: var(--brand-orange);
  color: white;
  border: none;
  border-radius: 0;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 15px;
}
.product-card-inner-link {
  text-decoration: none;
  color: inherit;
}
`;

const style = document.createElement("style");
style.textContent = css;
document.head.appendChild(style);


