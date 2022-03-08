import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

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
    if(chosenSkills.length>=1){
      console.log("Second page valid");
      setPageValid(true);
      setPageError(false);

      const dataCopy = {...data};
      dataCopy["skills"] = chosenSkills.map(skill=>({"id":skill["id"], language: skill["language"], "experience": parseInt(skill["experience"])}))

      changeData(dataCopy);

    }else {
      setPageValid(false);
    }
  }, [chosenSkills]);

  return (
    <div>
      <h1>This is the second page</h1>
      <span className="error-message" visible={pageError.toString()}>Please add at least one skill.</span>
      <Dropdown
        skills={skills}
        chosenSkills={chosenSkills}
        setChosenSkills={setChosenSkills}
      />
      <Skills chosenSkills={chosenSkills} setChosenSkills={setChosenSkills}/>
      <Navigation
        pageValid={pageValid}
        handlePageInvalid={handlePageInvalid}
        data={data}
        changeData={changeData}
      />
    </div>
  );
};

export default Secondpage;
