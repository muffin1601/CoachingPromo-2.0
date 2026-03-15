import React, { createContext, useState, useEffect, useContext } from "react";
import { useAuth } from "./AuthContext";

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);

  // Dynamic key based on user ID or guest
  const storageKey = user ? `cartItems_${user._id}` : "cartItems_guest";

  // Load cart when user changes
  useEffect(() => {
    const storedCart = localStorage.getItem(storageKey);
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (e) {
        console.error("Failed to parse cart items", e);
        setCartItems([]);
      }
    } else {
      setCartItems([]);
    }
  }, [storageKey]);

  // Save cart when items change
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(cartItems));
  }, [cartItems, storageKey]);

  const addToCart = (product, qty, selectedColor, selectedSize) => {
    const itemExists = cartItems.find(
      (x) =>
        x.product === product._id &&
        x.color === selectedColor &&
        x.size === selectedSize
    );

    if (itemExists) {
      setCartItems(
        cartItems.map((x) =>
          x.product === itemExists.product &&
          x.color === itemExists.color &&
          x.size === itemExists.size
            ? { ...x, qty: x.qty + qty }
            : x
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          product: product._id,
          name: product.name,
          price: product.price,
          image: product.images?.[0]?.url || product.images?.[0] || "",
          color: selectedColor,
          size: selectedSize,
          qty,
        },
      ]);
    }
  };

  const removeFromCart = (productId, color, size) => {
    setCartItems(
      cartItems.filter(
        (x) => !(x.product === productId && x.color === color && x.size === size)
      )
    );
  };

  const updateQuantity = (productId, color, size, qty) => {
    setCartItems(
      cartItems.map((x) =>
        x.product === productId && x.color === color && x.size === size
          ? { ...x, qty }
          : x
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem(storageKey);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
