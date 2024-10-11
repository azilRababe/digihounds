import React from "react";
import TypingAnimation from "@/components/ui/typing-animation";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import SparklesText from "@/components/ui/sparkles-text";

const Services = () => {
  return (
    <section
      className="flex flex-col justify-center items-center w-full py-20 text-center"
      aria-label="Our Services"
    >
      {/* <TypingAnimation
        className="text-5xl md:text-6xl font-extrabold text-black dark:text-white mb-6"
        text="Built from the ground up"
      /> */}
      <VelocityScroll
        text="Built from the ground up"
        default_velocity={1}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem] md:tracking-[-0.03em] md:drop-shadow-lg "
      />
      <p className="mt-5 mx-10 max-w-2xl ">
        {/* All of our services are designed to help your business stand out. */}
        <SparklesText
          text="All of our services are designed to help your business stand out."
          className="text-sm md:text-lg text-primary font-light max-w-2xl uppercase"
          sparklesCount={5}
          colors={{ first: "gray", second: "#121212" }}
        />
        ;
      </p>
      {/* <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div> */}
    </section>
  );
};

export const projects = [
  {
    title: "SEO",
    description:
      "Get found by the right audience. Our SEO strategies will help you rank higher on search engines and attract more organic traffic.",
    link: "#",
  },
  {
    title: "Social Media Management",
    description:
      "We craft engaging content and grow your community across all platforms.",
    link: "#",
  },
  {
    title: "PPC Advertising ",
    description:
      "Maximize your return on investment with targeted campaigns that convert.",
    link: "#",
  },
  {
    title: "Content Marketing",
    description:
      "We create compelling content that speaks to your audience and builds brand authority.",
    link: "#",
  },
  {
    title: "Web Design & Development",
    description:
      "Modern, responsive websites built to impress and convert visitors into customers.",
    link: "#",
  },
  {
    title: "Email Marketing",
    description:
      "Reach your audience with personalized campaigns that drive engagement and sales.",
    link: "#",
  },
];

export default Services;
