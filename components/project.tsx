"use client";

import { projectsData } from "@/lib/data";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  linkToProject,
}: ProjectProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={sectionRef}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <CardContainer className="inter-var bg-gray-100 rounded-lg max-w-[42rem] border overflow-hidden sm:pr-8 relative sm:h-[24rem]  hover:bg-gray-200 transition group-even:pl-8">
        <CardBody className="relative group/card w-auto h-auto rounded-xl mt-4 p-6">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
            <ul className="flex flex-wrap gap-2 mt-5">
              {tags.map((tag, index) => (
                <CardItem key={index}>
                  <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                >
                  {tag}
                </li>
                </CardItem>
              ))}
            </ul>
          </div>
          <a href={linkToProject} target="_blank" style={{ cursor: "pointer" }}>
            <Image
              src={imageUrl}
              alt="Project I worked on :-)"
              quality={95}
              className="absolute top-14 -right-40 w-[28.25rem] h-[18rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04]  group-even:right-[initial] group-even:-left-40"
            />
          </a>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}
