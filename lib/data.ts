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
    title: "High School",
    location: "Jaipur, Rajasthan, India",
    description:
      "I completed my matriculation from Warren Academy School with 9.40 CGPA and my senior secondary from Indian Overseas School with 88.60% marks where I studied Physics, Chemistry and Mathematics",
    icon: React.createElement(LuSchool),
    date: "2017-2019",
  },
  {
    title: "Bachelor of Technology",
    location: "Dharwad, Karnataka, India",
    description:
      "Currently in my final year pursuing B.Tech in Computer Science and Engineering from IIIT Dharwad. I learned C, C++, Java, Data Structures, Algorithms, DBMS, SQL, OS, Computer Networks, Web Development, Software Engineering, etc.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2024",
  },
  {
    title: "College Intern",
    location: "Bangalore, Karnataka, India",
    description:
      "Worked as an Automation Testing Intern at Caterpillar Inc. for 3 months. I automated the testing of a web application using Selenium WebDriver and Java. I also worked on a project to automate the testing of a REST API using Postman.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 - Aug 2023",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    linkToProject: "https://google.com",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    linkToProject: "https://google.com",
  },
  {
    title: "ChatKaro.com",
    description:
      "A public web app for quick chat on text. It allows you to send messages in real time and also share images.",
    tags: ["React.js", "Tailwind CSS", "Firebase"],
    imageUrl: wordanalyticsImg,
    linkToProject: "https://chat-app-react-firebase-rosy.vercel.app/",
  },
] as const;

export const skillsData = [
  "C++",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Recoil",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Selenium",
] as const;
