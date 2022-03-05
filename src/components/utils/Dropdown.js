import React from "react";

const Dropdown = ({ skills, name }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name={name}>
        <option name="placeholder">Skills</option>
        {skills ? (
          skills.map((skill) => (
            <option name={skill.title} key={skill.id}>
              {skill.title}
            </option>
          ))
        ) : (
          <option>Skills are loading...</option>
        )}
      </select>
      <input pattern={"\d"} required={true} placeholder="experience duration in years" />
      <input type="submit" value="Add programming language" />
    </form>
  );
};

export default Dropdown;
