import React from "react";
import { useEffect, useState } from "react";
import Navigation from "../utils/Navigation";
import Radio from "../utils/Radio";
import Date from "../utils/Date";

const Thirdpage = ({ data, changeData }) => {
  // local state
  const [pageValid, setPageValid] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const handlePageInvalid = () => {
    setShowErrors(true);
  };

  const handleSubmit = (e) => {
    console.log(e.target);
  };

  // for testing purposes:

  useEffect(() => {
    console.log("Third page valid status: " + pageValid);
  }, [pageValid]);

  // ------------------------------------


  useEffect(() => {


    let workPreferenceValid = data.work_preference.valid;

    let hadCovidValid = data.had_covid.content
      ? data.had_covid_at.valid
      : data.had_covid.valid;

    let vaccinatedValid = data.vaccinated.content
      ? data.vaccinated_at.valid
      : data.vaccinated.valid;

    if (workPreferenceValid && hadCovidValid && vaccinatedValid) {
      setPageValid(true);
    } else {
      setPageValid(false);
    }
  }, [data]);


  return (
    <div className="page-container">
      <div className="page-left">
        <h1 className="page-title">Covid Stuff</h1>

        <Radio
          data={data}
          changeData={changeData}
          title={"how would you prefer to work?"}
          name={"work_preference"}
          radioData={[
            { value: "from_office", label: "From Sairme Office" },
            { value: "from_home", label: "From Home" },
            { value: "hybrid", label: "Hybrid" },
          ]}
          showErrors={showErrors}
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
          showErrors={showErrors}
        />

        {data.had_covid.content ? (
          <Date
            data={data}
            changeData={changeData}
            title={"When?"}
            name={"had_covid_at"}
            showErrors={showErrors}
          />
        ) : null}

        <Radio
          data={data}
          changeData={changeData}
          title={"Have you been vaccinated?"}
          name={"vaccinated"}
          radioData={[
            { value: true, label: "Yes" },
            { value: false, label: "No" },
          ]}
          showErrors={showErrors}
        />

        {data.vaccinated.content ? (
          <Date
            data={data}
            changeData={changeData}
            title={"When did you get your last covid vaccine?"}
            name={"vaccinated_at"}
            showErrors={showErrors}
          />
        ) : null}

        <Navigation
          data={data}
          changeData={changeData}
          pageValid={pageValid}
          handlePageInvalid={handlePageInvalid}
        />
      </div>
      <div className="page-right">
      <h1 className="page-title">Redberry Covid Policies</h1>
        <p>
          As this infamous pandemic took over the world, we adjusted our working
          practices so that our employees can be as safe and comfortable as
          possible. We have a hybrid work environment, so you can either work
          from home or visit our lovely office on Sairme Street. If it was up to
          us, we would love you to see us in the office because we think
          face-to-face communications {'>'} Zoom meetings. Both on the fun and
          productivity scales.
        </p>
      </div>
    </div>
  );
};

export default Thirdpage;
