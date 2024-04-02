import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="text-center mb-20 sm:mb-28 w-[min(100%,38rem)]">
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:jainsparsh17@gmail.com">
          jainsparsh17@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col items-center">
        <input className="h-14 w-full rounded-lg border border-black/10" type="email" />
        <textarea className="h-52 w-full my-3 rounded-lg border border-black/10 p-4"/>
        <button type="submit" className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all">
          Submit <FaPaperPlane />
        </button>
      </form>
    </section>
  );
}
