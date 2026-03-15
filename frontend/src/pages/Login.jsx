import React, { useState } from "react";
import { X, Mail, Lock, Loader2, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await loginUser(email, password);
    if (res.success) {
      const storedUser = JSON.parse(localStorage.getItem("userInfo"));
      // Emulate old behavior of setting token for backward compatibility
      if (storedUser && storedUser.token) {
        localStorage.setItem("token", storedUser.token);
      }
      
      if (onLoginSuccess) {
        onLoginSuccess(storedUser);
      } else if (storedUser?.role === "admin") {
        window.location.href = "/admin";
      } else {
        navigate("/");
      }
    } else {
      setError(res.message);
    }
    setLoading(false);
  };

  return (
    <div className="login-wrapper">
      {/* Background video removed as per user request to keep bg white */}
      {/* <video autoPlay muted loop playsInline className="login-bg-video">
        <source
          src="https://www.pexels.com/download/video/35351618/"
          type="video/mp4"
        />
      </video> */}

      <div className="login-card">
        <button
          className="login-close"
          onClick={() => navigate("/")}
        >
          <X />
        </button>

        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Log in to your account</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <Mail className="input-icon" />
            <input
              type="email"
              value={email}
              required
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="input-group password-group">
            <Lock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
            <button
              type="button"
              className="toggle-password-btn"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className="toggle-icon" />
              ) : (
                <Eye className="toggle-icon" />
              )}
            </button>
          </div>

          {error && <p className="error">{error}</p>}

          <button className="login-button" disabled={loading}>
            {loading ? (
              <span className="loader-container">
                <Loader2 className="spinner" />
                Logging in...
              </span>
            ) : (
              "Log in"
            )}
          </button>
          <div className="auth-footer">
            Don't have an account? 
            <Link to="/register" className="auth-link">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
