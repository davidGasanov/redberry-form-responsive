import React from "react";

const Radio = ({ data, changeData, radioData, title, name, showErrors }) => {



  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (value==="true"){
      value = true; 
    } else if (value === "false"){
      value = false;
    }

      changeData({...data, [name] : {content: value, valid: true}})
  };

  return (
    <div>
      <h2>{title}</h2>
      <div onChange={handleChange}>
        {radioData.map((item) => {
          return (
            <div>
              <input
                type="radio"
                name={name}
                value={item.value}
                checked={data[name].value !== "" &&  data[name].content === item.value ? true : false}
              />
              <label>{item.label}</label>
            </div>
            
          );
        })}
      </div>
      <span visible={!(data[name].valid) && showErrors ? "true" : "false"} className="error-message">Please select an option</span>
    </div>
  );
};

export default Radio;
