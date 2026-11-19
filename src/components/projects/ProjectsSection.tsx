import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type ProjectLink = { label: string; href: string };

type Project = {
  name: string;
  tagline: string;
  role: string;
  links: ProjectLink[];
  description: string;
  highlights: string[];
  stack: string[];
};

const projects: Project[] = [
  {
    name: "JapaneseResume.com",
    tagline: "Resume Builder for Japan",
    role: "Frontend & Backend",
    links: [{ label: "japaneseresume.com", href: "https://www.japaneseresume.com/" }],
    description:
      "A web platform that helps job seekers create Japan-standard resumes and career history documents, with templates, a guided editor and PDF export.",
    highlights: [
      "Developed key frontend experiences for the resume editing and template workflow.",
      "Built backend logic for formatting, building and data cleaning, turning raw input into structured, export-ready documents.",
      "Delivered output that fits strict, locale-specific document conventions.",
    ],
    stack: ["Next.js", "React", "Express.js", "Node.js"],
  },
  {
    name: "ReviewShare",
    tagline: "Review Aggregation and Proof Pages",
    role: "Frontend",
    links: [{ label: "reviewsha.re", href: "https://reviewsha.re/" }],
    description: "A SaaS product that gathers customer reviews from multiple platforms into one shareable page and embeddable widgets.",
    highlights: [
      "Built the frontend and marketing homepage, including product showcase, pricing and calls to action.",
      "Implemented light and dark theme-aware layouts with optimised imagery for fast loading.",
      "Translated product positioning into a clear, conversion-oriented landing experience.",
    ],
    stack: ["Next.js", "React"],
  },
  {
    name: "Benkyō Mashou",
    tagline: "Japanese Learning Platform",
    role: "Frontend & Backend",
    links: [{ label: "benkyoumashou.com", href: "https://benkyoumashou.com/" }],
    description:
      "A Japanese-language learning platform with lessons, grammar guides, speaking practice, graded reading, flashcards and a large library of free interactive tools, also available as a mobile app.",
    highlights: [
      "Built frontend features across lessons, grammar content and interactive tools like quizzes, converters and reading practice.",
      "Implemented backend functionality supporting user accounts and learning features.",
      "Structured a content-heavy site with strong SEO foundations across blog, vocabulary and grammar sections.",
    ],
    stack: ["Next.js", "React", "Node.js"],
  },
  {
    name: "Akaru Cleaning & Plus Pace Cleaning",
    tagline: "Business Websites",
    role: "Full Stack",
    links: [
      { label: "akarucleaning.com", href: "https://akarucleaning.com/en/" },
      { label: "pluspacecleaning.com", href: "https://pluspacecleaning.com/en" },
    ],
    description:
      "Bilingual (English / Japanese) websites for two cleaning companies. Akaru Cleaning serves homes, offices, hotels and Airbnbs across the Tokyo region.",
    highlights: [
      "Designed and developed both sites end to end, covering frontend, backend and deployment.",
      "Created service pages, pricing, location pages, FAQs and contact flows with a clear path to booking, optimised for mobile.",
      "Implemented bilingual routing and local-search-friendly metadata to support discovery.",
    ],
    stack: ["Next.js", "React", "Node.js"],
  },
];

type Prop = {
  className?: string;
};
export default function ProjectsSection({ className }: Prop) {
  return (
    <section id="projects" className={twMerge(className, "px-4 py-20 scroll-mt-16")}>
      <div className="container mx-auto">
        {/* Section heading */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold uppercase">Projects</h2>
          <p className="mt-4 opacity-70">
            Products and websites I've built, from SaaS tools to content-heavy platforms and bilingual business sites.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group relative flex flex-col rounded-2xl border border-gray-300 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-500 dark:hover:border-gray-600">
              {/* Top row: index + role badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-mono opacity-50">{String(index + 1).padStart(2, "0")}</span>
                <span className="uppercase font-semibold text-xs tracking-wider px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800">
                  {project.role}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold leading-tight">{project.name}</h3>
              <p className="mt-1 text-sm uppercase font-semibold tracking-wide opacity-60">{project.tagline}</p>

              {/* Links */}
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold underline underline-offset-4 decoration-gray-400 hover:decoration-current transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Description */}
              <p className="mt-5 opacity-80 leading-relaxed">{project.description}</p>

              {/* Highlights */}
              <ul className="mt-5 space-y-2 text-sm opacity-80">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Stack (pushed to the bottom so cards align) */}
              <div className="mt-8 pt-5 border-t border-gray-300 dark:border-gray-800 flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs font-semibold px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
