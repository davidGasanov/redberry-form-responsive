import React from "react";
import { useState, useEffect } from "react";

// Utils
import Radio from "../utils/Radio";
import Textfield from "../utils/Textfield";

const Fourthpage = ({ data, changeData }) => {
  // local state
  const [pageValid, setPageValid] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

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

      <Textfield
        data={data}
        changeData={changeData}
        title={"What would you speak about at Devtalk?"}
        name={"devtalk_topic"}
      />
      
      <Textfield
        data={data}
        changeData={changeData}
        title={"Tell us something special"}
        name={"something_special"}
      />
    </div>
  );
};

export default Fourthpage;
