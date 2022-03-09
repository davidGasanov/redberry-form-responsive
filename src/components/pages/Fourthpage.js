import React from "react";
import { useState, useEffect } from "react";

// Utils
import Radio from "../utils/Radio";
import Textfield from "../utils/Textfield";
import Navigation from "../utils/Navigation";

const Fourthpage = ({ data, changeData }) => {
  // local state
  const [pageValid, setPageValid] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {


    let devTalksValid = data.will_organize_devtalk.content
      ? data.devtalk_topic.valid
      : data.will_organize_devtalk.valid;
    let somethingSpecialValid = data.something_special.valid 

    if (devTalksValid && somethingSpecialValid) {
      console.log("Fourth page is valid")
      setPageValid(true);
    } else {
      console.log("fourth page is invalid")
      setPageValid(false);
    }
  }, [data]);

  const handlePageInvalid = () => {
    setShowErrors(true);
  };


  return (
    <div>
      <h1>What about you?</h1>
      <Radio
        data={data}
        changeData={changeData}
        title={"Would you attend Devtalks and maybe organize your own?"}
        name={"will_organize_devtalk"}
        radioData={[
          { value: true, label: "Yes" },
          { value: false, label: "No" },
        ]}
        showErrors={showErrors}
      />

      {data.will_organize_devtalk.content ? (
        <Textfield
          data={data}
          changeData={changeData}
          title={"What would you speak about at Devtalk?"}
          name={"devtalk_topic"}
          showErrors={showErrors}
        />
      ) : null}

      <Textfield
        data={data}
        changeData={changeData}
        showErrors={showErrors}
        title={"Tell us something special"}
        name={"something_special"}
      />
       <Navigation
        data={data}
        changeData={changeData}
        pageValid={pageValid}
        handlePageInvalid={handlePageInvalid}
      />
    </div>
  );
};

export default Fourthpage;
