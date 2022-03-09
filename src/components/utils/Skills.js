import React from 'react'

const Skills = ({chosenSkills, setChosenSkills}) => {

const handleClick=(e)=>{
    console.log(e.target.id);

    const skillsCopy = chosenSkills.filter((skill)=>skill["id"]!=e.target.id);
    setChosenSkills(skillsCopy);

}

  return (
    <div class="skills-container">
        {chosenSkills.map((skill)=>{
            return (<div className="skill-box">
                <span className={"skill-name"}>{skill["language"]}</span>
                <span className={"skill-exp"}>Years of Experience: {skill["experience"]}</span>
                <button onClick={handleClick} id={skill["id"]} className={"skill-remove"}/>
            </div>)
        })}
    </div>
  )
}

export default Skills