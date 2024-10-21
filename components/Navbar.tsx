"use client";

import React from "react";
import Link from "next/link";

import { navItems } from "@/utils/data";

const Navbar = () => {
  return (
    <nav className="text-black bg-white z-10 top-0 p-5 my-5 shadow-xl rounded-full mx-auto w-fit text-sm">
      <ul className="flex items-center justify-center space-x-5">
        <li className="hidden md:flex font-bold border-r-2 border-primary pr-5">
          <Link href="/">DigiHounds</Link>
        </li>
        {navItems.map((item) => (
          <li
            aria-label={item.ariaLabel}
            key={item.name}
            className="hover:text-[#b71c1c] text-md"
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
        <li className=" bg-primary text-white rounded-full px-3 py-2 hover:cursor-pointer shadow-lg">
          <button>Book a call</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
