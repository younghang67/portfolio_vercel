"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";

type ViewTransitionLike = { ready: Promise<void>; finished: Promise<void> };
type DocWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => ViewTransitionLike;
};

const REVEAL_MS = 700;

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const busy = useRef(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (busy.current) return;

    const next = isDark ? "light" : "dark";
    const root = document.documentElement;
    const doc = document as DocWithViewTransition;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reduced motion: switch instantly
    if (reducedMotion) {
      setTheme(next);
      return;
    }

    // Browsers without View Transitions: soft color fade instead
    if (!doc.startViewTransition) {
      busy.current = true;
      root.classList.add("theme-fade");
      setTheme(next);
      window.setTimeout(() => {
        root.classList.remove("theme-fade");
        busy.current = false;
      }, 600);
      return;
    }

    // Circular reveal that grows from the center of the button
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    busy.current = true;
    const transition = doc.startViewTransition(() => {
      // flushSync makes sure the new theme class is on <html> before the browser snapshots the "after" state
      flushSync(() => setTheme(next));
    });

    transition.ready
      .then(() => {
        root.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          {
            duration: REVEAL_MS,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      })
      .catch(() => {});

    transition.finished.finally(() => {
      busy.current = false;
    });
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={mounted ? isDark : false}
      aria-label="Toggle dark mode"
      data-theme-toggle
      onClick={handleClick}
      className="group relative h-7 w-16 shrink-0 cursor-pointer rounded-full bg-sky-300 shadow-inner ring-1 ring-black/10 transition-all duration-500 hover:shadow-md active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:bg-indigo-950 dark:ring-white/10 motion-reduce:transition-none">
      {/* Scenery layer (clipped to the pill) */}
      <span aria-hidden className="absolute inset-0 overflow-hidden rounded-full">
        {/* Stars: twinkle in dark mode */}
        <span className="absolute left-2.5 top-2 h-0.5 w-0.5 scale-0 rounded-full bg-white opacity-0 transition-all duration-500 dark:scale-100 dark:opacity-100 dark:animate-pulse motion-reduce:animate-none" />
        <span className="absolute left-5 top-4 h-[3px] w-[3px] scale-0 rounded-full bg-white opacity-0 transition-all delay-100 duration-500 dark:scale-100 dark:opacity-100 dark:animate-pulse [animation-delay:400ms] motion-reduce:animate-none" />
        <span className="absolute bottom-1.5 left-3 h-0.5 w-0.5 scale-0 rounded-full bg-white opacity-0 transition-all delay-200 duration-500 dark:scale-100 dark:opacity-100 dark:animate-pulse [animation-delay:800ms] motion-reduce:animate-none" />

        {/* Clouds: drift away in dark mode */}
        <span className="absolute bottom-1.5 right-2 h-2 w-5 rounded-full bg-white/90 transition-all duration-500 dark:translate-y-4 dark:opacity-0" />
        <span className="absolute bottom-3 right-4 h-1.5 w-3 rounded-full bg-white/70 transition-all delay-75 duration-500 dark:translate-y-4 dark:opacity-0" />
      </span>

      {/* Knob: springs across, stretches while pressed */}
      <span
        aria-hidden
        className="absolute left-0.5 top-0.5 grid h-6 w-6 origin-left translate-x-0 place-items-center rounded-full bg-white text-amber-500 shadow-md transition-all duration-500 ease-[cubic-bezier(0.34,1.3,0.64,1)] group-active:scale-x-125 dark:origin-right dark:translate-x-9 dark:bg-slate-100 dark:text-indigo-900 motion-reduce:transition-none">
        {/* Sun: rays spin on hover, rolls away in dark mode */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="col-start-1 row-start-1 h-4 w-4 scale-100 rotate-0 opacity-100 transition-all duration-500 dark:-rotate-90 dark:scale-50 dark:opacity-0">
          <circle cx="12" cy="12" r="4" fill="currentColor" />
          <g className="origin-center [transform-box:fill-box] group-hover:animate-[spin_6s_linear_infinite] motion-reduce:animate-none">
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </g>
        </svg>

        {/* Moon: rolls in in dark mode */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="col-start-1 row-start-1 h-4 w-4 rotate-90 scale-50 opacity-0 transition-all duration-500 dark:rotate-0 dark:scale-100 dark:opacity-100">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </span>
    </button>
  );
}
