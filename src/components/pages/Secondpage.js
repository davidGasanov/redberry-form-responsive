import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

// utils
import Navigation from "../utils/Navigation";
import Dropdown from "../utils/Dropdown";

const handlePageInvalid = () =>{
  console.log("page is invalid")
}

const Secondpage = ({ data, changeData }) => {
  // get the skills from the API
  useEffect(() => {
    axios
      .get("https://bootcamp-2022.devtest.ge/api/skills")
      .then((response) => {
        console.log("get response: " + JSON.stringify(response.data));
        setSkills(response.data);
      });
  }, []);

  // local state
  const [skills, setSkills] = useState(null);
  const [pageValid, setPageValid] = useState(false);

  return (
    <div>
      <h1>This is the second page</h1>
      <Dropdown name={"skills"} skills={skills}/>
      <Navigation  pageValid={pageValid} handlePageInvalid={handlePageInvalid} data={data} changeData={changeData} />
    </div>
  );
};

export default Secondpage;
