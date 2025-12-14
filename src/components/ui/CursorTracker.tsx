"use client";

import { useEffect, useRef } from "react";

export default function CursorTracker() {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ("ontouchstart" in window) return;
    const circle = circleRef.current;
    if (!circle) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      const size = 40;
      circle.style.transform = `translate3d(${currentX - size / 2}px, ${currentY - size / 2}px, 0)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <div className="fixed left-0 top-0 z-50 pointer-events-none">
      <div ref={circleRef} className="h-10 w-10 rounded-full border dark:border-white border-black transition-transform duration-75 ease-out">
        <div className="h-full w-full rounded-full mix-blend-difference relative">
          <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black dark:bg-white" />
        </div>
      </div>
    </div>
  );
}
