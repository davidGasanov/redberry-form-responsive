import React from "react";

const Field = ({ name, data, label, changeData, errorMessage, required }) => {
  const handleChange = (e) => {
    changeData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        required={required}
        name={name}
        placeholder={label}
        onChange={handleChange}
      />
      <span className="error-message">{errorMessage}</span>
    </div>
  );
};

export default Field;
