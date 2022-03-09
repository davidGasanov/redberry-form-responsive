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
    let somethingSpecialValid = data.something_special.valid;

    if (devTalksValid && somethingSpecialValid) {
      console.log("Fourth page is valid");
      setPageValid(true);
    } else {
      console.log("fourth page is invalid");
      setPageValid(false);
    }
  }, [data]);

  const handlePageInvalid = () => {
    setShowErrors(true);
  };

  return (
    <div className="page-container">
      <div className="page-left">
        <h1 className="page-title">What about you?</h1>
        <Radio
          data={data}
          changeData={changeData}
          title={"Would you attend Devtalks and maybe also organize your own?"}
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
      <div className="page-right">
        <h1 className="page-title">Redberrian Insights</h1>
        <p>
          We were soo much fun before the pandemic started! Parties almost every
          weekend and lavish employee birthday celebrations! Unfortunately,
          covid ruined that fun like it did almost everything else in the world.
          But we try our best to zhuzh it up a bit. For example, we host
          biweekly Devtalks where our senior and lead developers talk about
          topics they are passionate about. Previous topics have included Web3,
          NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but
          you can join our Zoom broadcast as well. Feel free to join either as
          an attendee or a speaker!
        </p>
      </div>
    </div>
  );
};

export default Fourthpage;
