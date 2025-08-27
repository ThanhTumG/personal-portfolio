"use client";
import React, { useEffect, useRef, useState } from "react";
import { ImageWithFallback, Title } from "../ui";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Expo",
  "NodeJS",
];

const About = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex flex-col items-start justify-center pt-10 pb-28 ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      <Title index="01." content="About me" />

      <div className="grid md:grid-cols-3 grid-cols-1 gap-12 items-start">
        <div className="space-y-6 col-span-2 mr-6">
          <p className="text-slate leading-relaxed text-justify">
            Hi! My name is Pham Chau Thanh Tung, I am a recent graduate from Ho
            Chi Minh City University of Technology (HCMUT) with a degree in
            Computer Science. Since 2024, I have been focusing on developing
            practical web and mobile applications, applying modern technologies
            such as React, Next.js, and TypeScript. My academic and project
            experience has helped me build a solid foundation in both frontend
            development and software engineering principles.
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
                <div className="w-0 h-0 border-l-[8px] border-t-[4px] border-b-[4px] border-t-transparent border-b-transparent border-l-green" />
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="relative group md:col-span-1">
          <div className="relative z-10">
            <ImageWithFallback
              src="https://www.figma.com/make/zTAYcNzgZoqn8C43ZvOElz/Portfolio-Website-Clone?node-id=0-1&p=f&t=gXdWkKjBO6VLDIMb-0"
              alt="Thanh Tumg"
              className="w-full h-80 object-cover rounded filter grayscale hover:filter-none group-hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-green/30 hover:bg-transparent transition-all duration-300 rounded mix-blend-multiply"></div>
          </div>
          <div className="absolute inset-0 border-2 border-green rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
