import React from "react";
import { useState, useEffect } from "react";

// Components
import Landing from "./pages/Landing";
import Firstpage from "./pages/Firstpage";
import Navigation from "./utils/Navigation";

const Form = () => {
  // State
  const [data, changeData] = useState({
    page: "Landing",
    pagesArr: [
      { number: 1, completed: false },
      { number: 2, completed: false },
      { number: 3, completed: false },
      { number: 4, completed: false },
      { number: 5, completed: false },
    ],
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    console.log(data);
  });

  // switchRender
  const switchRender = (page) => {
    switch (page) {
      case "Landing":
        return <Landing data={data} changeData={changeData} />;
      case 1:
        return <Firstpage data={data} changeData={changeData} />;
    }
  };

  return <div>{switchRender(data.page)}</div>;
};

export default Form;
