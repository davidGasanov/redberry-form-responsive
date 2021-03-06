import React from "react";
import { useState, useEffect } from "react";

const Field = ({
  name,
  data,
  label,
  changeData,
  errorMessage,
  required,
  pattern,
  watchAll,
  setWatchAll,
}) => {
  const regex = new RegExp(pattern);

  const handleChange = (e) => {
    const dataCopy = { ...data };
    const input = e.target.value;

    dataCopy[name].content = input;

    regex.test(input)
      ? setMismatch(false)
      : input === ""
      ? setMismatch(false)
      : setMismatch(true);

    if (required) {
      if (regex.test(input)) {
        dataCopy[name].valid = true;
        console.log("Data valid: "+dataCopy[name].valid)
      } else {
        dataCopy[name].valid = false;
      }
    } 
      if (!required && input === "") {
        dataCopy[name].valid = true;
      } 
      if (!required && input!== "" && regex.test(input)) {
        dataCopy[name].valid = true;
      } else if (!required && input!== "" && !regex.test(input)){
        dataCopy[name].valid = false;
      }


    changeData({...dataCopy});
  };

  // local state
  const [watching, setWatching] = useState(false);
  // mismatch is only used for the seprate error message
  const [mismatch, setMismatch] = useState(false);

  const handleWatching = () => {
    setWatching(true);
    setWatchAll(false);
  };

  return (
    <div className="form-input">

      <input
        required={required}
        name={name}
        placeholder={label}
        onChange={handleChange}
        onBlur={handleWatching}
        focused={watchAll ? true.toString() : watching.toString()}
        value={data[name].content}
      />
      <span className="error-message">{label} is required</span>
      <span className="mismatch-message" mismatched={mismatch.toString()}>
        {errorMessage}
      </span>
    </div>
  );
};

export default Field;