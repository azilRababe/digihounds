import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { serviceDT } from "@/utils/data";

const Services = () => {
  return (
    <section
      className="flex flex-col justify-center items-center w-full text-center"
      aria-label="Our Services"
    >
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={serviceDT} />
      </div>
    </section>
  );
};

export default Services;
