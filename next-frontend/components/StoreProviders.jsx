"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
const StoreContext = createContext(null);
export function StoreProviders({ children }) {
  const [user, setUser] = useState(null), [cart, setCart] = useState([]), [favorites, setFavorites] = useState([]), [ready, setReady] = useState(false);
  useEffect(() => { try { const current = JSON.parse(localStorage.getItem("userInfo")); setUser(current); setCart(JSON.parse(localStorage.getItem(current ? `cartItems_${current._id}` : "cartItems_guest")) || []); setFavorites(JSON.parse(localStorage.getItem(current ? `favorites_${current._id}` : "favorites_guest")) || []); } catch { /* Start with empty state if stored data is invalid. */ } setReady(true); }, []);
  useEffect(() => { if (ready) localStorage.setItem(user ? `cartItems_${user._id}` : "cartItems_guest", JSON.stringify(cart)); }, [cart,user,ready]);
  useEffect(() => { if (ready) localStorage.setItem(user ? `favorites_${user._id}` : "favorites_guest", JSON.stringify(favorites)); }, [favorites,user,ready]);
  const value = useMemo(() => ({ user, setUser, cart, setCart, favorites, setFavorites, ready, addCart(product, qty=1, color="", size="") { setCart(items => { const found=items.find(x=>x.product===product._id&&x.color===color&&x.size===size); return found ? items.map(x=>x===found?{...x,qty:x.qty+qty}:x) : [...items,{product:product._id,name:product.name,price:product.salePrice||product.price,image:product.images?.[0]?.url||"",color,size,qty}]; }); }, toggleFavorite(product) { setFavorites(items => items.some(x=>x.product===product._id) ? items.filter(x=>x.product!==product._id) : [...items,{product:product._id,name:product.name,image:product.images?.[0]?.url||"",price:product.salePrice||product.price,href:`/product/${product.slug}`}]); } }), [user,cart,favorites,ready]);
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
export const useStore = () => useContext(StoreContext);
