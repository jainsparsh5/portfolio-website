"use client";

import React from "react";
import { motion } from "framer-motion";

type AnimatedSkillItemProps = {
    skill: string;
    index: number;
};

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 30,
        scale: 0.9,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.03 * index,
        },
    }),
};

export default function AnimatedSkillItem({ skill, index }: AnimatedSkillItemProps) {
    return (
        <motion.li
            className="group relative glass-button rounded-xl px-5 py-3 cursor-default overflow-hidden"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
            }}
        >
            <span className="relative z-10 text-gray-800 dark:text-white/90 font-medium">
                {skill}
            </span>
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 blur-xl" />
            </div>
        </motion.li>
    );
}
