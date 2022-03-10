import React from "react";
import { useState } from "react";

const Application = ({ appData, appId }) => {
  const toggleApp = () => {
    console.log("setToggle Fired");
    setToggled(!toggled);
  };

  const skillsObj = {
    1: "HTML",
    2: "CSS",
    3: "PHP",
    4: "Laravel",
    5: "React.JS",
    6: "Vue.JS",
    7: "Svelte",
    8: "Angular",
  };

  const [toggled, setToggled] = useState(false);
  return (
    <div>
      {toggled ? (
        <div className="app-toggled">
          <div onClick={toggleApp} className="app-toggled-header">
            <span className="app-id">{appId}</span>
            <span className="app-vector"></span>
          </div>
          <div className="app-sheet">
            <div className="app-col">
              <div className="app-info-card">
                <p className="app-title-u">
                  <u>Personal information</u>
                </p>
                <div className="key-value">
                  <span className="key">First Name</span>
                  <span className="value">{appData.first_name}</span>
                </div>
                <div className="key-value">
                  <span className="key">Last Name</span>
                  <span className="value">{appData.last_name}</span>
                </div>
                <div className="key-value">
                  <span className="key">E mail</span>
                  <span className="value">{appData.email}</span>
                </div>
                <div className="key-value">
                  <span className="key">Phone</span>
                  <span className="value">
                    {appData.hasOwnProperty("phone") ? appData.phone : null}
                  </span>
                </div>
              </div>

              <div className="app-info-card">
                <p className="app-title-u">
                  <u>Covid situation</u>
                </p>
                <div className="app-info-card">
                  <p className="app-title">how would you prefer to work?</p>
                  <div className="key-value">
                    <span
                      className={
                        appData.work_preference === "from_office"
                          ? "radio-full"
                          : "radio-empty"
                      }
                    ></span>
                    <span className="value">From Sairme Office</span>
                  </div>
                  <div className="key-value">
                    <span
                      className={
                        appData.work_preference === "from_home"
                          ? "radio-full"
                          : "radio-empty"
                      }
                    ></span>
                    <span className="value">From Home</span>
                  </div>
                  <div className="key-value">
                    <span
                      className={
                        appData.work_preference === "hybrid"
                          ? "radio-full"
                          : "radio-empty"
                      }
                    ></span>
                    <span className="value">Hybrid</span>
                  </div>
                </div>
                <div className="app-info-card">
                  <p className="app-title">Did you have covid 19?</p>
                  <div className="key-value">
                    <span
                      className={
                        appData.had_covid === true
                          ? "radio-full"
                          : "radio-empty"
                      }
                    ></span>
                    <span className="value">Yes</span>
                  </div>
                  <div className="key-value">
                    <span
                      className={
                        appData.had_covid === false
                          ? "radio-full"
                          : "radio-empty"
                      }
                    ></span>
                    <span className="value">No</span>
                  </div>
                </div>
                <div className="app-info-card">
                  <p className="app-title">When did you have covid 19?</p>
                  <div className="date-info-container">
                    {appData.hasOwnProperty("had_covid_at")
                      ? appData.had_covid_at
                      : "Data not found"}
                  </div>
                </div>
                <div className="app-info-card">
                  <p className="app-title">Have you been vaccinated?</p>
                  <div className="key-value">
                    <span
                      className={
                        appData.vaccinated === true
                          ? "radio-full"
                          : "radio-empty"
                      }
                    ></span>
                    <span className="value">Yes</span>
                  </div>
                  <div className="key-value">
                    <span
                      className={
                        appData.vaccinated === false
                          ? "radio-full"
                          : "radio-empty"
                      }
                    ></span>
                    <span className="value">No</span>
                  </div>
                </div>
                <div className="app-info-card">
                  <p className="app-title">
                    When did you get the covid vaccine?
                  </p>
                  <div className="date-info-container">
                    {appData.hasOwnProperty("vaccinated_at")
                      ? appData.vaccinated_at
                      : "Data not found"}
                  </div>
                </div>
              </div>
            </div>
            <div className="app-col">
              <div className="app-info-card">
                <p className="app-title-u">
                  <u>Skillset</u>
                </p>

                {appData.skills.map((skill) => {
                  return (
                    <div className="key-value">
                      <div className="key">{skillsObj[skill.id]}</div>
                      <div className="value">
                        Years of experience: {skill.experience}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="app-info-card">
                <p className="app-title-u">
                  <u>Insigts</u>
                </p>
                <p className="app-title">
                  Would you attend devtalks and also maybe organize your own?
                </p>
                <div className="key-value">
                  <span
                    className={
                      appData.will_organize_devtalk === true ? "radio-full" : "radio-empty"
                    }
                  ></span>
                  <span className="value">Yes</span>
                </div>
                <div className="key-value">
                  <span
                    className={
                      appData.will_organize_devtalk === false
                        ? "radio-full"
                        : "radio-empty"
                    }
                  ></span>
                  <span className="value">No</span>
                </div>
              </div>
              <div className="app-info-card">
                  <p className="app-title">
                   What would you speak about at Devtalk?
                  </p>
                  <p className="text-info-container">
                    {appData.hasOwnProperty("devtalk_topic")
                      ? appData.devtalk_topic
                      : "Data not found"}
                  </p>
                </div>
                <div className="app-info-card">
                  <p className="app-title">
                   Tell us something special
                  </p>
                  <p className="text-info-container">
                    {appData.something_special}
                  </p>
                </div>
            </div>
          </div>
        </div>
      ) : (
        <div onClick={toggleApp} className="app-untoggled">
          <span className="app-id">{appId}</span>
          <span className="app-vector"></span>
        </div>
      )}
    </div>
  );
};

export default Application;
