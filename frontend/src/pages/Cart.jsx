import React from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, Minus, Plus, ArrowRight, ShoppingBag } from "lucide-react";
import PageMeta from "../components/PageMeta";

const getImageUrl = (imagePath) => {
  let image = imagePath?.url || imagePath;
  if (Array.isArray(image)) image = image[0]?.url || image[0];
  if (!image || typeof image !== "string") return "/logo.webp";
  if (image.startsWith("http")) return image;
  if (image.startsWith("/uploads")) return `${import.meta.env.VITE_API_BASE_URL || ""}${image}`;
  return image;
};

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();
  const itemCount = cartItems.reduce((count, item) => count + item.qty, 0);

  return (
    <main className="commerce-page cart-page">
      <PageMeta title="Your Cart | CoachingPromo" description="Review selected merchandise before checkout." robots="noindex,follow" />
      <div className="commerce-container">
        <nav className="commerce-breadcrumb"><Link to="/">Home</Link><span>/</span><span>Cart</span></nav>
        <header className="commerce-page-heading"><div><p className="editorial-eyebrow">YOUR SELECTION</p><h1>Shopping cart</h1></div><span>{itemCount} {itemCount === 1 ? "item" : "items"}</span></header>
        {!cartItems.length ? (
          <section className="commerce-empty-state"><ShoppingBag size={32} /><h2>Your cart is empty</h2><p>Browse the collection and add products for checkout.</p><Link className="commerce-primary-button" to="/categories/apparel-accessories">Explore products <ArrowRight size={17} /></Link></section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items" aria-label="Cart items">
              {cartItems.map((item, index) => (
                <article className="cart-line-item" key={`${item.product}-${item.color}-${item.size}-${index}`}>
                  <img src={getImageUrl(item.image)} alt={item.name} width="120" height="120" />
                  <div className="cart-line-copy"><p className="editorial-eyebrow">SELECTED PRODUCT</p><h2>{item.name}</h2><p className="cart-variant">{[item.color !== "Default" && `Color: ${item.color}`, item.size !== "Default" && `Size: ${item.size}`].filter(Boolean).join(" · ") || "Customization details can be confirmed during checkout."}</p></div>
                  <div className="cart-line-controls">
                    <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                      <button type="button" onClick={() => item.qty > 1 && updateQuantity(item.product, item.color, item.size, item.qty - 1)} aria-label="Decrease quantity"><Minus size={15} /></button><span>{item.qty}</span><button type="button" onClick={() => updateQuantity(item.product, item.color, item.size, item.qty + 1)} aria-label="Increase quantity"><Plus size={15} /></button>
                    </div>
                    <button className="cart-remove-button" type="button" onClick={() => removeFromCart(item.product, item.color, item.size)}><Trash2 size={15} /> Remove</button>
                  </div>
                </article>
              ))}
              <button className="cart-clear-button" type="button" onClick={clearCart}>Clear cart</button>
            </section>
            <aside className="cart-summary">
              <p className="editorial-eyebrow">NEXT STEP</p><h2>Order summary</h2>
              <div className="summary-rule" /><p className="summary-count"><span>Items selected</span><strong>{itemCount}</strong></p>
              <p className="summary-note">Review quantities at checkout. Product and delivery totals are calculated from your order details.</p>
              <button className="commerce-primary-button" type="button" onClick={() => navigate("/checkout")}>Continue to checkout <ArrowRight size={17} /></button>
              <Link className="commerce-secondary-link" to="/categories/apparel-accessories">Continue browsing</Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
