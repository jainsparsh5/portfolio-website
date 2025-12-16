"use client";

import React, { useRef, useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane, FaRegSmileBeam } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { ref } = useSectionInView("Contact");

  const form = useRef<any>();

  useEffect(() => {
    const sentCount = parseInt(localStorage.getItem("emailsSent") || "0");
    if (sentCount >= 1) {
      setIsSubmitted(true);
    }
  }, []);

  const sendEmail = (e: any) => {
    e.preventDefault();

    const sentCount = parseInt(localStorage.getItem("emailsSent") || "0");
    if (sentCount >= 1) {
      toast.error("You can only send one email.");
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm("service_1eza72y", "template_rxyqqci", form.current, {
        publicKey: "IVlDdqGGBNvUF3b6N",
      })
      .then(
        () => {
          toast.success("Email sent successfully!");
          form.current.reset();
          setIsLoading(false);
          setIsSubmitted(true);
          localStorage.setItem("emailsSent", (sentCount + 1).toString());
        },
        (error) => {
          toast.error("Failed to send email.");
          setIsLoading(false);
        }
      );
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,42rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <motion.div
        className="glass-card rounded-3xl p-8 sm:p-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.1,
        }}
        viewport={{ once: true }}
      >
        <p className="text-gray-700 dark:text-white/80 text-center mb-8">
          Please contact me directly at{" "}
          <a
            className="font-semibold bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent hover:underline decoration-violet-500 underline-offset-4"
            href="mailto:jainsparsh17@gmail.com"
          >
            jainsparsh17@gmail.com
          </a>{" "}
          or through this form.
        </p>
        <form
          className="flex flex-col items-center gap-4"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            className="h-14 w-full rounded-2xl glass-input px-5 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all duration-300"
            placeholder="Your email"
            name="user_email"
            type="email"
            disabled={isSubmitted || isLoading}
            required
            maxLength={500}
          />
          <textarea
            className="h-52 w-full rounded-2xl glass-input p-5 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all duration-300 resize-none"
            placeholder="Your message"
            name="message"
            disabled={isSubmitted || isLoading}
            required
            maxLength={1000}
          />
          <motion.button
            type="submit"
            disabled={isLoading || isSubmitted}
            className={`group relative overflow-hidden flex items-center justify-center gap-2 h-14 px-8 text-white rounded-full outline-none transition-all duration-300 ${isSubmitted
                ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:shadow-lg hover:shadow-purple-500/30 focus:scale-105 hover:scale-105 active:scale-100"
              }`}
            whileHover={!isSubmitted ? { scale: 1.05 } : {}}
            whileTap={!isSubmitted ? { scale: 0.98 } : {}}
          >
            {!isSubmitted && (
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {isLoading ? (
                <>
                  Sending
                  <motion.div
                    className="h-5 w-5 rounded-full border-2 border-white border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </>
              ) : isSubmitted ? (
                <>
                  Sent <FaRegSmileBeam className="text-lg" />
                </>
              ) : (
                <>
                  Submit <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </>
              )}
            </span>
          </motion.button>
        </form>
      </motion.div>
    </motion.section>
  );
}
