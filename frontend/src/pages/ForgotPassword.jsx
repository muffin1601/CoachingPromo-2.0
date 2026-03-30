import React, { useState } from "react";
import { X, Mail, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL || ""}/api/users/forgotpassword`,
        { email }
      );
      setMessage("Check your email for the reset link.");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
    setLoading(false);
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <button className="login-close" onClick={() => navigate("/login")}>
          <X />
        </button>

        <h2 className="login-title">Forgot Password</h2>
        <p className="login-subtitle">Enter your email to receive a reset link</p>

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

          {error && <p className="error">{error}</p>}
          {message && <p className="success-message" style={{ color: "green", textAlign: "center", marginBottom: "15px" }}>{message}</p>}

          <button className="login-button" disabled={loading}>
            {loading ? (
              <span className="loader-container">
                <Loader2 className="spinner" /> Sending...
              </span>
            ) : (
              "Send Reset Link"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
