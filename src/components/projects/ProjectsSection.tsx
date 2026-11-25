import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type ProjectLink = { label: string; href: string };
type ProjectPreview = { src: string; href: string; alt: string };

type Project = {
  name: string;
  tagline: string;
  role: string;
  links: ProjectLink[];
  previews: ProjectPreview[];
  description: string;
  highlights: string[];
  stack: string[];
};

const projects: Project[] = [
  {
    name: "JapaneseResume.com",
    tagline: "Resume Builder for Japan",
    role: "Frontend & Backend",
    links: [
      { label: "japaneseresume.com", href: "https://www.japaneseresume.com/" },
    ],
    previews: [
      {
        src: "/websites/japaneseResume.webp",
        href: "https://www.japaneseresume.com/",
        alt: "Japanese Resume website",
      },
    ],
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
    previews: [
      {
        src: "/websites/reviewShare.webp",
        href: "https://reviewsha.re/",
        alt: "ReviewShare website",
      },
    ],
    description:
      "A SaaS product that gathers customer reviews from multiple platforms into one shareable page and embeddable widgets.",
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
    previews: [
      {
        src: "/websites/benkyomashou.webp",
        href: "https://benkyoumashou.com/",
        alt: "Benkyō Mashou website",
      },
    ],
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
      {
        label: "pluspacecleaning.com",
        href: "https://pluspacecleaning.com/en",
      },
    ],
    previews: [
      {
        src: "/websites/akaruCleaning.webp",
        href: "https://akarucleaning.com/en/",
        alt: "Akaru Cleaning website",
      },
      {
        src: "/websites/pluspace.webp",
        href: "https://pluspacecleaning.com/en",
        alt: "Plus Pace Cleaning website",
      },
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
    <section
      id="projects"
      className={twMerge(className, "scroll-mt-16 px-4 py-20")}
    >
      <div className="container mx-auto">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold uppercase md:text-4xl">Projects</h2>
          <p className="mt-4 opacity-70">
            Products and websites I&apos;ve built, from SaaS tools to
            content-heavy platforms and bilingual business sites.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900/60 dark:hover:border-gray-600"
            >
              <div
                className={`grid ${project.previews.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}
              >
                {project.previews.map((preview) => (
                  <a
                    key={preview.src}
                    href={preview.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${preview.alt} (opens in a new tab)`}
                    className="group/image relative aspect-16/9 overflow-hidden bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-blue-500 dark:bg-gray-800"
                  >
                    <Image
                      src={preview.src}
                      alt={preview.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 group-hover/image:scale-105"
                    />
                    <span className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 text-sm font-semibold text-white opacity-0 transition-opacity group-hover/image:opacity-100 group-focus-visible/image:opacity-100">
                      Visit website{" "}
                      <span aria-hidden className="ml-1">
                        <ArrowRight size={16} />
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-sm opacity-50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold tracking-wider uppercase dark:bg-gray-800">
                    {project.role}
                  </span>
                </div>

                <h3 className="text-xl leading-tight font-bold md:text-2xl">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm font-semibold tracking-wide uppercase opacity-60">
                  {project.tagline}
                </p>

                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold underline decoration-gray-400 underline-offset-4 transition-colors hover:decoration-current"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                <p className="mt-5 leading-relaxed opacity-80">
                  {project.description}
                </p>

                <ul className="mt-5 space-y-2 text-sm opacity-80">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 border-t border-gray-300 pt-5 dark:border-gray-800">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
