import React from "react";
import { useState } from "react";
import Landing from "./Landing";
import Firstpage from "./Firstpage";

const Form = () => {
  // State
  const [data, changeData] = useState({
    page: "Landing",
    firstName: "",
    lastName: "",
    eMail: "",
    mobile: "",
  });

  // switchRender
  const switchRender = (page) => {
    switch (page) {
      case "Landing":
        return <Landing />;
      case 1:
        return <Firstpage />;
    }
  };

  return <div>{switchRender(data.page)}</div>;
};

export default Form;
