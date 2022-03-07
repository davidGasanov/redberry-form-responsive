import React from "react";
import Navigation from "../utils/Navigation";
import Radio from "../utils/Radio";

const Thirdpage = ({ data, changeData }) => {
  const handleSubmit = (e) => {
    console.log(e.target);
  };

  return (
    <div>
      <h1>This is the third page</h1>

      <Radio
        data={data}
        changeData={changeData}
        title={"how would you prefer to work?"}
        name={"work_preference"}
        radioData={[
          { value: "from_sairme_office", label: "From Sairme Office" },
          { value: "from_home", label: "From Home" },
          { value: "hybrid", label: "Hybrid" },
        ]}
      />
        <Radio
        data={data}
        changeData={changeData}
        title={"Did you contact covid 19? :("}
        name={"had_covid"}
        radioData={[
          { value: true, label: "Yes" },
          { value: false, label: "No" },
        ]}
      />

      <Navigation data={data} changeData={changeData} />
    </div>
  );
};

export default Thirdpage;
