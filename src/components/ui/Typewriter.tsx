"use client";

import { TypewriterProps } from "@/types/typewrite";
import { useEffect, useState } from "react";

export default function Typewriter({ texts, speed = 60, deleteSpeed = 40, delay = 1500, className = "", cursor = true }: TypewriterProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentText = texts[textIndex];

  useEffect(() => {
    if (!currentText) {
      return;
    }
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, deleteSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentText, texts.length, speed, deleteSpeed, delay]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && <span className="animate-pulse"> |</span>}
    </span>
  );
}
