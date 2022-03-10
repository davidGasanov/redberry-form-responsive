import React from "react";
import { useState, useEffect } from "react";
import Application from "../utils/Application";
import axios from "axios";

const Submittedapps = ({ data, changeData }) => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://bootcamp-2022.devtest.ge/api/applications?token=3ddee076-733b-4586-8ce3-53e4eaef904a"
      )
      .then((response) => {
        console.log(JSON.stringify(response))
        setApps(response.data.map((app) => ({ ...app, toggled: false })));
      });
  }, []);


  return (
    <div className="submitted-entries">
      <h1 className="title-white">Submitted Applications</h1>
      {apps.map((app, index) => <Application appData={app} appId={index+1}/>
      )}
    </div>
  );
};

export default Submittedapps;
