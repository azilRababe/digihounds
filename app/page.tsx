import React from "react";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Process from "@/components/Process";
import { MdOutlineDoneAll } from "react-icons/md";
import LottieAnimation from "@/components/ui/LottieAnimation";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <section className="p-6" aria-label="services">
        <div className="flex flex-col sm:flex-row justify-evenly text-white text-lg sm:text-xl">
          <span className="flex items-center mb-4 sm:mb-0">
            <MdOutlineDoneAll className="mr-2" /> Design
          </span>
          <span className="flex items-center mb-4 sm:mb-0">
            <MdOutlineDoneAll className="mr-2" /> Development
          </span>
          <span className="flex items-center mb-4 sm:mb-0">
            <MdOutlineDoneAll className="mr-2" /> Marketing
          </span>
          <span className="flex items-center mb-4 sm:mb-0">
            <MdOutlineDoneAll className="mr-2" /> Strategy
          </span>
        </div>
      </section>
      <Services />
      <Process />
      <section className="flex flex-col md:flex-row items-center justify-between px-12 space-y-8 md:space-y-0 md:space-x-8 md:mx-24">
        <div className="md:w-1/2 justify-center hidden md:flex">
          <LottieAnimation />
        </div>
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Let’s Make Things Happen
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Contact us today to discover how our digital marketing solutions can
            drive growth and success for your business online.
          </p>
          <button className=" w-full bg-primary text-white rounded-full px-10 py-4 flex items-center justify-center gap-3 hover:bg-primary-dark transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-primary-light">
            Book a Call
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
