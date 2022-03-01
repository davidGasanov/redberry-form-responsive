import React from "react";

const Landing = ({ data, changeData }) => {
  const handleClick = () => {
    console.log("handleClick fired");
    changeData({ ...data, page: 1 });
  };
  return (
    <div>
      <h1>This is the landing page</h1>
      <button onClick={handleClick}>Go to first page</button>
    </div>
  );
};

export default Landing;
