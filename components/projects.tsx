import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import AnimatedSection from "./animated-section";

export default function Projects() {
  return (
    <AnimatedSection
      sectionName="Projects"
      threshold={0.1}
      className="scroll-mt-28 mb-28"
      id="projects"
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="space-y-8">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </AnimatedSection>
  );
}
