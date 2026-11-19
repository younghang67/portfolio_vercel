import { typewritingData } from "@/data/typewrite";
import Typewriter from "../ui/Typewriter";

const techStack = ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"];

export default function HeroBanner() {
  return (
    <section id="hero" className="dotbg px-4 py-20 md:py-28">
      <div className="container mx-auto flex flex-col items-center text-center gap-6">
        {/* Status pill */}
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
          Based in Kathmandu, Nepal
        </span>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tight leading-none">Rusan Limbu</h1>

        {/* Typewriter line (fixed height so the page never jumps) */}
        <p className="flex min-h-8 items-center justify-center gap-2 text-lg md:text-2xl font-semibold">
          <span className="opacity-60">I build</span> <Typewriter texts={typewritingData} speed={60} className="text-black dark:text-white" />
        </p>

        {/* Intro */}
        <p className="max-w-2xl opacity-80 leading-relaxed">
          I build product-focused web applications from interface to server, from SaaS platforms to multilingual business websites, with 3+ years of
          shipping real products.
        </p>

        {/* Buttons */}
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:bg-white dark:text-black">
            View projects
          </a>
          <a
            href="mailto:rusanlimbu123@gmail.com"
            className="rounded-full border border-gray-400 dark:border-gray-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-200 dark:hover:bg-gray-800">
            Get in touch
          </a>
        </div>

        {/* Tech chips */}
        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {techStack.map((tech) => (
            <li key={tech} className="rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1 text-xs font-semibold">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
