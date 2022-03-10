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
      token: "3ddee076-733b-4586-8ce3-53e4eaef904a",
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
  useEffect(()=>{
    console.log(data.had_covid_at.content);
  },[])

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
