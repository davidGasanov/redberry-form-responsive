import React from "react";
import Navigation from "../utils/Navigation";

const Thirdpage = ({ data, changeData }) => {

  const handleSubmit = (e) =>{
    console.log(e.target)
  }

  return (
    <div>
      <h1>This is the third page</h1>
    

      <div>
        <input type="radio" name="sairme-office" value="From Sairme Office"/>
        <label>From Sairme Office</label>
      </div>



      <Navigation data={data} changeData={changeData} />
    </div>
  );
};

export default Thirdpage;
