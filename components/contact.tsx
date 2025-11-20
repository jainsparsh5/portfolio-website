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
      className="text-center mb-20 sm:mb-28 w-[min(100%,38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-4 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:jainsparsh17@gmail.com">
          jainsparsh17@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col items-center"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          className="h-14 w-full rounded-lg border border-black/10 px-4 dark:bg-white/10 dark:border-white/10 dark:text-white dark:placeholder:text-white/60 dark:focus:bg-white/20 transition-all"
          placeholder="Your email"
          name="user_email"
          type="email"
          disabled={isSubmitted || isLoading}
          required
          maxLength={500}
        />
        <textarea
          className="h-52 w-full my-3 rounded-lg border border-black/10 p-4 dark:bg-white/10 dark:border-white/10 dark:text-white dark:placeholder:text-white/60 dark:focus:bg-white/20 transition-all"
          placeholder="Your message"
          name="message"
          disabled={isSubmitted || isLoading}
          required
          maxLength={1000}
        />
        <button
          type="submit"
          value="Send"
          disabled={isLoading}
          className={`group flex items-center justify-center gap-2 h-[3rem] w-[8rem] text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 ${
            isSubmitted
              ? "bg-slate-400 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-600"
              : "bg-gray-800 hover:bg-gray-950 dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20"
          }`}
        >
          {isLoading ? (
            <>
              Sending
              <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-white" />
            </>
          ) : isSubmitted ? (
            <>
              Sent{" "}
              <FaRegSmileBeam className="text-l opacity-70 transition-all group-hover:scale-100" />
            </>
          ) : (
            <>
              Submit{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </button>
      </form>
    </motion.section>
  );
}
