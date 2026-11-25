"use client";

import { TypewriterProps } from "@/types/typewrite";
import { useEffect, useState } from "react";

type Phase = "typing" | "holding" | "deleting" | "waiting";

export default function Typewriter({
  texts,
  speed = 60,
  deleteSpeed = 40,
  delay = 1500,
  pauseBetween = 300,
  loop = true,
  className = "",
  cursor = true,
}: TypewriterProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [reducedMotion, setReducedMotion] = useState(false);

  const currentText = texts[textIndex] ?? "";
  const isLast = textIndex === texts.length - 1;

  // Respect the user's motion preference (checked after mount to avoid hydration mismatch)
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || !currentText) return;

    let timeout: ReturnType<typeof setTimeout>;

    switch (phase) {
      case "typing":
        if (charIndex < currentText.length) {
          timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
        } else if (!loop && isLast) {
          // finished the last phrase and not looping: stay put
        } else {
          setPhase("holding");
        }
        break;

      case "holding":
        timeout = setTimeout(() => setPhase("deleting"), delay);
        break;

      case "deleting":
        if (charIndex > 0) {
          timeout = setTimeout(() => setCharIndex((c) => c - 1), deleteSpeed);
        } else {
          setPhase("waiting");
        }
        break;

      case "waiting":
        timeout = setTimeout(() => {
          setTextIndex((i) => (i + 1) % texts.length);
          setPhase("typing");
        }, pauseBetween);
        break;
    }

    return () => clearTimeout(timeout);
  }, [
    phase,
    charIndex,
    currentText,
    isLast,
    loop,
    texts.length,
    speed,
    deleteSpeed,
    delay,
    pauseBetween,
    reducedMotion,
  ]);

  // Reduced motion: show the first phrase, no animation
  const visibleText = reducedMotion
    ? (texts[0] ?? "")
    : currentText.slice(0, charIndex);

  return (
    <span className={className}>
      {/* Screen readers get the full list once instead of every keystroke */}
      <span className="sr-only">{texts.join(", ")}</span>

      <span aria-hidden="true">
        {visibleText}
        {cursor && !reducedMotion && (
          <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] animate-pulse bg-current" />
        )}
      </span>
    </span>
  );
}
