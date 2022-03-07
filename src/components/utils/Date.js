import React from "react";

const Radio = ({ data, changeData, radioData, title, name }) => {

  const handleChange = (e) => {
      
      console.log(e.target.name + " " + e.target.value);
      changeData({...data, [e.target.name] : {content: e.target.value, valid: true}})
  };

  return (
    <div>
      <h2>{title}</h2>
      <div onChange={handleChange}>
        {radioData.map((radioData) => {
          return (
            <div>
              <input
                type="radio"
                name={name}
                value={radioData.value}
              />
              <label>{radioData.label}</label>
            </div>
            
          );
        })}
      </div>
      <span className="error-message">Please select an option</span>
    </div>
  );
};

export default Radio;
