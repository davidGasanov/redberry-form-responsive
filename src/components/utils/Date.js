import React from "react";

const Date = ({ data, changeData, title, name, showErrors}) => {
  const handleChange = (e) => {
    console.log(e.target.name + " " + e.target.value);
    changeData({
      ...data,
      [e.target.name]: { content: e.target.value, valid: e.target.value? true : false},
    });
  };

  const onFocus = (e) =>{
    e.currentTarget.type = "date";
  }

  return (
    <div className="date-container">
      <h2>{title}</h2>
      <input placeholder={'Date'} onChange={handleChange} value={data[name].content} type="text" onFocus={onFocus} name={name}/>
      <span visible={!(data[name].valid) && showErrors ? "true" : "false"} className="error-message">Please pick a date</span>
    </div>
  );
};

export default Date;
