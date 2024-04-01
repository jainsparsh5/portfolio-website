"use client"
import React from "react";
import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
export default function SectionDivider() {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1,y: [0, 20, 0], transition: { duration: 1.5, repeat: Infinity, repeatType: "mirror"} }}
        className="my-24"
      >
        <MdKeyboardDoubleArrowDown className="text-5xl" />
      </motion.div>

      {/* <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-200 mb-24 mt-4 h-16 w-1 rounded-full hidden sm:block"
      ></motion.div> */}
    </div>
  );
}