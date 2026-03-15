import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./styles/global.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <FavoritesProvider>
      <CartProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </CartProvider>
    </FavoritesProvider>
  </AuthProvider>
);
