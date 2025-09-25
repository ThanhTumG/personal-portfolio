import React from "react";
import { ImageWithFallback } from "../ui";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "../ui/Icons";
import { SlideInElement } from "../ui/slideInElement";

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
    <SlideInElement>
      <div
        className={`relative w-full flex md:flex-row items-center group
        ${index == 1 ? "text-left md:justify-end" : "md:text-right"}`}
      >
        <div className="md:max-w-[57%] relative w-full">
          <ImageWithFallback
            src={prjInfo.image}
            alt={prjInfo.title}
            className="w-full h-[24rem] rounded overflow-hidden object-fit filter brightness-25 md:brightness-50 md:group-hover:brightness-95 transition-all duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 md:opacity-0 opacity-100 bg-blue/70 rounded"></div>
        </div>

        <div
          className={`absolute z-10 px-6 md:px-0 ${
            index % 2 == 0 ? "md:left-1/2" : "md:right-1/2"
          }`}
        >
          <p className="text-cyan font-mono text-sm mb-2">Featured Project</p>
          <h3 className="text-2xl font-bold text-light-slate mb-4 hover:text-cyan transition-colors">
            {prjInfo.title}
          </h3>

          <div className="md:bg-light-blue md:p-6 rounded md:shadow-lg mb-6">
            <p className="text-light-slate leading-relaxed text-justify">
              {prjInfo.description}
            </p>
          </div>

          <div
            className={`flex flex-wrap gap-4 mb-6 ${
              index % 2 == 1 ? "md:mr-[75px]" : "md:justify-end md:ml-[75px]"
            }`}
          >
            {prjInfo.technologies.map((tech, index) => (
              <span
                key={`tech-${index}`}
                className="text-sm text-slate font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          <div
            className={`flex space-x-4 ${
              index % 2 == 1 ? "" : "md:justify-end"
            }`}
          >
            <Link
              href={prjInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightest-slate hover:text-cyan transition-colors"
            >
              <GithubIcon className="w-6 h-6" />
            </Link>

            <Link
              href={prjInfo.external}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightest-slate hover:text-cyan transition-colors"
            >
              <ExternalLinkIcon size={24} />
            </Link>
          </div>
        </div>
      </div>
    </SlideInElement>
  );
};

export default SingleProject;
