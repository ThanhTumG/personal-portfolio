import React from "react";
import SubProject from "./SubProject";
import { SlideInElement } from "../ui/slideInElement";

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
  return (
    <SlideInElement>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h3 className="text-2xl font-bold text-lightest-slate mb-12">
          Other Noteworthy Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {otherProjects.map((project, index) => (
            <SubProject key={index} prjInfo={project} />
          ))}
        </div>
      </div>
    </SlideInElement>
  );
};

export default OtherProjects;
