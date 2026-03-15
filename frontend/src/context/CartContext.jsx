import React, { createContext, useState, useEffect, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (e) {
        console.error("Failed to parse cart items", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, qty, selectedColor, selectedSize) => {
    const itemExists = cartItems.find((x) => x.product === product._id && x.color === selectedColor && x.size === selectedSize);

    if (itemExists) {
      setCartItems(
        cartItems.map((x) =>
          x.product === itemExists.product && x.color === itemExists.color && x.size === itemExists.size
            ? { ...x, qty: x.qty + qty }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { 
        product: product._id, 
        name: product.name, 
        price: product.price, 
        image: product.images[0]?.url || product.images[0] || "",
        color: selectedColor,
        size: selectedSize,
        qty 
      }]);
    }
  };

  const removeFromCart = (productId, color, size) => {
    setCartItems(cartItems.filter((x) => !(x.product === productId && x.color === color && x.size === size)));
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
    localStorage.removeItem("cartItems");
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
