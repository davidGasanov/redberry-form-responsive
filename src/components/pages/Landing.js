import React from "react";
import rocketman from "../../imgs/rocketman.png"

const Landing = ({ data, changeData }) => {
  const startButton = () => {
    changeData({ ...data, page: 1 });
  };
  return (
    <div className="landing-page">
      <h1 className="large-title">Welcome Rocketeer!</h1>
      <button className="submit-button" onClick={startButton}>Start Questionnaire</button>
      <img className='astro' src={rocketman}/>
    </div>
  );
};

export default Landing;
