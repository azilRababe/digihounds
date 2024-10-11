"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Showcase", href: "/showcase" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Team", href: "/team" },
  ];

  return (
    <nav className="text-black bg-white z-10 top-0 sticky p-5 shadow-2xl flex justify-between items-center">
      {/* Logo Section */}
      <Link href="/">
        <Image
          src="/images/logoipsum-325.svg"
          alt="Logo"
          className="h-10 cursor-pointer"
          height={50}
          width={120}
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <li key={item.name} className="hover:text-[#b71c1c]">
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* Call to Action (Desktop) */}
      <div className="hidden md:block">
        <Link href="/book-call">
          <button
            className="px-4 py-2 rounded-md bg-[#b71c1c] text-white border border-[#b71c1c] hover:bg-white hover:text-black 
          hover:shadow-[4px_4px_0px_0px_#b71c1c] transition duration-200"
          >
            Book a Call
          </button>
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        <CiMenuFries />
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 right-0 bg-white w-full p-5 rounded-lg shadow-xl md:hidden">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name} className="hover:text-[#b71c1c]">
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/book-call">
                <button className="px-4 py-2 rounded-md bg-[#b71c1c] text-white border border-[#b71c1c] hover:bg-white hover:text-black w-full hover:shadow-[4px_4px_0px_0px_#b71c1c] transition duration-200">
                  Book a Call
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
