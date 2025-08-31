"use client";
import {
  About,
  Contact,
  Experience,
  Footer,
  Navigation,
  Projects,
  Welcome,
} from "@/components";
import { Cursor } from "@/components/ui";
import React from "react";

export default function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans">
      <Cursor />
      <Navigation />
      <div className="flex flex-col max-w-6xl md:px-16 px-6 pb-10 mx-auto w-full">
        <Welcome />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
