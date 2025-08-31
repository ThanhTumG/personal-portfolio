import { ExternalLinkIcon, Folder } from "lucide-react";
import Link from "next/link";
import React from "react";
import { GithubIcon } from "../ui/Icons";

type Props = {
  prjInfo: {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    external: string;
  };
};

const SubProject = ({ prjInfo }: Props) => {
  return (
    <div className="bg-light-navy p-6 rounded hover:translate-y-1 transition-transform duration-200 group">
      <div className="flex items-start justify-between mb-4">
        <Folder className="text-green" size={40} />
        <div className="flex space-x-4">
          <Link
            href={prjInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightest-slate hover:text-green transition-colors"
          >
            <GithubIcon className="w-6 h-6" />
          </Link>
          <Link
            href={prjInfo.external}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightest-slate hover:text-green transition-colors"
          >
            <ExternalLinkIcon size={24} />
          </Link>
        </div>
      </div>

      <h4 className="text-xl font-semibold text-lightest-slate mb-3 group-hover:text-green transition-colors">
        {prjInfo.title}
      </h4>

      <p className="text-light-slate text-sm mb-6 leading-relaxed">
        {prjInfo.description}
      </p>

      <div className="flex flex-wrap gap-3">
        {prjInfo.technologies.map((tech) => (
          <span key={tech} className="text-xs text-slate font-mono">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SubProject;
