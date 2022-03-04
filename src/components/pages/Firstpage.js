import React from "react";
import { useState } from "react";
import Navigation from "../utils/Navigation";
import Field from "../utils/Field";

const Firstpage = ({ data, changeData }) => {

  const [valid, setValid] = useState(false);

  return (
    <div>
      <h1>This is the first page</h1>


      <Field
        changeData={changeData} 
        data={data}
        name={"first_name"}
        label={"First Name"}
        errorMessage={"first name should include at least 3 characters"}
        required={true}
        pattern="^[A-Za-z]{2,}[A-Za-z]$"
      />
      <Field
        changeData={changeData}
        data={data}
        name={"last_name"}
        label={"Last Name"}
        errorMessage={"last name should include at least 3 characters"}
        pattern={"^[A-Za-z]{2,}[A-Za-z]$"}
        required={true}

      />
      <Field
        changeData={changeData}
        data={data}
        name={"email"}
        label={"Your email"}
        errorMessage={"should be a valid email"}
        pattern={"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-z]+$"}
        required={true}

      />
      <Field
        changeData={changeData}
        data={data}
        name={"phone"}
        label={"Phone number"}
        errorMessage={"needs to be formatted according to georgian standards"}
        pattern={"^[+]9955\d{8}$"}

      />
      


      <Navigation data={data} changeData={changeData} />
    </div>
  );
};

export default Firstpage;