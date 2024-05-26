import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap, LuSchool } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Intern, Caterpillar Inc.",
    location: "Bangalore, Karnataka, India",
    description:
      "Worked as an Automation Testing Intern at Caterpillar Inc. for 3 months. I automated the testing of a web application using Selenium WebDriver and Java. I also worked on a project to automate the testing of a REST API using Postman.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 - Aug 2023",
  },
  {
    title: "Bachelor of Technology, IIIT Dharwad",
    location: "Dharwad, Karnataka, India",
    description:
      "Currently in my final year pursuing B.Tech in Computer Science and Engineering from IIIT Dharwad. I learned C, C++, Java, Data Structures, Algorithms, DBMS, SQL, OS, Computer Networks, Web Development, Software Engineering, etc.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2024",
  },

  {
    title: "High School",
    location: "Jaipur, Rajasthan, India",
    description:
      "I completed my matriculation from Warren Academy School with 9.40 CGPA and my senior secondary from Indian Overseas School with 88.60% marks where I studied Physics, Chemistry and Mathematics",
    icon: React.createElement(LuSchool),
    date: "2017-2019",
  },
] as const;

export const projectsData = [
  {
    title: "Medium.com",
    description:
      "The Medium.com Clone, with React and Cloudflare Workers, enables secure sign-in, content creation, and discovery, emphasizing user engagement.",
    tags: ["React", "Cloudflare Workers", "Typescript", "PostgreSQL", "JWT"],
    imageUrl: corpcommentImg,
    linkToProject: "https://medium-clone-five-dusky.vercel.app/",
  },
  {
    title: "ChatKaro.com",
    description:
      "A public web app for quick chat on text. It allows you to send messages in real time and also share images.",
    tags: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "React-Router-Dom",
      "Context API",
    ],
    imageUrl: wordanalyticsImg,
    linkToProject: "https://chat-app-react-firebase-rosy.vercel.app/",
  },
  {
    title: "Personal Portfolio",
    description:
      "A smooth and responsive personal portfolio website built using Next.js and Tailwind CSS. It also uses Framer Motion for animations.",
    tags: [
      "NextJS",
      "Tailwind CSS",
      "Framer Motion",
      "Context API",
      "TypeScript",
    ],
    imageUrl: rmtdevImg,
    linkToProject: "https://portfolio-website-steel-two.vercel.app/",
  },
] as const;

export const skillsData = [
  "C++",
  "Java",
  "Next.js",
  "TypeScript",
  "React.js",
  "JavaScript",
  "Zod",
  "JWT",
  "SQL",
  "HTML",
  "CSS",
  "Prisma",
  "PostgreSQL",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "noSQL",
  "Recoil",
  "Serverless Backends",
  "ExpressJS",
  "REST APIs",
  "Framer Motion",
  "Selenium",
] as const;
