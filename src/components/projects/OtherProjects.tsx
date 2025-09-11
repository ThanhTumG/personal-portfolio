import React, { useEffect, useRef, useState } from "react";
import SubProject from "./SubProject";

type Props = {
  otherProjects: {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    external: string;
  }[];
};

const OtherProjects = ({ otherProjects }: Props) => {
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
      className={`${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      } max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20`}
    >
      <h3 className="text-2xl font-bold text-lightest-slate mb-12">
        Other Noteworthy Projects
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {otherProjects.map((project, index) => (
          <SubProject key={index} prjInfo={project} />
        ))}
      </div>
    </div>
  );
};

export default OtherProjects;
