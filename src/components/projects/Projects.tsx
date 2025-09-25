"use client";
import React from "react";
import { Title } from "../ui";
import SingleProject from "./SingleProject";
import OtherProjects from "./OtherProjects";
import { SlideInElement } from "../ui/slideInElement";

const featuredProjects = [
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
    image: "/uniLabPass.png",
    github: "https://github.com/ThanhTumG/unilab-pass-front-end",
    external: "#",
  },
  {
    title: "Online Exam System",
    description:
      "A web app for the Department of Science and Technology of Ho Chi Minh City, supporting up to 150 concurrent users with performance ranking by individual and unit",
    technologies: [
      "TypeScript",
      "ReactJS",
      "TailwindCss",
      "TanStack-Query",
      "Zustand",
    ],
    image: "/onlineExamSystem.png",
    github: "#",
    external: "#",
  },
];

const otherProjects = [
  {
    title: "Weather App",
    description:
      "A web app that provides real-time weather information and forecasts using the OpenWeatherMap API.",
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS"],
    github: "https://github.com/ThanhTumG/weather-app",
    external: "https://weather-app-thanhtumg.vercel.app/",
  },
  {
    title: "Cat Wiki",
    description:
      "A web app that provides information about different cat breeds, including images, descriptions, and characteristics.",
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS"],
    github: "https://github.com/ThanhTumG/cat-wiki",
    external: "https://cat-wiki-thanhtumg.vercel.app",
  },
  {
    title: "Job Search App",
    description:
      "A web app that allows users to search for jobs, filter results, and view job details using the The Muse API.",
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS"],
    github: "https://github.com/ThanhTumG/job-search-app",
    external: "https://job-search-app-thanhtumg.vercel.app",
  },
];

const Projects = () => {
  return (
    <SlideInElement id="projects">
      <div className="flex flex-col items-start justify-center pb-28">
        <Title index="03." content="Some Things I’ve Built" />

        <div className="flex flex-col w-full space-y-24">
          {featuredProjects.map((project, index) => (
            <SingleProject key={index} index={index} prjInfo={project} />
          ))}
        </div>

        <div className="flex flex-col mt-32 w-full text-center">
          <OtherProjects otherProjects={otherProjects} />
        </div>
      </div>
    </SlideInElement>
  );
};

export default Projects;
