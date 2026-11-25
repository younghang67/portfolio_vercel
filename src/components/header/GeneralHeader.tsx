"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ThemeToggle from "../utils/ThemeToggle";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function GeneralHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  // Add a shadow/border once the page has scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link of the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      // a section counts as "current" when it crosses the middle band of the screen
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-10 border-b bg-white/70 backdrop-blur-md transition-all duration-300 dark:bg-gray-950/70 ${
        scrolled
          ? "border-gray-300 shadow-sm dark:border-gray-800"
          : "border-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
        {/* Logo */}
        <a href="#hero" aria-label="Go to top" className="shrink-0">
          {/* dark mode image */}
          <Image
            src="/logo/dark-logo-160x160.png"
            alt="Logo"
            width={40}
            height={40}
            className="hidden dark:block"
          />
          {/* light mode image */}
          <Image
            src="/logo/light-logo-160x160.png"
            alt="Logo"
            width={40}
            height={40}
            className="block dark:hidden"
          />
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-gray-300 bg-white/60 p-1 dark:border-gray-800 dark:bg-gray-900/60">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`block rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide uppercase transition-colors duration-300 ${
                      isActive
                        ? "bg-black text-white dark:bg-white dark:text-black"
                        : "opacity-70 hover:bg-gray-200 hover:opacity-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right side: theme toggle + hamburger */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-gray-200 md:hidden dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-gray-300 px-4 py-4 md:hidden dark:border-gray-800"
        >
          <ul className="container mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? "location" : undefined}
                    className={`block rounded-xl px-4 py-3 font-semibold tracking-wide uppercase transition-colors ${
                      isActive
                        ? "bg-black text-white dark:bg-white dark:text-black"
                        : "hover:bg-gray-200 dark:hover:bg-gray-800"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
