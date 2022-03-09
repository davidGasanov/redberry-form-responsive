import React from "react";
import axios from "axios";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

// utils
import Navigation from "../utils/Navigation";
import Dropdown from "../utils/Dropdown";
import Skills from "../utils/Skills";

const Secondpage = ({ data, changeData }) => {
  // local state
  const [skills, setSkills] = useState();
  const [chosenSkills, setChosenSkills] = useState(data.skills);
  const [pageValid, setPageValid] = useState(false);
  const [pageError, setPageError] = useState(false);

  const handlePageInvalid = () => {
    setPageError(true);
    console.log("page is invalid");
  };

  


  // get the skills from the API
  useEffect(() => {
    axios
      .get("https://bootcamp-2022.devtest.ge/api/skills")
      .then((response) => {
        console.log("get response: " + JSON.stringify(response.data));
        setSkills(response.data);
      });
  }, []);

  useEffect(() => {
    if (chosenSkills.length >= 1) {
      console.log("Second page valid");
      setPageValid(true);
      setPageError(false);

      const dataCopy = { ...data };
      dataCopy["skills"] = chosenSkills.map((skill) => ({
        id: skill["id"],
        language: skill["language"],
        experience: parseInt(skill["experience"]),
      }));

      changeData(dataCopy);
    } else {
      setPageValid(false);
    }
  }, [chosenSkills]);

  return (
    <div className="page-container">
      <div className="page-left">
        <h1 className="page-title">Tell us about your skills</h1>

        <Dropdown
          skills={skills}
          chosenSkills={chosenSkills}
          setChosenSkills={setChosenSkills}
          pageError={pageError}
        />
        
        <Skills chosenSkills={chosenSkills} setChosenSkills={setChosenSkills} />
        <Navigation
          pageValid={pageValid}
          handlePageInvalid={handlePageInvalid}
          data={data}
          changeData={changeData}
        />
      </div>
      <div className="page-right">
        <h1 className="page-title">A bit about our battles</h1>
        <p>
          As we said, Redberry has been on the field for quite some time now,
          and we have touched and embraced a variety of programming languages,
          technologies, philosophies, and frameworks. We are battle-tested in
          PHP Laravel Stack with Vue.js, refined in React, and allies with
          Serverside technologies like Docker and Kubernetes, and now we have
          set foot in the web3 industry.
        </p>
      </div>
    </div>
  );
};

export default Secondpage;
