import React from "react";
import Navigation from "../utils/Navigation";
import Field from "../utils/Field";

const Firstpage = ({ data, changeData }) => {
  return (
    <div>
      <h1>This is the first page</h1>

      <Field
        changeData={changeData}
        data={data}
        name={"first_name"}
        label={"First Name"}
        errorMessage={"first name should include at least 2 characters"}
        required={true}
      />
      <Field
        changeData={changeData}
        data={data}
        name={"last_name"}
        label={"Last Name"}
        errorMessage={"last name should include at least 2 characters"}
        required={true}
      />
      <Field
        changeData={changeData}
        data={data}
        name={"email"}
        label={"Your email"}
        errorMessage={"should be a valid email"}
        required={true}
      />
      <Field
        changeData={changeData}
        data={data}
        name={"phone"}
        label={"Phone number"}
        errorMessage={"needs to be formatted according to georgian standards"}
      />

      <Navigation data={data} changeData={changeData} />
    </div>
  );
};

export default Firstpage;
