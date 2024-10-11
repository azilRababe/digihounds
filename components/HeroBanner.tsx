"use client";

import React from "react";

const HeroBanner = () => {
  return (
    <div className="relative inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#b71c1c_100%)]">
      <section className="flex flex-col items-center justify-center w-full h-screen text-center bg-cover bg-center">
        <h1 className="text-5xl md:text-8xl font-extrabold text-white drop-shadow-lg leading-tight text-center">
          Unleash Your Brand's Potential with Digihounds
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-lg md:max-w-2xl drop-shadow-md">
          Ready to Run with the Best?
        </p>
        <div className="mt-8 flex space-x-4">
          <a
            href="#services"
            className="px-8 py-4 bg-red-600 text-white text-lg md:text-xl font-semibold rounded-lg shadow-lg hover:bg-white hover:text-black 
          hover:shadow-[4px_4px_0px_0px_#b71c1c] transition duration-200"
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-white text-lg md:text-xl font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Let's Talk
          </a>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;
