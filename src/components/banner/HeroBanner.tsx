import { typewritingData } from "@/data/typewrite";
import Typewriter from "../ui/Typewriter";

const techStack = ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"];

export default function HeroBanner() {
  return (
    <section id="hero" className="dotbg px-4 py-20 md:py-28">
      <div className="container mx-auto flex flex-col items-center gap-6 text-center">
        {/* Name */}
        <h1 className="text-5xl leading-none font-bold tracking-tight uppercase sm:text-6xl md:text-8xl">
          Rusan Limbu
        </h1>

        {/* Typewriter line (fixed height so the page never jumps) */}
        <p className="flex min-h-8 items-center justify-center gap-2 text-lg font-semibold md:text-2xl">
          <span className="opacity-60">I build</span>{" "}
          <Typewriter
            texts={typewritingData}
            speed={60}
            className="text-black dark:text-white"
          />
        </p>

        {/* Intro */}
        <p className="max-w-2xl leading-relaxed opacity-80">
          I build product-focused web applications from interface to server,
          from SaaS platforms to multilingual business websites, with 3+ years
          of shipping real products.
        </p>

        {/* Buttons */}
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-black px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:bg-white dark:text-black"
          >
            View projects
          </a>
          <a
            href="mailto:rusanlimbu123@gmail.com"
            className="rounded-full border border-gray-400 px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-800"
          >
            Get in touch
          </a>
          <a
            href="/files/Rusan_Limbu_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-400 px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-800"
          >
            View Resume
          </a>
        </div>

        {/* Tech chips */}
        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold dark:border-gray-700"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
