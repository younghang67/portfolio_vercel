"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor="hover"]';

export default function CursorTracker() {
  const positionRef = useRef<HTMLDivElement>(null); // follows the mouse
  const scaleRef = useRef<HTMLDivElement>(null); // show / hover / press scale
  const glassRef = useRef<HTMLDivElement>(null); // velocity squash & stretch

  useEffect(() => {
    // Skip touch / coarse-pointer devices
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    const position = positionRef.current;
    const scale = scaleRef.current;
    const glass = glassRef.current;
    if (!position || !scale || !glass) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const SIZE = 44;
    const EASE = reducedMotion ? 0.35 : 0.18;

    let mouseX = 0;
    let mouseY = 0;
    let x = 0;
    let y = 0;
    let stretch = 0;
    let angle = 0;
    let visible = false;
    let hovering = false;
    let pressed = false;
    let initialized = false;
    let raf: number | null = null;

    const applyScale = () => {
      const s = !visible ? 0 : pressed ? 0.85 : hovering ? 1.7 : 1;
      scale.style.transform = `scale(${s})`;
    };

    const tick = () => {
      const prevX = x;
      const prevY = y;
      x += (mouseX - x) * EASE;
      y += (mouseY - y) * EASE;

      if (!reducedMotion) {
        const dx = x - prevX;
        const dy = y - prevY;
        const speed = Math.hypot(dx, dy);

        if (speed > 0.5) angle = Math.atan2(dy, dx); // keep last direction when nearly still
        stretch += (Math.min(speed / 50, 0.3) - stretch) * 0.25;

        const deg = (angle * 180) / Math.PI;
        // stretch along the direction of travel, without rotating the highlights
        glass.style.transform = `rotate(${deg}deg) scale(${1 + stretch}, ${1 - stretch * 0.55}) rotate(${-deg}deg)`;
      }

      position.style.transform = `translate3d(${x - SIZE / 2}px, ${y - SIZE / 2}px, 0)`;

      const settled =
        Math.abs(mouseX - x) < 0.1 &&
        Math.abs(mouseY - y) < 0.1 &&
        stretch < 0.002;
      raf = settled ? null : requestAnimationFrame(tick);
    };

    const start = () => {
      if (raf === null) raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!initialized) {
        // snap to the first position so it doesn't fly in from the corner
        x = mouseX;
        y = mouseY;
        position.style.transform = `translate3d(${x - SIZE / 2}px, ${y - SIZE / 2}px, 0)`;
        initialized = true;
      }
      if (!visible) {
        visible = true;
        applyScale();
      }
      start();
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target;
      hovering =
        target instanceof Element &&
        target.closest(INTERACTIVE_SELECTOR) !== null;
      applyScale();
    };

    const onDown = () => {
      pressed = true;
      applyScale();
    };
    const onUp = () => {
      pressed = false;
      applyScale();
    };
    const onLeave = () => {
      visible = false;
      applyScale();
    };
    const onEnter = () => {
      visible = initialized;
      applyScale();
    };

    const root = document.documentElement;
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    root.addEventListener("mouseleave", onLeave);
    root.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      root.removeEventListener("mouseleave", onLeave);
      root.removeEventListener("mouseenter", onEnter);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={positionRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{ willChange: "transform" }}
    >
      <div
        ref={scaleRef}
        className="glass-cursor-scale"
        style={{ transform: "scale(0)" }}
      >
        <div ref={glassRef} className="glass-cursor" />
      </div>
    </div>
  );
}
