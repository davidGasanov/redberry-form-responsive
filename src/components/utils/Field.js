import React from "react";

const Field = ({ name, data, label, changeData }) => {
  const handleChange = (e) => {
    changeData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-input">
      <label>{label}</label>
      <input name={name} placeholder={label} onChange={handleChange} />
    </div>
  );
};

export default Field;
