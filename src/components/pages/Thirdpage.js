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
    if (data.had_covid.content) {
      changeData({ ...data, had_covid_at: { content: "", valid: false } });
    } else if (!data.had_covid.content && data.hasOwnProperty("had_covid_at")) {
      const dataCopy = { ...data };
      delete dataCopy.had_covid_at;
      changeData(dataCopy);
    }
    if (data.vaccinated.content) {
      changeData({ ...data, vaccinated_at: { content: "", valid: false } });
    } else if (
      !data.vaccinated.content &&
      data.hasOwnProperty("vaccinated_at")
    ) {
      const dataCopy = { ...data };
      delete dataCopy.vaccinated_at;
      changeData(dataCopy);
    }
  }, [data.had_covid, data.vaccinated]);

  useEffect(() => {
    let workPreferenceValid = data.work_preference.valid;

    let hadCovidValid = data.hasOwnProperty("had_covid_at")
      ? data.had_covid_at.valid
      : data.had_covid.valid;
    let vaccinatedValid = data.hasOwnProperty("vaccinated_at")
      ? data.vaccinated_at.valid
      : data.vaccinated.valid;

    if (workPreferenceValid && hadCovidValid && vaccinatedValid) {
      setPageValid(true);
    } else {
      setPageValid(false);
    }
  }, [data]);

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

      {data.had_covid.content === true ? (
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

      {data.vaccinated.content === true ? (
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
  );
};

export default Thirdpage;
