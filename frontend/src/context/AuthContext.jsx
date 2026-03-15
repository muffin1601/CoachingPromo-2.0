import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user info is in localStorage
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const loginUser = async (email, password) => {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      // Assume API endpoint is on the same host or proxied via Vite config
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL || ""}/api/users/login`,
        { email, password },
        config
      );
      setUser(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      // In a real app we would consider storing the token more securely
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  };

  const registerUser = async (name, email, password) => {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL || ""}/api/users/register`,
        { name, email, password },
        config
      );
      setUser(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Registration failed",
      };
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("userInfo");
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginUser, registerUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
