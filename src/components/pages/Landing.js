import React from "react";
import rocketman from "../../imgs/rocketman.png"

const Landing = ({ data, changeData }) => {
  const handleClick = () => {
    console.log("handleClick fired");
    changeData({ ...data, page: 1 });
  };
  return (
    <div className="landing-page">
      <h1 className="landing-title">Welcome Rocketeer!</h1>
      <button className="submit-button" onClick={handleClick}>Start Questionnaire</button>
      <button className="submitted-apps" onClick={handleClick}>Submitted Applications</button>
      <img src={rocketman}/>
    </div>
  );
};

export default Landing;
