import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import AnimatedSection from "./animated-section";
import AnimatedSkillItem from "./animated-skill-item";

export default function Skills() {
  return (
    <AnimatedSection
      sectionName="Skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40"
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <AnimatedSkillItem key={index} skill={skill} index={index} />
        ))}
      </ul>
    </AnimatedSection>
  );
}
