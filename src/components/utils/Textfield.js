import React from "react";

const Textfield = ({data, changeData, title, name, showErrors}) => {
    


  const handleChange=(e)=>{
    const contentValid = e.target.value!==""? true : false;
    changeData({...data, [name]: {content: e.target.value, valid: contentValid}})
  }

  return (
    <div className="textfield-container">
        <h2>{title}</h2>
        <textarea value={data[name].content} onChange={handleChange} name={name}/>
        <span visible={!(data[name].valid) && showErrors ? "true" : "false"} className="error-message">*Please fill out this field</span>
    </div>
  );
};

export default Textfield;
