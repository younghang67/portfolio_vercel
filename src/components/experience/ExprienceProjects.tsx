import Image from "next/image";

type ExperienceProps = {
  className?: string;
};

type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  current?: boolean;
  highlights: string[];
  tags: string[];
};

const jobs: Job[] = [
  {
    company: "Bridge Software Solutions",
    role: "Full Stack Developer",
    period: "March 2023 – Present",
    location: "Kathmandu, Nepal",
    logo: "/logo/bridge-logo.png",
    current: true,
    highlights: [
      "Design, build and maintain production web applications and business websites for English- and Japanese-speaking customers.",
      "Own projects from requirements through deployment, delivering both the customer-facing interface and the server logic behind it.",
      "Build reusable, responsive components and consistent layouts that keep multi-page products maintainable as they grow.",
      "Implement multilingual page structures and on-page SEO so sites are discoverable across language markets.",
      "Integrate third-party platforms and data sources into polished user-facing features.",
    ],
    tags: ["Next.js", "React", "Node.js", "i18n", "SEO"],
  },
];

export default function Experience({ className }: ExperienceProps) {
  return (
    <section id="experience" className={`scroll-mt-16 ${className ?? ""}`}>
      <p className="uppercase font-semibold text-sm tracking-widest opacity-60 mb-2">Where I've worked</p>
      <h2 className="text-3xl md:text-4xl font-bold pb-8">Experience</h2>

      {/* Timeline */}
      <ol className="relative space-y-8 border-l-2 border-gray-300 dark:border-gray-800 pl-6 md:pl-8">
        {jobs.map((job) => (
          <li key={job.company} className="relative">
            {/* Timeline dot */}
            <span aria-hidden className="absolute -left-[calc(1.5rem+5px)] md:-left-[calc(2rem+5px)] top-8 flex h-2.5 w-2.5">
              {job.current && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />}
              <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${job.current ? "bg-green-500" : "bg-gray-500"}`} />
            </span>

            <article className="rounded-2xl border border-gray-300 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-500 dark:hover:border-gray-600">
              {/* Header */}
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white p-2 border border-gray-200">
                    <Image src={job.logo} alt={`${job.company} logo`} width={64} height={64} className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight">{job.company}</h3>
                    <p className="font-medium opacity-80">{job.role}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 sm:items-end">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gray-200 dark:bg-gray-800 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    {job.current && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-green-500" />}
                    {job.period}
                  </span>
                  <span className="text-sm opacity-60">{job.location}</span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="mt-6 space-y-3 text-sm md:text-base opacity-80">
                {job.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="mt-6 pt-5 border-t border-gray-300 dark:border-gray-800 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
