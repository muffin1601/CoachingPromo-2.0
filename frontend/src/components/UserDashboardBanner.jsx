import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { ShoppingCart, Heart, User, ArrowRight } from "lucide-react";

const UserDashboardBanner = () => {
  const { user } = useAuth();
  const { cartItems } = useCart();
  const { favoriteItems } = useFavorites();

  if (!user) return null; // Only show if logged in

  return (
    <div style={{
      width: "100%",
      padding: "30px 20px",
      background: "linear-gradient(135deg, var(--brand-blue) 0%, var(--brand-blue-dark) 100%)",
      color: "var(--white)",
      display: "flex",
      justifyContent: "center"
    }}>
      <div style={{
        maxWidth: "1200px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>
        
        {/* Header section */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "15px" }}>
          <div style={{
            width: "50px", height: "50px", borderRadius: "50%", background: "rgba(255,255,255,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <User size={28} />
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "600" }}>Welcome back, {user.name}!</h2>
            <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.8 }}>Ready to boost your coaching brand?</p>
          </div>
        </div>

        {/* Quick Stats & Shortcuts */}
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "10px" }}>
          
          {/* Cart Card */}
          <div style={{
            flex: "1", minWidth: "250px", background: "rgba(255,255,255,0.1)", borderRadius: "12px",
            padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <ShoppingCart style={{ color: "var(--brand-orange)" }} />
                <h3 style={{ margin: 0, fontSize: "1.2rem" }}>Your Cart</h3>
              </div>
              <span style={{ 
                background: "var(--brand-orange)", padding: "4px 10px", borderRadius: "20px", 
                fontSize: "0.8rem", fontWeight: "bold" 
              }}>
                {cartItems.length} items
              </span>
            </div>
            
            <div style={{ marginTop: "15px" }}>
              {cartItems.length > 0 ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {cartItems.slice(0, 2).map((item, idx) => (
                    <div key={idx} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", opacity: 0.9 }}>
                      <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "150px" }}>{item.name}</span>
                      <span>x{item.qty}</span>
                    </div>
                  ))}
                  {cartItems.length > 2 && <span style={{ fontSize: "0.8rem", opacity: 0.7 }}>+ {cartItems.length - 2} more...</span>}
                </div>
              ) : (
                <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>Your cart is currently empty.</p>
              )}
            </div>

            <Link to="/cart" style={{ 
              marginTop: "20px", display: "inline-flex", alignItems: "center", gap: "8px", 
              color: "var(--white)", textDecoration: "none", fontSize: "0.9rem", fontWeight: "bold" 
            }}>
              Go to Cart <ArrowRight size={16} />
            </Link>
          </div>

          {/* Favorites Card */}
          <div style={{
            flex: "1", minWidth: "250px", background: "rgba(255,255,255,0.1)", borderRadius: "12px",
            padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Heart style={{ color: "#ff4d4f" }} />
                <h3 style={{ margin: 0, fontSize: "1.2rem" }}>Saved Favorites</h3>
              </div>
              <span style={{ 
                background: "#ff4d4f", padding: "4px 10px", borderRadius: "20px", 
                fontSize: "0.8rem", fontWeight: "bold" 
              }}>
                {favoriteItems.length} items
              </span>
            </div>
            
            <div style={{ marginTop: "15px", display: "flex", gap: "10px", overflow: "hidden" }}>
              {favoriteItems.length > 0 ? (
                favoriteItems.slice(0, 3).map((item, idx) => (
                  <Link to={item.href} key={idx} title={item.name} style={{ width: "50px", height: "50px", borderRadius: "8px", overflow: "hidden", background: "white" }}>
                    <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </Link>
                ))
              ) : (
                <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>You haven't saved any items yet.</p>
              )}
            </div>

            <Link to="/profile" style={{ 
              marginTop: "20px", display: "inline-flex", alignItems: "center", gap: "8px", 
              color: "var(--white)", textDecoration: "none", fontSize: "0.9rem", fontWeight: "bold" 
            }}>
              View Profile <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserDashboardBanner;
