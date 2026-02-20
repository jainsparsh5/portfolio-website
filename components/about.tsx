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
          <span className="font-semibold">Full Stack Software Engineer</span> on the Resiliency Solutions team at{" "}
          <span className="font-semibold bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">Itron Inc.</span>, with{" "}
          <span className="font-semibold">~2 years of full-time industry experience</span> and a B.Tech in{" "}
          <span className="font-semibold">Computer Science &amp; Engineering</span> from IIIT Dharwad (2024).
          I specialize in building scalable, high-performance systems — from reactive frontends to robust backend services.
          My core stack is{" "}
          <span className="font-semibold">JavaScript, React, Node.js, Python, FastAPI,</span> and{" "}
          <span className="font-semibold">PostgreSQL</span>, with deep familiarity in AWS, Prisma ORM, Pydantic, System Design Fundamentals, Data Structures & Algorithms, Docker, and Kubernetes.
        </AnimatedText>
        <AnimatedText
          className="mb-4 leading-8 text-gray-700 dark:text-gray-300"
          delay={0.3}
        >
          <span className="italic">My favorite part of engineering</span> is the{" "}
          <span className="underline decoration-violet-500 decoration-2 underline-offset-4">problem-solving</span> aspect —
          that rush of finally cracking a hard problem never gets old.
          Lately, I&apos;ve been going deep on{" "}
          <span className="font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">Gen AI-powered development</span> and the{" "}
          <span className="font-semibold">100x / high-agentic developer</span> philosophy —
          leveraging AI agents and automation to move fast without breaking things.
          My goal: throw anything at me, I&apos;ll get it done.
        </AnimatedText>
        <AnimatedText
          className="leading-8 text-gray-700 dark:text-gray-300"
          delay={0.4}
        >
          <span className="italic">When I&apos;m not coding</span>{" "}
          <span className="text-sm text-gray-500 dark:text-gray-400">(btw my agents are always working 🦀)</span>,
          I hit the gym or go for a run. Always learning. Always shipping.
        </AnimatedText>
      </AnimatedCard>
    </AnimatedSection>
  );
}
