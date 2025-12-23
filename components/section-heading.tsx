import React from "react";
import AnimatedHeading from "./animated-heading";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return <AnimatedHeading>{children}</AnimatedHeading>;
}
