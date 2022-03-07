import React from "react";

const Textfield = ({data, changeData, title, text, name}) => {
    console.log("the data is: "+data);
  return (
    <div>
        <h2>{title}</h2>
        <textarea name={name}/>
    </div>
  );
};

export default Textfield;
