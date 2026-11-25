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
    <section id="experience" className={`scroll-mt-16 px-4 ${className ?? ""}`}>
      <p className="mb-2 text-sm font-semibold tracking-widest uppercase opacity-60">
        Where I've worked
      </p>
      <h2 className="pb-8 text-3xl font-bold md:text-4xl">Experience</h2>

      {/* Timeline */}
      <ol className="relative space-y-8 border-gray-300 sm:border-l-2 sm:pl-6 md:pl-8 dark:border-gray-800">
        {jobs.map((job) => (
          <li key={job.company} className="relative">
            {/* Timeline dot */}
            <span
              aria-hidden
              className="absolute top-8 -left-[calc(1.5rem+5px)] hidden h-2.5 w-2.5 sm:flex md:-left-[calc(2rem+5px)]"
            >
              {job.current && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              )}
              <span
                className={`relative inline-flex h-2.5 w-2.5 rounded-full ${job.current ? "bg-green-500" : "bg-gray-500"}`}
              />
            </span>

            <article className="rounded-2xl border border-gray-300 bg-white/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:shadow-xl md:p-8 dark:border-gray-800 dark:bg-gray-900/60 dark:hover:border-gray-600">
              {/* Header */}
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white p-2">
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl leading-tight font-bold md:text-2xl">
                      {job.company}
                    </h3>
                    <p className="font-medium opacity-80">{job.role}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 sm:items-end">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold tracking-wider uppercase dark:bg-gray-800">
                    {job.current && (
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-green-500"
                      />
                    )}
                    {job.period}
                  </span>
                  <span className="text-sm opacity-60">{job.location}</span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="mt-6 space-y-3 text-sm opacity-80 md:text-base">
                {job.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2 border-t border-gray-300 pt-5 dark:border-gray-800">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold dark:border-gray-700"
                  >
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
