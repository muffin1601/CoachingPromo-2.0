import React from "react";
import "../styles/SubmitForm.css";

const SubmitForm = ({
  onSubmit,
  onCancel,
  loading,
  companyname,
  setCompanyName,
  phone,
  setPhoneNumber,
  message,
  setMessage
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="sf-overlay">
      <div className="sf-modal">

        <h3 className="sf-title">Enter Your Details</h3>

        <form onSubmit={handleSubmit} className="sf-form">

          <div className="sf-field">
            <label htmlFor="sf-company">Company Name</label>
            <input
              id="sf-company"
              type="text"
              placeholder="Company Name"
              value={companyname}
              onChange={(e) => setCompanyName(e.target.value)}
              aria-label="Enter company name"
            />
          </div>

          <div className="sf-field">
            <label htmlFor="sf-phone">Phone Number *</label>
            <input
              id="sf-phone"
              type="tel"
              placeholder="10-digit Mobile Number"
              value={phone}
              onChange={(e) => setPhoneNumber(e.target.value)}
              pattern="[0-9]{10}"
              maxLength="10"
              required
              aria-label="Enter your 10 digit phone number"
            />
          </div>

          <div className="sf-field">
            <label htmlFor="sf-message">Requirement</label>
            <input
              id="sf-message"
              type="text"
              placeholder="Tell us what you need"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-label="Enter your requirement"
            />
          </div>

          <div className="sf-buttons">
            <button
              type="submit"
              className="sf-submit"
              disabled={loading}
              aria-label="Submit details and download design"
            >
              {loading ? (
                <>
                  <span className="sf-loader" /> Processing...
                </>
              ) : (
                "Submit & Download"
              )}
            </button>

            <button
              type="button"
              className="sf-cancel"
              onClick={onCancel}
              disabled={loading}
              aria-label="Cancel form"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitForm;
