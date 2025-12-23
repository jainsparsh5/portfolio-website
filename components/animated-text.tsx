"use client";

import React from "react";
import { motion } from "framer-motion";

type AnimatedTextProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
};

export default function AnimatedText({
    children,
    className = "",
    delay = 0.2
}: AnimatedTextProps) {
    return (
        <motion.p
            className={className}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay }}
            viewport={{ once: true }}
        >
            {children}
        </motion.p>
    );
}
