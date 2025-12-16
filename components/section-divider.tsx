"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="flex flex-col items-center justify-center my-24">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.5,
        }}
        className="relative"
      >
        <motion.div
          animate={{ 
            y: [0, 12, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-1 h-3 rounded-full bg-gradient-to-b from-violet-500 to-transparent" />
          <div className="w-1.5 h-4 rounded-full bg-gradient-to-b from-violet-500/80 to-purple-500/60" />
          <div className="w-2 h-5 rounded-full bg-gradient-to-b from-purple-500/60 to-fuchsia-500/40" />
        </motion.div>
        <div className="absolute -inset-4 bg-violet-500/20 rounded-full blur-xl -z-10" />
      </motion.div>
    </div>
  );
}
