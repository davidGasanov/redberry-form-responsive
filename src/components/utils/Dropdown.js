import React from "react";
import { useState, useEffect } from "react";

const Dropdown = ({ skills, chosenSkills, setChosenSkills, pageError }) => {
  // local state

  const [watching, setWatching] = useState(false);
  const [mismatch, setMismatch] = useState(false);
  const [empty, setEmpty] = useState(true);
  const [languageError, setLanguageError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = new RegExp("\\d+");
    const language = e.target[0].value;
    const id = e.target[0].selectedIndex;
    const experience = e.target[1].value;

    if (language !== "Skills") {
      if (
        !chosenSkills.some((e) => e["language"] === language) &&
        regex.test(experience)
      ) {
        console.log("submit valid");

        setChosenSkills([
          ...chosenSkills,
          { id: id, language: language, experience: experience },
        ]);
      } else if (
        !chosenSkills.some((e) => e["language"] === language) &&
        !regex.test(experience)
      ) {
        console.log("submit invalid, exp mismatch");
        setMismatch(true);
      } else if (
        chosenSkills.some((e) => e["language"] === language) &&
        regex.test(experience)
      ) {
        setLanguageError(true);
      } else {
        setMismatch(true);
        setLanguageError(true);
      }
    }
  };

  const handleBlur = (e) => {
    if (e.target.name == "experience") {
      setWatching(true);
    } else {
      setLanguageError(false);
    }
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    if (inputName == "experience") {
      setEmpty(value === "");
      setMismatch(e.target.validity.patternMismatch);
    } else if (
      inputName == "skills" &&
      chosenSkills &&
      chosenSkills.some((e) => e["language"] === value)
    ) {
      setLanguageError(false);
      console.log(value);
    }
  };

  return (
    <form className="skill-form" onSubmit={handleSubmit}>
      <select
        className={"skills-menu"}
        name={"skills"}
        onChange={handleChange}
        onBlur={handleBlur}
        focused={watching.toString()}
      >
        <option disabled selected hidden name="placeholder">
          Skills
        </option>
        {skills ? (
          skills.map((skill, index) => (
            <option name={skill.title} key={skill.id}>
              {skill.title}
            </option>
          ))
        ) : (
          <option>Skills are loading...</option>
        )}
      </select>
      <span className="error-message" visible={pageError.toString()}>
          Please add at least one skill.
        </span>
      <span className="language-error" visible={languageError.toString()}>
        This language has already been selected.
      </span>
      <input
        name="experience"
        onChange={handleChange}
        onBlur={handleBlur}
        pattern={"\\d+"}
        focused={watching.toString()}
        className="year-input"
        placeholder="experience duration in years"
        empty={empty.toString()}
      />
      <span
        className="input-error"
        empty={empty.toString()}
        mismatched={mismatch.toString()}
      >
        Please enter a number
      </span>

      <input type="submit" value="Add programming language" />
    </form>
  );
};

export default Dropdown;
