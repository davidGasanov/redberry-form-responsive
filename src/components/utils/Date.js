import React from "react";

const Date = ({ data, changeData, title, name, showErrors}) => {
  const handleChange = (e) => {
    console.log(e.target.name + " " + e.target.value);
    changeData({
      ...data,
      [e.target.name]: { content: e.target.value, valid: true },
    });
  };

  return (
    <div>
      <h2>{title}</h2>
      <input onChange={handleChange} type="date" name={name}/>
      <span visible={data[name] && !(data[name].valid) && showErrors ? "true" : "false"} className="error-message">Please pick a date</span>
    </div>
  );
};

export default Date;
