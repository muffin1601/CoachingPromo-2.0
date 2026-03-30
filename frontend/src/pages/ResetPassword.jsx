import React, { useState } from "react";
import { X, Lock, Loader2, Eye, EyeOff } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL || ""}/api/users/resetpassword/${token}`,
        { password }
      );
      setSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
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

        <h2 className="login-title">Reset Password</h2>
        <p className="login-subtitle">Enter your new password</p>

        {success ? (
          <div className="success-message" style={{ color: "green", textAlign: "center" }}>
            Password reset successfully! Redirecting to login...
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="input-group password-group">
              <Lock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                required
                placeholder="New Password"
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

            <div className="input-group">
              <Lock className="input-icon" />
              <input
                type="password"
                value={confirmPassword}
                required
                placeholder="Confirm New Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading}
              />
            </div>

            {error && <p className="error">{error}</p>}

            <button className="login-button" disabled={loading}>
              {loading ? (
                <span className="loader-container">
                  <Loader2 className="spinner" /> Resetting...
                </span>
              ) : (
                "Reset Password"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
