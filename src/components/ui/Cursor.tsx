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
    <div
      className={
        "fixed top-0 left-0 rounded-full pointer-events-none z-60 transition-all duration-100 ease-out bg-white/60"
      }
      style={{
        width: 24,
        height: 24,
        transform: `translate3d(${pos.x - 12}px, ${pos.y - 12}px, 0)`,
      }}
    />
  );
}
