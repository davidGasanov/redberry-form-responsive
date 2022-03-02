import React from "react";
import { useState } from "react";

const Field = ({ name, data, label, changeData, errorMessage, required, pattern }) => {
  const handleChange = (e) => {
    changeData({ ...data, [e.target.name]: e.target.value });
  };

  const [watching, setWatching] = useState(false);

  const handleWatching = (e) =>{
    setWatching(true);
  }

  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        required={required}
        name={name}
        placeholder={label}
        onChange={handleChange}
        pattern={pattern}
        onBlur={handleWatching}
        focused={watching.toString()}
      />
      <span className="error-message">{errorMessage}</span>
    </div>
  );
};

export default Field;
