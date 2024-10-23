import React from "react";
import Beam from "@/components/Beam";

const Process = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-12 bg-transparent md:mx-28 my-24">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-white mb-5">
          Excellence Delivered, Every Time
        </h1>
        <p className="text-md text-white">
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
