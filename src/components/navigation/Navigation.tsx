"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-sm border-b border-lightest-navy shadow-lg">
      <div className="flex relative items-center w-ful px-10 py-4">
        <button className="absolute left-10 cursor-pointer">
          <Image src="/Logo.svg" alt="Logo" width={47} height={47} />
        </button>

        <div className="hidden md:flex space-x-8 ml-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {}}
              className="text-sm font-medium hover:text-green"
            >
              {item.label}
            </button>
          ))}

          <Link
            className="hidden md:block px-4 py-2 ml-2 border border-green rounded-sm text-green hover:bg-green/10 transition-all duration-100 text-sm font-medium"
            href={"./CV_PhamChauThanhTung.pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
