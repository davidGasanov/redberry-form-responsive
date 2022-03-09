import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Submitpage = ({ data }) => {
  const handleSubmit = () => {
    const skillsArr = data.skills.map((skill) => ({
      id: skill.id,
      experience: skill.experience,
    }));

    const postData = {
      token: "0996b49a-4c99-4621-89f8-70b33b60b48f",
      first_name: data.first_name.content,
      last_name: data.last_name.content,
      email: data.email.content,
      phone: data.phone.content === "" ? NaN : data.phone.content, 
      skills: skillsArr,
      work_preference: data.work_preference.content,
      had_covid: data.had_covid.content,
      had_covid_at: data.had_covid_at.content === "" ? NaN : data.had_covid_at.content,
      vaccinated: data.vaccinated.content,
      vaccinated_at: data.vaccinated_at.content === "" ? NaN : data.vaccinated_at.content,
      will_organize_devtalk: data.will_organize_devtalk.content,
      devtalk_topic: data.devtalk_topic.content === "" ? NaN : data.devtalk_topic.content,
      something_special: data.something_special.content,
    };
    console.log(postData);
    axios
      .post("https://bootcamp-2022.devtest.ge/api/application", postData)
      .then((res) => {
        console.log("Post succesful. " + res);
      })
      .catch((err) => {
        console.log("Error! " + err);
      });
  };

  return (
    <div>
      <h1>Submit</h1>
      <button onClick={handleSubmit}>Submit Data</button>
    </div>
  );
};

export default Submitpage;
