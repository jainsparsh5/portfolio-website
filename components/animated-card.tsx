"use client";

import React from "react";
import { motion } from "framer-motion";

type AnimatedCardProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
};

export default function AnimatedCard({
    children,
    className = "",
    delay = 0.1
}: AnimatedCardProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay,
            }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
}
