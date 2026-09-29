import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "./styles/experience.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";

// Server responses include a small, visible, crawlable document shell. Remove it
// before mounting the client application so visitors do not see duplicate content.
document.getElementById("server-content")?.remove();

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <FavoritesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FavoritesProvider>
  </AuthProvider>
);
