"use client";

import React, { useRef, useState } from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane, FaRegSmileBeam } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { ref } = useSectionInView("Contact");

  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1eza72y", "template_rxyqqci", form.current, {
        publicKey: "IVlDdqGGBNvUF3b6N",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          setIsSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
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
      <p className="text-gray-700 -mt-4">
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
          className="h-14 w-full rounded-lg border border-black/10 px-4"
          placeholder="Your email"
          name="user_email"
          type="email"
          disabled={isSubmitted}
          required
          maxLength={500}
        />
        <textarea
          className="h-52 w-full my-3 rounded-lg border border-black/10 p-4"
          placeholder="Your message"
          name="message"
          disabled={isSubmitted}
          required
          maxLength={1000}
        />
        <button
          type="submit"
          value="Send"
          disabled={isSubmitted}
          className={`group flex items-center justify-center gap-2 h-[3rem] w-[8rem] text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 ${
            isSubmitted
              ? "bg-slate-400 hover:bg-slate-400"
              : "bg-gray-800 hover:bg-gray-950"
          }`}
        >
          {isSubmitted ? 
            <>Sent <FaRegSmileBeam className="text-l opacity-70 transition-all group-hover:scale-100" /></>
           : <>Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" /></>
          }
        </button>
      </form>
    </motion.section>
  );
}
