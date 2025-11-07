"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="fixed bottom-5 right-5 bg-white dark:bg-gray-950 w-[3rem] h-[3rem] bg-opacity-80 dark:bg-opacity-80 backdrop-blur-[0.5rem] border border-white dark:border-gray-800 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleTheme}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <BsSun className="text-gray-900 dark:text-gray-100" />
      ) : (
        <BsMoon className="text-gray-900 dark:text-gray-100" />
      )}
    </motion.button>
  );
}
