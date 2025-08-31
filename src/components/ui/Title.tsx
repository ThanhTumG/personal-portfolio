import React from "react";

type Props = {
  index: string;
  content: string;
};

const Title = ({ index, content }: Props) => {
  return (
    <h2 className="flex w-full items-center mb-12 text-2xl md:text-3xl font-bold text-lightest-slate">
      <span className="text-cyan mr-4 font-mono text-lg md:text-xl">
        {index}
      </span>
      {content}
      <div className="flex-1 h-px w-auto bg-lightest-blue ml-8 max-w-xs" />
    </h2>
  );
};

export default Title;
