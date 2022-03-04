import React from "react";
import Navigation from "../utils/Navigation";

const Secondpage = ({ data, changeData }) => {
  return (
    <div>
      <h1>This is the second page</h1>
      <Navigation data={data} changeData={changeData} />
    </div>
  );
};

export default Secondpage;
