import React from "react";
import { useState, useEffect } from "react";

const Field = ({ name, data, label, changeData, errorMessage, required, pattern }) => {

  const regex = new RegExp(pattern);


  const handleChange = (e) => {

    const dataCopy = {...data};

    dataCopy[name].content = e.target.value;

    changeData(dataCopy);

    regex.test(e.target.value) || e.target.value === "" ? setMismatch(false) : setMismatch(true); 

   // mismatch? setValid(false) : setValid(true);

  };


  // local state
  const [watching, setWatching] = useState(false);
  const [mismatch, setMismatch] = useState(false);

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
        onBlur={handleWatching}
        focused={watching.toString()}
      />
      <span className="error-message">{label} is required</span>
      <span className="mismatch-message" mismatched={mismatch.toString()}>{errorMessage}</span>
    </div>
  );
};

export default Field;
