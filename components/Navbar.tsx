"use client";

import React from "react";
import Link from "next/link";
// import Image from "next/image";

import { navItems } from "@/utils/data";

const Navbar = () => {
  return (
    <nav className="bg-white text-black w-fit mx-auto z-10 top-0 p-5 my-5 uppercase rounded-full shadow-lg">
      <ul className="flex items-center justify-center space-x-5 md:space-x-10">
        {/* <li className="hidden md:flex border-r-2 border-primary pr-2">
      <Link href="/">
        <Image
          src="/images/logo_0.png"
          alt="logo"
          width={50}
          height={50}
          className="bg-white"
        />
      </Link>
    </li> */}
        {navItems.map((item) => (
          <li
            aria-label={item.ariaLabel}
            key={item.name}
            className="text-sm text-black transition-all duration-300 hover:text-primary hover:bg-white hover:font-bold hover:rounded-full px-3 py-1"
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
