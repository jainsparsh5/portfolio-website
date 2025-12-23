import React from "react";
import SectionHeading from "./section-heading";
import AnimatedSection from "./animated-section";
import AnimatedCard from "./animated-card";
import AnimatedText from "./animated-text";

export default function About() {
  return (
    <AnimatedSection
      sectionName="About"
      className="mb-28 max-w-[45rem] scroll-mt-28 sm:mb-40"
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <AnimatedCard className="glass-card rounded-3xl p-8 sm:p-10">
        <AnimatedText
          className="mb-4 leading-8 text-gray-700 dark:text-gray-300"
          delay={0.2}
        >
          Associate Software Engineer at Urbint with a Bachelor of Technology degree in{" "}
          <span className="font-semibold bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">Computer Science and Engineering</span> from
          IIIT Dharwad. I am skilled in{" "}
          <span className="font-semibold">
            full-stack web development and problem solving
          </span>
          . <span className="italic">My favorite part of programming</span> is the
          problem-solving aspect. I <span className="underline decoration-violet-500 decoration-2 underline-offset-4">love</span> the
          feeling of finally figuring out a solution to a problem. My core stack
          is{" "}
          <span className="font-semibold">
            C++, JavaScript, React, Next.js, Node.js, and MongoDB
          </span>
          . I am also familiar with Recoil, postgreSQL, TypeScript and Prisma.
          Currently exploring <span className="font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">Web3</span> technologies.
          I am always looking to learn new technologies and enhance my skills in
          software development.
        </AnimatedText>
        <AnimatedText
          className="leading-8 text-gray-700 dark:text-gray-300"
          delay={0.3}
        >
          <span className="italic">When I&apos;m not coding</span>, I enjoy
          playing video games, watching movies, and go to the gym. I also enjoy{" "}
          <span className="font-semibold">trading and investing</span>. I currently
          trade in <span className="font-semibold">Futures and Options</span> and I
          am heavily invested in{" "}
          <span className="font-semibold bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">Cryptocurrencies</span>. I also play the
          guitar.
        </AnimatedText>
      </AnimatedCard>
    </AnimatedSection>
  );
}
