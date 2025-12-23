"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "@/lib/types";
import { useEffect } from "react";

type AnimatedSectionProps = {
    children: React.ReactNode;
    sectionName: SectionName;
    threshold?: number;
    className?: string;
    id?: string;
};

export default function AnimatedSection({
    children,
    sectionName,
    threshold = 0.75,
    className = "",
    id,
}: AnimatedSectionProps) {
    const { ref, inView } = useInView({ threshold });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return (
        <motion.section
            ref={ref}
            id={id}
            className={className}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
            }}
            viewport={{ once: true }}
        >
            {children}
        </motion.section>
    );
}
