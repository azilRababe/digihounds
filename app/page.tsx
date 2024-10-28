import React from "react";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Process from "@/components/Process";
import { MdOutlineDoneAll } from "react-icons/md";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      {/* services */}
      <section className="p-6" aria-label="services" id="services">
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
      <ContactForm />
      <Footer />
    </>
  );
}
