"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="px-3 py-1 text-sm relative flex justify-between gap-6 items-center rounded-full bg-gray-400 dark:bg-gray-800 hover:bg-gray-00 dark:hover:bg-gray-700 transition-all duration-300"
      >
        <span className="relative z-20 -translate-y-0.5">🌙</span>
        <span className="relative z-20 -translate-y-0.5">☀️</span>

        <span
          className={twMerge(
            clsx(
              "absolute bg-gray-500 h-full max-h[99%] w-2/4 top-0 left-0 rounded-full",
              mounted && "transition-all duration-300 delay-1000",
              resolvedTheme === "light" && "translate-x-full"
            )
          )}
        ></span>
      </button>
    </>
  );
}
