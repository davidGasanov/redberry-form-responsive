import React from "react";
import Navigation from "./Navigation";

const Thirdpage = ({ data, changeData }) => {
  return (
    <div>
      <h1>This is the first page</h1>
      <Navigation data={data} changeData={changeData} />
    </div>
  );
};

export default Thirdpage;
