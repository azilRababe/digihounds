import React from "react";
import Beam from "@/components/Beam";

const Process = () => {
  return (
    <div
      className="grid gap-8 px-6 md:px-12 lg:mx-28 my-20 bg-transparent"
      id="about"
    >
      <div className="text-center flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Excellence Delivered, Every Time
        </h1>
        <p className="text-base md:text-lg text-white max-w-2xl mx-auto">
          We guarantee outstanding results with our streamlined, proven
          process—ensuring speed, precision, and satisfaction at every step.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Beam />
      </div>
    </div>
  );
};

export default Process;
