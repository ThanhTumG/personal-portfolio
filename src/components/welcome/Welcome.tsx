import React from "react";
import { ArrowDown } from "lucide-react";

const Welcome = () => {
  return (
    <div
      id="welcome"
      className="min-h-screen flex flex-col items-start justify-center animate-fade-in"
    >
      <p className="text-green mb-6 font-mono text-base md:text-lg">
        Hi, my name is
      </p>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-lightest-slate mb-4 leading-tight">
        Pham Chau Thanh Tung
      </h1>

      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-8 leading-tight">
        I build software products.
      </h2>

      <p className="text-lg md:text-xl text-slate max-w-2xl mb-12 leading-relaxed">
        I am a recent graduate in Computer Science with a strong foundation in
        software engineering. My focus is on building practical software
        applications that enhance user experience and deliver real value.
      </p>

      <div className="absolute bottom-8 left-1/2 hidden md:block">
        <button className="text-slate hover:text-green transition-colors animate-bounce">
          <ArrowDown size={24} />
        </button>
      </div>
    </div>
  );
};

export default Welcome;
