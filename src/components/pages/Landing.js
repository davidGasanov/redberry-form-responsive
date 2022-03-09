import React from "react";
import rocketman from "../../imgs/rocketman.png"

const Landing = ({ data, changeData }) => {
  const handleClick = () => {
    console.log("handleClick fired");
    changeData({ ...data, page: 1 });
  };
  return (
    <div className="landing-page">
      <h1 className="large-title">Welcome Rocketeer!</h1>
      <button className="submit-button" onClick={handleClick}>Start Questionnaire</button>
      <button className="underline-button" onClick={handleClick}>Submitted Applications</button>
      <img src={rocketman}/>
    </div>
  );
};

export default Landing;
