import React, { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  translate?: number;
  animationDelay?: number;
  duration?: number;
  id?: string;
}

export const SlideInElement = ({
  children,
  translate = 30,
  animationDelay = 0,
  duration = 1.1,
  id,
}: Props) => {
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
      id={id}
      ref={containerRef}
      style={
        {
          "--translate-y-distance": `${translate}px`,
          animationDuration: `${duration}s`,
          animationDelay: `${animationDelay}ms`,
        } as React.CSSProperties
      }
      className={`inline-block opacity-0  ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};
