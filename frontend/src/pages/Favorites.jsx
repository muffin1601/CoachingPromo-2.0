import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import PageBanner from "../components/PageBanner";
import ProductGrid from "../components/Category/ProductGrid";

const Favorites = () => {
  const { favoriteItems, removeFromFavorites } = useFavorites();

  return (
    <>
      <PageBanner
        title="My Favorites"
        background="/stationary.webp"
        breadcrumb={[{ label: "Favorites" }]}
      />
      <div style={{ 
        padding: "60px 20px 80px", 
        maxWidth: "1200px", 
        margin: "0 auto", 
        minHeight: "50vh" 
      }}>
      {favoriteItems.length === 0 ? (
        <div style={{ 
          textAlign: "center", padding: "60px 20px", background: "var(--light-bg)", 
          border: "1px dashed var(--medium-border)" 
        }}>
          <Heart size={48} color="var(--neutral-light)" style={{ marginBottom: "20px", opacity: 0.5 }} />
          <h2 style={{ color: "var(--neutral-gray)", marginBottom: "15px" }}>Your wishlist is empty</h2>
          <p style={{ color: "var(--neutral-light)", marginBottom: "25px" }}>Save items you love here to easily find them later.</p>
          <Link to="/" style={{ 
            display: "inline-block", padding: "12px 25px", background: "var(--brand-orange)", 
            color: "white", textDecoration: "none", borderRadius: "0", fontWeight: "600" 
          }}>
            Explore Products
          </Link>
        </div>
      ) : (
        <ProductGrid 
          products={favoriteItems} 
          onRemove={removeFromFavorites} 
          isFavoritesPage={true} 
        />
      )}
    </div>
    </>
  );
};

export default Favorites;
