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
      />
      <Field
        changeData={changeData}
        data={data}
        name={"last_name"}
        label={"Last Name"}
      />
      <Field
        changeData={changeData}
        data={data}
        name={"email"}
        label={"Your email"}
      />
      <Field
        changeData={changeData}
        data={data}
        name={"phone"}
        label={"Phone number"}
      />

      <Navigation data={data} changeData={changeData} />
    </div>
  );
};

export default Firstpage;
