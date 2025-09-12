"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  duration?: number;
};

const InitialLoader = ({ children, duration }: Props) => {
  const [showLoader, setShowLoader] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, duration || 2000);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!showLoader) {
    return <>{children}</>;
  }

  const generateWaveText = (text: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className={`min-w-[12px] inline-block opacity-0 ${
          index % 2 === 0 ? "animate-slide-from-up" : "animate-slide-from-down"
        }`}
        style={{
          animationDelay: `${char == " " ? 0 : index * 0.1}s`,
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center bg-gradient-animate-xy justify-center">
      <div className="flex items-center gap-4">
        <div className="text-4xl tracking-wider text-slate-200 font-mono">
          {generateWaveText("TungPham portfolio")}
        </div>
      </div>
    </div>
  );
};

export default InitialLoader;
