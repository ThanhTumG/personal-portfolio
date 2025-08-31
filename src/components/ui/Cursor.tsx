"use client";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      {Array.from({ length: 10 }, (_, index) => index + 1).map((_, index) => {
        const side = 100 + index ** 3;
        return (
          <div
            key={index}
            className="fixed top-0 left-0 blur-2xl text-black rounded-full pointer-events-none z-[-10] duration-[0s]"
            style={{
              backgroundColor: `rgba(51, 85, 153, ${0.008 + index * 0.005})`,
              width: side,
              height: side,
              transform: `translate3d(${pos.x - side / 2}px, ${
                pos.y - side / 2
              }px, 0)`,
            }}
          />
        );
      })}
    </>
  );
}
