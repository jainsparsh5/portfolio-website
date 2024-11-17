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
      <CardContainer className="inter-var bg-gray-100 rounded-lg max-w-[55rem] mx-auto border overflow-hidden relative hover:bg-gray-200 transition p-4 sm:p-8">
        <CardBody className="relative w-full h-auto rounded-xl flex flex-col">
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
            <ul className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, index) => (
                <CardItem key={index}>
                  <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">
                    {tag}
                  </li>
                </CardItem>
              ))}
            </ul>
          </div>
        </CardBody>

        <a 
          href={linkToProject} 
          target="_blank" 
          className="w-full h-72 sm:h-[25rem] relative mt-6 block rounded-lg overflow-hidden"
        >
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="object-cover object-top shadow-2xl transition group-hover:scale-[1.04]"
            fill
          />
        </a>
      </CardContainer>
    </motion.div>
  );
}
