import React, { createContext, useState, useEffect, useContext } from "react";
import { useAuth } from "./AuthContext";

export const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const { user } = useAuth();
  const [favoriteItems, setFavoriteItems] = useState([]);

  const storageKey = user ? `favorites_${user._id}` : "favorites_guest";

  useEffect(() => {
    const storedFavs = localStorage.getItem(storageKey);
    if (storedFavs) {
      try {
        setFavoriteItems(JSON.parse(storedFavs));
      } catch (e) {
        console.error("Failed to parse favorites", e);
        setFavoriteItems([]);
      }
    } else {
      setFavoriteItems([]);
    }
  }, [storageKey]);

  const addToFavorites = (product) => {
    const existItem = favoriteItems.find(
      (x) => x.product === (product.id || product._id || product.product)
    );

    if (existItem) {
      removeFromFavorites(product.id || product._id || product.product);
    } else {
      const item = {
        product: product.id || product._id || product.product,
        name: product.name,
        image:
          product.image ||
          product.images?.[0]?.url ||
          product.images?.[0] ||
          product.image_url,
        price: product.price,
        href: product.href || `/product/${product.id || product._id}`,
      };
      const updatedFavs = [...favoriteItems, item];
      setFavoriteItems(updatedFavs);
      localStorage.setItem(storageKey, JSON.stringify(updatedFavs));
    }
  };

  const removeFromFavorites = (id) => {
    const updatedFavs = favoriteItems.filter((x) => x.product !== id);
    setFavoriteItems(updatedFavs);
    localStorage.setItem(storageKey, JSON.stringify(updatedFavs));
  };

  const isFavorite = (id) => {
    return favoriteItems.some((x) => x.product === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favoriteItems, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
