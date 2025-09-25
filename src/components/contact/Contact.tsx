"use client";
import Link from "next/link";
import React from "react";
import { SlideInElement } from "../ui/slideInElement";

const Contact = () => {
  return (
    <SlideInElement id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h4 className="text-cyan font-mono mb-5">04. What’s Next?</h4>
        <h2 className="text-3xl md:text-5xl font-bold text-lightest-slate mb-6">
          Get In Touch
        </h2>

        <p className="text-lg text-slate mb-12 max-w-lg mx-auto leading-relaxed">
          I am currently seeking opportunities to start my career as a Software
          Developer. If you think my skills and passion could be a good fit for
          your team, feel free to get in touch with me. I look forward to
          collaborating and contributing to exciting projects!
        </p>

        <Link
          href="mailto:thanhtumg.2510@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 border rounded border-cyan text-cyan
        hover:bg-cyan/10 font-medium hover:shadow-[5px_5px_0px_0px_rgba(230,241,255,0.9)] hover:-translate-x-[5px] hover:-translate-y-[5px] transition-all duration-150"
        >
          Say Hello
        </Link>
      </div>
    </SlideInElement>
  );
};

export default Contact;
