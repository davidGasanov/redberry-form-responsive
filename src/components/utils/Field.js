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
        console.log(true);
        setValid(true);
      } else {
        console.log(false);
        setValid(false);
      }
    } else {
      if (input === "") {
        setValid(true);
      } else if (regex.test(input)) {
        setValid(true);
        console.log(valid);
      } else {
        setValid(false);
        console.log(valid);
      }
    }

    changeData(dataCopy);

  };

  // local state
  const [watching, setWatching] = useState(false);
  // mismatch is only used for the seprate error message
  const [mismatch, setMismatch] = useState(false);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const dataCopy = { ...data };
    dataCopy[name].valid = valid;
    changeData(dataCopy);
    console.log(data);

  }, [valid]);

  const handleWatching = () => {
    setWatching(true);
    setWatchAll(false);
  };

  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        required={required}
        name={name}
        placeholder={label}
        onChange={handleChange}
        onBlur={handleWatching}
        focused={watchAll ? true.toString() : watching.toString()}
      />
      <span className="error-message">{label} is required</span>
      <span className="mismatch-message" mismatched={mismatch.toString()}>
        {errorMessage}
      </span>
    </div>
  );
};

export default Field;
