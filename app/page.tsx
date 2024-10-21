import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Process from "@/components/Process";
import { MdOutlineDoneAll } from "react-icons/md";

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
      <section className="flex flex-col md:flex-row items-center justify-around p-8 bg-transparent">
        <div className="mt-6 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=3110&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Digital Marketing Services"
            className="w-full h-auto max-w-md rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <div className="text-center md:text-left md:max-w-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let’s Make Things Happen
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="bg-primary text-white rounded-full px-8 py-3 flex items-center justify-center gap-2 hover:bg-primary-dark transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl shadow-lg">
            Book a Call
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
