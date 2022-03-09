import React from "react";
import { useState, useEffect } from "react";
import Navigation from "../utils/Navigation";
import Field from "../utils/Field";

const Firstpage = ({ data, changeData }) => {
  const [pageValid, setPageValid] = useState(false);
  const [watchAll, setWatchAll] = useState(false);

  const handlePageInvalid = () => {
    setWatchAll(true);
  };

  useEffect(() => {
    if (
      data.first_name.valid &&
      data.last_name.valid &&
      data.email.valid &&
      data.phone.valid
    ) {
      setPageValid(true);
    } else {
      setPageValid(false);
    }
    console.log("Page validity status: " + pageValid);
  }, [data]);

  return (
    <div className="page-container">
      <div className="page-left">
        <h1 className="page-title">
          Hey, Rocketeer, what are your coordinates?
        </h1>
        <div className="inputs-container">
          <Field
            changeData={changeData}
            data={data}
            name={"first_name"}
            label={"First Name"}
            errorMessage={"first name should include at least 3 characters"}
            required={false}
            pattern="^[A-Za-z]{2,}[A-Za-z]$"
            watchAll={watchAll}
            setWatchAll={setWatchAll}
          />
          <Field
            changeData={changeData}
            data={data}
            name={"last_name"}
            label={"Last Name"}
            errorMessage={"last name should include at least 3 characters"}
            pattern={"^[A-Za-z]{2,}[A-Za-z]$"}
            required={false}
            watchAll={watchAll}
            setWatchAll={setWatchAll}
          />
          <Field
            changeData={changeData}
            data={data}
            name={"email"}
            label={"Your email"}
            errorMessage={"should be a valid email"}
            pattern={"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.][a-z]+$"}
            required={false}
            watchAll={watchAll}
            setWatchAll={setWatchAll}
          />
          <Field
            changeData={changeData}
            data={data}
            name={"phone"}
            label={"+995 5_ _ _ _"}
            errorMessage={
              "needs to be formatted according to georgian standards"
            }
            pattern={"^[+]9955\\d{8}$"}
            required={false}
            watchAll={watchAll}
            setWatchAll={setWatchAll}
          />
        </div>
        <Navigation
          pageValid={pageValid}
          setPageValid={setPageValid}
          handlePageInvalid={handlePageInvalid}
          data={data}
          changeData={changeData}
        />
      </div>
      <div className="page-right">
        <h1 className="page-title">Redberry origins</h1>
        <p>
          You watch “What? Where? When?” Yeah. Our founders used to play it.
          That’s where they got a question about a famous American author and
          screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
          exact name and he answered Ray Redberry. And at that moment, a name
          for a yet to be born company was inspired - Redberry 😇
        </p>
      </div>
    </div>
  );
};

export default Firstpage;
