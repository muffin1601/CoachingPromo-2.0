import React from "react";

const FormInput = ({ label, type = "text", value, onChange, ...props }) => (
  <div className="ap-form-group">
    <label className="ap-form-label">{label}</label>
    <input
      className="ap-form-input-2"
      type={type}
      value={value}
      onChange={onChange}
      {...props}
    />
  </div>
);

export default FormInput;

const css =`
/* --- Form Group --- */
.ap-form-group {
  margin-bottom: 16px;
}

/* --- Label --- */
.ap-form-label {
  display: block;
  font-weight: 600;
  color: var(--brand-blue);
  margin-bottom: 6px;
}

/* --- Input --- */
.ap-form-input-2 {
  width: 90%;
  padding: 10px 12px;
  border: 1px solid var(--light-border);
    font-family: 'Outfit', sans-serif;
  font-size: 14px;

  background: var(--light-bg);
  transition: 0.2s;
}

.ap-form-input-2:focus {
  outline: none;
  border-color: var(--brand-blue);
  box-shadow: 0 0 0 2px rgba(11, 74, 141, 0.15);
}
;`
const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);