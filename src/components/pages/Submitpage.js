import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Submitpage = ({ data, changeData }) => {
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
      phone: "",
      skills: skillsArr,
      work_preference: data.work_preference.content,
      had_covid: data.had_covid.content,
      had_covid_at: data.had_covid_at.content,
      vaccinated: data.vaccinated.content,
      vaccinated_at: data.vaccinated_at.content,
      will_organize_devtalk: data.will_organize_devtalk.content,
      devtalk_topic: data.devtalk_topic.content,
      something_special: data.something_special.content,
      headers: {
        Accept: "application/json",
      },
    };

    if(!postData.phone.content){
      delete postData.phone
    }
    if(!postData.had_covid_at.content){
      delete postData.had_covid_at
    }
    if(!postData.vaccinated_at.content){
      delete postData.vaccinated_at
    }

    if(!postData.devtalk_topic.content){
      delete postData.devtalk_topic
    }


    const postData2 = {
      token: "cba65393-5fae-4543-86f2-664fd124ebdd",
      first_name: "gela",
      last_name: "gelashvili",
      email: "gelashvili@gela.ge",
      phone: "",
      skills: [
        {
          id: 1,
          experience: 3,
        },
      ],
      work_preference: "from_home",
      had_covid: true,
      had_covid_at: "2022-02-23",
      vaccinated: true,
      vaccinated_at: "2022-02-23",
      will_organize_devtalk: true,
      devtalk_topic: "I would ...",
      something_special: "I am special!",
      headers: {
        Accept: "application/json",
      },
    };

    console.log("Post data: " + JSON.stringify(postData));
    axios
      .post("https://bootcamp-2022.devtest.ge/api/application", postData)
      .then((res) => {
        console.log("Post succesful. " + res);
        changeData({ ...data, page: "thank_you" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="submit-page">
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
      <button
        className="underline-button"
        onClick={() => {
          changeData({ ...data, page: 4 });
        }}
      >
        go back
      </button>
    </div>
  );
};

export default Submitpage;
