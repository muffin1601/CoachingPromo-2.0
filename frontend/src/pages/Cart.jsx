import React from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, Minus, Plus } from "lucide-react";
import PageBanner from "../components/PageBanner";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  // Helper to ensure image URLs are absolute
  const getImageUrl = (imagePath) => {
    let img = imagePath;

    // Handle object with url property
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

  const total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <>
      <PageBanner
        title="Shopping Cart"
        background="/apparel.webp"
        breadcrumb={[{ label: "Cart" }]}
      />
      <div style={{ padding: "60px 20px 80px", maxWidth: "1200px", margin: "0 auto", minHeight: "50vh" }}>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px", background: "var(--light-bg)", borderRadius: "0", border: "1px dashed var(--medium-border)" }}>
          <p style={{ fontSize: "1.2rem", color: "var(--neutral-gray)", marginBottom: "20px" }}>Your cart is empty.</p>
          <Link to="/" style={{ display: "inline-block", padding: "12px 25px", background: "var(--brand-orange)", color: "white", textDecoration: "none", borderRadius: "0", fontWeight: "600" }}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", alignItems: "flex-start" }}>
          
          {/* Cart Items List */}
          <div style={{ flex: "1 1 65%", display: "flex", flexDirection: "column", gap: "20px" }}>
            {cartItems.map((item, index) => (
              <div 
                key={`${item.product}-${index}`} 
                style={{ 
                  display: "flex", alignItems: "center", justifyContent: "space-between", 
                  padding: "20px", background: "white", borderRadius: "0", 
                  boxShadow: "var(--shadow-soft)", border: "1px solid var(--light-border)",
                  flexWrap: "wrap", gap: "15px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "20px", flex: "1 1 auto" }}>
                  <img src={getImageUrl(item.image)} alt={item.name} style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px", border: "1px solid var(--light-border)" }} />
                  <div>
                    <h4 style={{ margin: "0 0 8px 0", fontSize: "1.1rem", color: "var(--text-dark)" }}>{item.name}</h4>
                    <p style={{ margin: 0, fontSize: "14px", color: "var(--neutral-gray)" }}>
                      <strong style={{ color: "var(--brand-blue)" }}>₹{item.price}</strong> 
                      {item.color !== "Default" && ` | Col: ${item.color}`} 
                      {item.size !== "Default" && ` | Size: ${item.size}`}
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--medium-border)", borderRadius: "6px", overflow: "hidden" }}>
                    <button onClick={() => item.qty > 1 && updateQuantity(item.product, item.color, item.size, item.qty - 1)} style={{ padding: "8px 12px", background: "var(--light-bg)", border: "none", cursor: "pointer", borderRight: "1px solid var(--medium-border)" }}>
                      <Minus size={14} />
                    </button>
                    <span style={{ padding: "0 15px", fontWeight: "600" }}>{item.qty}</span>
                    <button onClick={() => updateQuantity(item.product, item.color, item.size, item.qty + 1)} style={{ padding: "8px 12px", background: "var(--light-bg)", border: "none", cursor: "pointer", borderLeft: "1px solid var(--medium-border)" }}>
                      <Plus size={14} />
                    </button>
                  </div>
                  
                  <div style={{ fontWeight: "bold", color: "var(--text-dark)", width: "80px", textAlign: "right", fontSize: "1.1rem" }}>
                    ₹{(item.qty * item.price).toFixed(2)}
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.product, item.color, item.size)} 
                    style={{ marginLeft: "10px", background: "rgba(255, 77, 79, 0.1)", border: "none", color: "#ff4d4f", cursor: "pointer", padding: "10px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}
                    title="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
            <button onClick={clearCart} style={{ alignSelf: "flex-start", padding: "10px 20px", background: "transparent", color: "var(--neutral-gray)", border: "1px solid var(--medium-border)", borderRadius: "6px", cursor: "pointer", fontWeight: "500", transition: "all 0.2s" }} onMouseOver={(e) => { e.currentTarget.style.color = "#ff4d4f"; e.currentTarget.style.borderColor = "#ff4d4f"; }} onMouseOut={(e) => { e.currentTarget.style.color = "var(--neutral-gray)"; e.currentTarget.style.borderColor = "var(--medium-border)"; }}>
              Empty Cart
            </button>
          </div>

          {/* Cart Summary */}
          <div style={{ flex: "1 1 30%", minWidth: "300px", background: "white", padding: "30px", borderRadius: "0", boxShadow: "var(--shadow-medium)", position: "sticky", top: "100px", border: "1px solid var(--brand-blue)" }}>
            <h3 style={{ margin: "0 0 20px 0", color: "var(--brand-blue)", fontSize: "1.5rem", borderBottom: "1px solid var(--light-border)", paddingBottom: "15px" }}>Order Summary</h3>
            
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", color: "var(--neutral-gray)", fontSize: "1.1rem" }}>
              <span>Total Items</span>
              <span style={{ fontWeight: "600", color: "var(--text-dark)" }}>{cartItems.reduce((acc, item) => acc + item.qty, 0)}</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "25px", fontSize: "1.3rem", fontWeight: "bold", color: "var(--text-dark)", borderTop: "1px solid var(--light-border)", paddingTop: "15px" }}>
              <span>Cart Subtotal</span>
              <span style={{ color: "var(--brand-orange)" }}>₹{total.toFixed(2)}</span>
            </div>
            
            <p style={{ fontSize: "0.85rem", color: "var(--neutral-light)", marginBottom: "20px", textAlign: "center" }}>Taxes and shipping calculated at checkout.</p>
            
            <button 
              onClick={() => navigate("/checkout")} 
              style={{ width: "100%", padding: "15px", background: "var(--brand-orange)", color: "white", border: "none", borderRadius: "0", fontSize: "1.1rem", fontWeight: "600", cursor: "pointer", boxShadow: "0 4px 10px rgba(211, 84, 0, 0.3)", transition: "background 0.2s" }}
              onMouseOver={(e) => e.currentTarget.style.background = "var(--brand-orange-dark)"}
              onMouseOut={(e) => e.currentTarget.style.background = "var(--brand-orange)"}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Cart;
