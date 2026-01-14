import React from "react";
import { skills } from "../data";
import SkillCard from "./SkillCard";
const Skills = () => {
  return (
    <div className="sample-page">
      <h2 className="pb-5 title border-b border-t-gray-200" id="skills">
        Tech Stack
      </h2>
      <div className="sample-frame grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 tracking-normal">
        {skills.map((skill) => {
          return <SkillCard key={skill.id} skill={skill} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
