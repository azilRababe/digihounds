import React from "react";
import { ProcessBeam } from "./ProcessBeam";

const Process = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-12 bg-transparent md:m-10">
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our Commitment to Excellence
        </h2>
        <p className="text-lg text-gray-300 mb-4">
          We promise to deliver the best results through our proven process,
          ensuring quality and satisfaction at every step.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <ProcessBeam />
      </div>
    </div>
  );
};

export default Process;
