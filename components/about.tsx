"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Final year student pursuing Bachelor of Technology degree in{" "}
        <span className="font-medium">Computer Science and Engineering</span> at
        IIIT Dharwad. I am skilled in{" "}
        <span className="font-medium">
          full-stack web development and problem solving
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          C++, JavaScript, React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with Recoil, postgreSQL, TypeScript and Prisma. I
        am always looking to learn new technologies. I am currently looking for
        a <span className="font-medium">full-time position</span> as a software
        developer/engineer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and go to the gym. I also enjoy{" "}
        <span className="font-medium">trading and investing</span>. I currently
        trade in <span className="font-medium"> Futures and Options</span> and I
        am heavily invested in{" "}
        <span className="font-medium">Cryptocurrencies</span>. I'm also learning
        how to play the guitar.
      </p>
    </motion.section>
  );
}
