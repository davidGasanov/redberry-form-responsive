import React from "react";
import { useState } from "react";

// Pages
import Landing from "./pages/Landing";
import Firstpage from "./pages/Firstpage";
import Secondpage from "./pages/Secondpage";
import Thirdpage from "./pages/Thirdpage.js";
import Fourthpage from "./pages/Fourthpage";
import Submitpage from "./pages/Submitpage";
import Thankyou from "./pages/Thankyou";


const Form = () => {
  // State
  const [data, changeData] = useState({
    page: 0,
    pagesArr: [
      { number: 1, completed: false },
      { number: 2, completed: false },
      { number: 3, completed: false },
      { number: 4, completed: false },
      { number: 5, completed: false },
    ],
    first_name: { content: "", valid: false },
    last_name: { content: "", valid: false },
    email: { content: "", valid: false },
    phone: { content: "", valid: true },
    skills: [],
    work_preference: { content: "", valid: false },
    had_covid: { content: "", valid: false },
    had_covid_at: { content: "", valid: false },
    vaccinated: { content: "", valid: false },
    vaccinated_at: { content: "", valid: false },
    will_organize_devtalk: { content: "", valid: false },
    devtalk_topic: { content: "", valid: false },
    something_special: { content: "", valid: false },
  });

  // switchRender
  const switchRender = (page) => {
    switch (page) {
      case 0:
        return <Landing data={data} changeData={changeData} />;
      case 1:
        return <Firstpage data={data} changeData={changeData} />;
      case 2:
        return <Secondpage data={data} changeData={changeData} />;
      case 3:
        return <Thirdpage data={data} changeData={changeData} />;
      case 4:
        return <Fourthpage data={data} changeData={changeData} />;
      case 5:
        return <Submitpage data={data} changeData={changeData} />;
      case "thank_you":
        return <Thankyou data={data} changeData={changeData} />;
      
    }
  };

  return <div className="global-div">{switchRender(data.page)}</div>;
};

export default Form;
