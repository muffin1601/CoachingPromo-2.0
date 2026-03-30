import React, { useState } from "react";
import { X, Mail, Lock, User, Loader2, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css"; // Reuse login styles

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { registerUser } = useAuth();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await registerUser(name, email, password);
    if (res.success) {
      navigate("/");
    } else {
      setError(res.message);
    }
    setLoading(false);
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <button className="login-close" onClick={() => navigate("/")}>
          <X />
        </button>

        <h2 className="login-title">Create Account</h2>
        <p className="login-subtitle">Join us today!</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <User className="input-icon" />
            <input
              type="text"
              value={name}
              required
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />
          </div>

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
              {showPassword ? <EyeOff className="toggle-icon" /> : <Eye className="toggle-icon" />}
            </button>
          </div>

          {error && <p className="error">{error}</p>}

          <button className="login-button" disabled={loading}>
            {loading ? (
              <span className="loader-container">
                <Loader2 className="spinner" /> Signing up...
              </span>
            ) : (
              "Sign Up"
            )}
          </button>
          <div className="auth-footer">
            Already have an account? 
            <Link to="/login" className="auth-link">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};



export default Register;
