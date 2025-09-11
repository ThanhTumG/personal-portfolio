"use client";
import { cn, scrollToSection } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isHidden, setIsHidden] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const lastScrollY = useRef(0);
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 150;
          const sections = navItems.map((item) =>
            document.getElementById(item.id)
          );

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(navItems[i].id);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleVisibility = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleVisibility);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleVisibility);
    };
  }, []);

  const handleLinkClick = (id: string) => {
    scrollToSection(id);
    setShowMenu(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-blue/90 backdrop-blur-sm border-b border-lightest-blue shadow-lg",
          isHidden ? "-translate-y-full" : "translate-y-0",
          "transition-transform duration-300"
        )}
      >
        <div className="flex relative items-center w-full min-h-[70px] px-10 py-4">
          <div className="absolute left-10">
            <Image src="/Logo.svg" alt="Logo" width={47} height={47} />
          </div>

          <div className="hidden md:flex space-x-8 ml-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "px-2 relative text-sm font-medium hover:text-cyan cursor-pointer",
                  activeSection === item.id
                    ? "text-cyan"
                    : "text-light-slate hover:text-cyan"
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan" />
                )}
              </button>
            ))}

            <Link
              className="hidden md:block px-4 py-2 ml-2 border border-cyan rounded-sm text-cyan hover:bg-cyan/10 transition-all duration-100 text-sm font-medium"
              href={"./CV_PhamChauThanhTung.pdf"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>
          </div>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden block items-center ml-auto text-cyan cursor-pointer"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={cn(
          "md:hidden fixed top-0 left-0 bottom-0 w-auto z-50 bg-blue/90 backdrop-blur-sm border-r border-lightest-blue shadow-lg",
          showMenu ? "translate-x-0" : "-translate-x-full",
          "transition-transform duration-300"
        )}
      >
        <div className="flex flex-col items-start mt-20 space-y-10 px-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={cn(
                "px-1 relative text-sm font-medium hover:text-cyan cursor-pointer",
                activeSection === item.id
                  ? "text-cyan"
                  : "text-light-slate hover:text-cyan"
              )}
            >
              {item.label}
              {activeSection === item.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan" />
              )}
            </button>
          ))}

          <Link
            className="px-4 py-2 border border-cyan rounded-sm text-cyan hover:bg-cyan/10 transition-all duration-100 text-sm font-medium"
            href={"./CV_PhamChauThanhTung.pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
