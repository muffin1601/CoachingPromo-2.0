import React, { createContext, useState, useEffect, useContext } from "react";

export const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) {
      setFavoriteItems(JSON.parse(storedFavs));
    }
  }, []);

  const addToFavorites = (product) => {
    const existItem = favoriteItems.find((x) => x.product === (product.id || product._id || product.product));
    
    if (existItem) {
        // Already in favorites, maybe remove it (toggle behavior)
        removeFromFavorites(product.id || product._id || product.product);
    } else {
        const item = {
            product: product.id || product._id || product.product,
            name: product.name,
            image: product.image || product.images?.[0]?.url || product.images?.[0] || product.image_url,
            price: product.price,
            href: product.href || `/product/${product.id || product._id}`
        };
        const updatedFavs = [...favoriteItems, item];
        setFavoriteItems(updatedFavs);
        localStorage.setItem("favorites", JSON.stringify(updatedFavs));
    }
  };

  const removeFromFavorites = (id) => {
    const updatedFavs = favoriteItems.filter((x) => x.product !== id);
    setFavoriteItems(updatedFavs);
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
  };

  const isFavorite = (id) => {
      return favoriteItems.some(x => x.product === id);
  };

  return (
    <FavoritesContext.Provider value={{ favoriteItems, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
