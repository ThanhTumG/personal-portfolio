import React from "react";
import { ImageWithFallback } from "../ui";
import { GitHubIcon } from "../ui/Icons";
import { ExternalLinkIcon } from "lucide-react";

type Props = {
  index: number;
  prjInfo: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    external: string;
  };
};

const SingleProject = ({ prjInfo, index }: Props) => {
  return (
    <div
      className={`grid grid-cols-12 gap-8 items-center group ${
        index == 0 ? "" : "text-right"
      }`}
    >
      <div className={`col-span-7 ${index % 2 == 0 ? "" : "md:order-2"}`}>
        <ImageWithFallback
          src={prjInfo.image}
          alt={prjInfo.title}
          className="w-full h-64 md:h-80 rounded overflow-hidden object-fit filter brightness-50 group-hover:brightness-100 transition-all duration-300"
          loading="lazy"
        />
      </div>

      <div className={`col-span-5 ${index % 2 == 0 ? "" : "md:order-1"}`}>
        <p className="text-green font-mono text-sm mb-2">Featured Project</p>
        <h3 className="text-2xl font-bold text-light-slate mb-4 hover:text-green transition-colors">
          {prjInfo.title}
        </h3>

        <div className="bg-light-navy p-6 rounded shadow-lg mb-6">
          <p className="text-light-slate leading-relaxed text-justify">
            {prjInfo.description}
          </p>
        </div>

        <div
          className={`flex flex-wrap gap-4 mb-6 ${
            index % 2 == 0 ? "" : "md:justify-end"
          }`}
        >
          {prjInfo.technologies.map((tech, index) => (
            <span key={index} className="text-sm text-slate font-mono">
              {tech}
            </span>
          ))}
        </div>

        <div
          className={`flex space-x-4 ${index % 2 == 0 ? "" : "justify-end"}`}
        >
          <a
            href={prjInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightest-slate hover:text-green transition-colors"
          >
            <GitHubIcon className="w-6 h-6" />
          </a>

          <a
            href={prjInfo.external}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightest-slate hover:text-green transition-colors"
          >
            <ExternalLinkIcon size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
