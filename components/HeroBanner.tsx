"use client";

import { FaArrowTrendUp } from "react-icons/fa6";

const HeroBanner = () => {
  return (
    <section className="flex flex-col justify-center items-center mx-auto w-11/12 md:w-2/3 my-28 text-center space-y-6">
      <h1 className="text-4xl md:text-7xl font-bold flex items-center justify-center gap-3">
        We Drive Growth to Your Business
        <FaArrowTrendUp className="text-primary md:text-6xl" />
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 max-w-xl">
        Unlock the full potential of your business with our cutting-edge digital
        marketing services.
      </p>
      <button className="bg-primary text-white rounded-full px-6 py-3 flex items-center gap-2 hover:bg-primary-dark transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl shadow-lg">
        Book a Call
        <FaArrowTrendUp
          className="text-white bg-black p-1 rounded-full"
          size={20}
        />
      </button>
    </section>
  );
};

export default HeroBanner;
