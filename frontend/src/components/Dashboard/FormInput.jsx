import React from "react";

const FormInput = ({ label, type = "text", value, onChange, ...props }) => (
  <div className="form-group">
    <label>{label}</label>
    <input type={type} value={value} onChange={onChange} {...props} />
  </div>
);

export default FormInput;
