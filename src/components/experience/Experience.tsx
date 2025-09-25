"use client";
import React, { useState } from "react";
import { Title } from "../ui";
import Link from "next/link";
import { SlideInElement } from "../ui/slideInElement";

const jobs = [
  {
    company: "MeU Solutions",
    title: "FrontEnd Developer Intern",
    period: "June 2024 - August 2024",
    url: "https://meu-solutions.com",
    responsibilities: [
      "Underwent training and actively developed proficiency in JavaScript and TypeScript programming languages, alongside a variety of JavaScript libraries and frameworks.",
      "Contributed to the development of the Online Exam project as a Front-End Developer, focusing on building administrative interfaces and integrating APIs to implement management functionalities.",
    ],
  },
];

const Experience = () => {
  const [activeJob, setActiveJob] = useState(0);

  return (
    <SlideInElement id="experience">
      <div className="flex flex-col items-start justify-center pb-28">
        <Title index="02." content="Where I’ve worked" />

        <div className="flex md:flex-row flex-col gap-8">
          <div className="flex md:flex-col flex-row">
            {jobs.map((job, index) => (
              <button
                key={job.company}
                onClick={() => setActiveJob(index)}
                className={`px-6 py-3 text-left border-l-0 md:border-l-2 md:border-b-0 border-b-2 transition-all duration-200 whitespace-nowrap md:whitespace-normal ${
                  activeJob === index
                    ? "text-cyan border-cyan bg-light-blue"
                    : "text-slate border-lightest-blue hover:text-cyan hover:bg-light-blue"
                }`}
              >
                <span className="text-sm font-medium">{job.company}</span>
              </button>
            ))}
          </div>

          <div className="flex min-h-72 max-w-2xl">
            <div key={activeJob} className="animate-fade-in">
              <h3 className="text-xl font-medium text-lightest-slate mb-2">
                {jobs[activeJob].title}
                <span className="text-cyan"> @</span>
                <Link
                  href={jobs[activeJob].url}
                  className="text-cyan hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {jobs[activeJob].company}
                </Link>
              </h3>

              <p className="text-sm text-slate font-mono mb-6">
                {jobs[activeJob].period}
              </p>

              <ul className="space-y-4">
                {jobs[activeJob].responsibilities.map(
                  (responsibility, index) => (
                    <li
                      key={index}
                      className="flex items-start text-slate leading-relaxed"
                    >
                      <div className="w-0 h-0 mt-2 mr-2 border-l-[8px] border-t-[4px] border-b-[4px] border-t-transparent border-b-transparent border-l-cyan" />
                      <span className="text-justify">{responsibility}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideInElement>
  );
};

export default Experience;
