"use client";

import { projectsData } from "@/lib/data";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

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

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const yProgress = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div
      ref={sectionRef}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
        y: yProgress,
      }}
      className="group mb-8 sm:mb-12 last:mb-0"
    >
      <div className="glass-card rounded-3xl max-w-[55rem] mx-auto overflow-hidden p-6 sm:p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5">
        <div className="flex flex-col">
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="mt-3 leading-relaxed text-gray-700 dark:text-white/70 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
          <motion.ul 
            className="flex flex-wrap gap-2 mt-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {tags.map((tag, index) => (
              <li 
                key={index}
                className="glass-button px-4 py-1.5 text-sm font-medium uppercase tracking-wider text-gray-700 dark:text-white/80 rounded-full"
              >
                {tag}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.a
          href={linkToProject}
          target="_blank"
          className="relative w-full h-72 sm:h-[28rem] mt-8 block rounded-2xl overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            fill
          />
          <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
        </motion.a>
      </div>
    </motion.div>
  );
}
