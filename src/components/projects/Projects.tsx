"use client";
import React, { useEffect, useRef, useState } from "react";
import { Title } from "../ui";
import SingleProject from "./SingleProject";

const featuredProjects = [
  {
    title: "Online Exam System",
    description:
      "A web app for the Department of Science and Technology of Ho Chi Minh City, supporting up to 150 concurrent users with performance ranking by individual and unit",
    technologies: [
      "VS Code",
      "TypeScript",
      "ReactJS",
      "TailwindCss",
      "TanStack Query",
      "Zustand",
      "GitLab",
    ],
    image: "/onlineExamSystem.png",
    github: "#",
    external: "#",
  },
  {
    title: "UniLab Pass",
    description:
      "A mobile app for university lab access control using multi-factor authentication with QR code scanning and facial recognition.",
    technologies: [
      "Expo",
      "TypeScript",
      "React Native",
      "React Native Paper",
      "Zustand",
    ],
    image: "#",
    github: "https://github.com/ThanhTumG/unilab-pass-front-end",
    external: "#",
  },
];

const Projects = () => {
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
      className={`flex flex-col items-start justify-center pb-28 ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      <Title index="03." content="Some Things I’ve Built" />

      <div className="flex flex-col space-y-24">
        {featuredProjects.map((project, index) => (
          <SingleProject key={index} index={index} prjInfo={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
