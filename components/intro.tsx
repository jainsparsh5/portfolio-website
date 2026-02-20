"use client";

import Image from "next/image";
import React from "react";
import ProfilePic from "../public/ProfilePic.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FlipWords } from "./ui/flip-words";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView("Home", 0.5);

  const words = [
    "Software Engineer",
    "Full Stack Engineer",
  ];

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-96"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.8,
            }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 opacity-75 blur-md animate-pulse" />
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-50 blur-lg morph-blob" />
            <Image
              src={ProfilePic}
              alt="Profile Picture"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="relative h-28 w-28 object-cover rounded-full border-[3px] border-white/50 shadow-2xl dark:border-white/20"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              delay: 0.5,
              duration: 0.5,
            }}
            className="absolute -bottom-1 -right-1 text-4xl drop-shadow-lg"
          >
            <motion.span
              animate={{
                rotate: [0, 14, -8, 14, -4, 10, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="inline-block origin-bottom-right"
            >
              👋
            </motion.span>
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-6 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.2,
        }}
      >
        <motion.span
          className="font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Hello, I&apos;m Sparsh.
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          I&apos;m a{" "}
        </motion.span>
        <span className="font-bold">
          <FlipWords className="text-violet-600 dark:text-violet-400" duration={2000} words={words} />
        </span>{" "}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          with <span className="font-bold">2 years</span> of experience. I enjoy
          building <span className="italic bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">impactful solutions</span>.
        </motion.span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.4,
        }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          className="group relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white px-8 py-4 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          <span className="relative z-10">Contact Me Here</span>
          <BsArrowRight className="relative z-10 opacity-80 group-hover:translate-x-1.5 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Link>

        <a
          className="group glass-button px-7 py-4 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition-all duration-300 text-gray-800 dark:text-white hover:shadow-lg hover:shadow-blue-500/20"
          href="/SparshJainResume2024.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-0.5 transition-transform duration-300" />
        </a>

        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/sparsh-jain-54022319b/"
            target="_blank"
            className="group glass-button p-4 text-gray-700 dark:text-white flex items-center justify-center rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <BsLinkedin className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
          </a>

          <a
            href="https://github.com/jainsparsh5"
            target="_blank"
            className="group glass-button p-4 text-gray-700 dark:text-white flex items-center justify-center text-xl rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <FaGithubSquare className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
