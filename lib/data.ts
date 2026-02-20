import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap, LuSchool } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import exploraStaysSS from "@/public/explora-stays-ss.png";

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
    title: "Software Engineer 1, Itron Inc.",
    location: "Bengaluru, Karnataka, India",
    description:
      "Spearheaded legacy modernization of the Storm Impact application (Emergency Response & Planning), migrating a Django framework to a high-performance React (Vite), TypeScript, and FastAPI architecture. Optimized system performance by transitioning GraphQL to REST APIs, eliminating multi-hop latency. Architected scalable backend services including an event-driven Notification Service utilizing Amazon SQS and an enterprise-grade Document Management System using AWS S3 presigned URLs for secure media retrieval. Directed the architectural shift from Next.js to React SPA to drastically reduce build times and eliminate redundant SSR overhead. Championed a robust Testing Pyramid, achieving 95%+ unit and component coverage with Vitest and >90% E2E UI coverage with Playwright automating 12+ critical flows; accelerated release velocity by 2.5x. Spearheaded product analytics and observability by seamlessly integrating Pendo and Sentry, driving data-informed decisions and rapidly resolving issues in an Agile environment.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2026 - Present",
  },
  {
    title: "Software Engineer 1, Urbint",
    location: "Bengaluru, Karnataka, India",
    description:
      "Promoted to SE1 and transitioned to the Centre of Excellence (COE) team for exceptional contributions. Architected and delivered an enterprise-grade, multi-device, multi-tenant, multi-environment test automation framework from the ground up using Playwright, independently automating 500+ critical test scenarios and achieving a remarkable 90% reduction in sanity testing cycles. Spearheaded CI/CD integration leveraging GitHub Actions and Docker containerization. Pioneered AI-driven testing workflows by implementing intelligent pre-prompts with Playwright MCP and Cursor AI, significantly accelerating manual QA processes. Secured 4th place in company-wide hackathon by collaborating with a 3-member team to engineer a sophisticated Quality Intelligence Portal—a unified dashboard consolidating GitHub analytics, CodeQL security scans, CI/CD pipeline metrics, and developer performance insights. Integrated real-time automation results, performance benchmarking, and GPT-powered Agentic AI for JIRA-to-test-case traceability. Established quality benchmarking frameworks with gamified leaderboards to drive cross-team excellence.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2025 - Dec 2025",
  },
  {
    title: "Associate Software Engineer, Urbint",
    location: "Bengaluru, Karnataka, India",
    description:
      "Served as a Full Stack Engineer on the Worker Safety team, developing mission-critical applications to mitigate field worker accident risks. As the sole QA automation engineer, designed and implemented a comprehensive end-to-end testing framework using Playwright and TypeScript, establishing quality standards across the platform. Contributed to backend development with FastAPI, GraphQL (Python + Strawberry), and PostgreSQL, while building responsive, accessible frontends using Next.js, React.js, and Tailwind CSS. Delivered high-impact features in a fast-paced startup environment while maintaining code quality and test coverage.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2024 - Dec 2024",
  },
  {
    title: "Intern, Caterpillar Inc.",
    location: "Bengaluru, Karnataka, India",
    description:
      "Worked as an Automation Testing Intern at Caterpillar Inc. for 3 months. I automated the testing of a web application using Selenium WebDriver and Java. I also worked on a project to automate the testing of REST APIs using Rest Assured",
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
    title: "Explora Stays",
    description:
      "A full-stack NextJS app for booking homestays. It allows users to search for stays, view details & reserve them. You can also list your homestay to explorafy it.",
    tags: ["NextJS", "TailwindCSS", "Prisma", "MongoDB", "Server Actions"],
    imageUrl: exploraStaysSS,
    linkToProject: "https://explora-stays.vercel.app/",
  },
  {
    title: "Blogging Web App",
    description:
      "The Medium.com Clone, with React and Cloudflare Workers, enables secure sign-in, content creation, and discovery of articles.",
    tags: ["ReactJS", "JWT", "Typescript", "PostgreSQL", "Serverless"],
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
      "A smooth and responsive personal portfolio website built using Next.js and Tailwind CSS. It also uses Framer Motion.",
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
  "C/C++",
  "Next.js",
  "TypeScript",
  "React.js",
  "JavaScript",
  "Playwright",
  "Python",
  "GraphQL",
  "Fast API",
  "RESTful APIs",
  "CI/CD",
  "Docker",
  "Kubernetes",
  "Kafka",
  "TurboREPO",
  "Prometheus",
  "Grafana",
  "OpenAPI Specification",
  "Database Optimization",
  "Data Structures",
  "Algorithms",
  "Cloudflare Workers",
  "MongoDB",
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
