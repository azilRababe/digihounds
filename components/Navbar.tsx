"use client";

import React from "react";
import Link from "next/link";

import { navItems } from "@/utils/data";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-red-500 to-white via-gray-400 z-10 top-0 p-6 my-5 shadow-lg rounded-full mx-auto w-fit text-sm transition duration-300 hover:shadow-xl">
      <ul className="flex items-center justify-center space-x-8">
        <li className="hidden md:flex font-bold text-black border-r-2 border-black pr-5">
          <Link href="/">DigiHounds</Link>
        </li>
        {navItems.map((item, index) => (
          <li
            aria-label={item.ariaLabel}
            key={item.name}
            className={`text-md text-black transition duration-300 transform hover:text-yellow-400 hover:scale-110 ${
              index < navItems.length - 1 ? "border-r-2 border-black pr-5" : ""
            }`}
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
        <li className="bg-white text-black rounded-full px-4 py-2 transition duration-300 transform hover:bg-green-500 hover:text-white hover:cursor-pointer hover:scale-105 shadow-lg">
          <button>Book a call</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
