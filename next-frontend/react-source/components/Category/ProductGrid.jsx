import React from "react";
import { Link, useNavigate } from "@/lib/react-router";
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
      const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || "") || "";
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
          const { _id, slug, name, images, price, salePrice, product, href, image, category, subcategory, discount } = item;
          
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
                  decoding="async"
                  width={250}
                  height={250}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
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



import "./ProductGrid.jsx.css";


