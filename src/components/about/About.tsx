"use client";
import React from "react";
import { ImageWithFallback, Title } from "../ui";
import { SlideInElement } from "../ui/slideInElement";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Expo",
  "NodeJS",
];

const About = () => {
  return (
    <SlideInElement id="about">
      <div className="flex flex-col items-start justify-center pb-28">
        <Title index="01." content="About me" />

        <div className="grid md:grid-cols-3 grid-cols-1 gap-12 items-start">
          <div className="space-y-6 col-span-2 mr-6">
            <p className="text-slate leading-relaxed text-justify">
              Hi! My name is Pham Chau Thanh Tung, I am a recent graduate from
              Ho Chi Minh City University of Technology (HCMUT) with a degree in
              Computer Science. Since 2024, I have been focusing on developing
              practical web and mobile applications, applying modern
              technologies such as React, Next.js, and TypeScript. My academic
              and project experience has helped me build a solid foundation in
              both frontend development and software engineering principles.
              <br />
              <br />
              My career goal is to become a skilled Software Engineer, creating
              user-friendly, secure, and high-performance applications. In the
              future, I aim to expand my expertise towards Fullstack Development
              and contribute to impactful projects.
              <br />
              <br />
              Here are a few technologies I’ve been working with recently:
            </p>

            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center text-sm text-slate font-mono gap-1.5"
                >
                  <div className="w-0 h-0 border-l-[8px] border-t-[4px] border-b-[4px] border-t-transparent border-b-transparent border-l-cyan" />
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="relative group md:col-span-1">
            <div className="relative z-10">
              <ImageWithFallback
                src="/avatar.jpg"
                alt="Thanh Tumg"
                className="w-full h-80 object-fit rounded filter grayscale hover:filter-none group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-cyan/30 hover:bg-transparent transition-all duration-300 rounded mix-blend-multiply"></div>
            </div>
            <div className="absolute inset-0 border-2 border-cyan rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </SlideInElement>
  );
};

export default About;
