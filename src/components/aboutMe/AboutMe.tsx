type AboutMeProps = {
  className?: string;
};

const stats = [
  { value: "3+", label: "Years experience" },
  { value: "5", label: "Products shipped" },
  { value: "EN / JP", label: "Markets served" },
];

const details = [
  { label: "Role", value: "Full Stack Developer" },
  { label: "Location", value: "Kathmandu, Nepal" },
  { label: "Education", value: "BCA, Purbanchal University" },
  { label: "Languages", value: "Nepali, English, Hindi" },
];

const links = [
  { label: "Email", href: "mailto:rusanlimbu123@gmail.com" },
  { label: "GitHub", href: "https://github.com/younghang67" },
  { label: "LinkedIn", href: "https://linkedin.com/in/rusan-limbu" },
];

export default function AboutMe({ className }: AboutMeProps) {
  return (
    <section id="about" className={`scroll-mt-16 px-4 ${className ?? ""}`}>
      {/* Heading */}
      <p className="mb-2 text-sm font-semibold tracking-widest uppercase opacity-60">
        Who I am
      </p>
      <h2 className="text-3xl font-bold md:text-4xl">About Me</h2>

      <div className="mt-10 grid gap-10 lg:grid-cols-5">
        {/* Left: intro + stats */}
        <div className="lg:col-span-3">
          <p className="text-xl leading-snug font-semibold md:text-2xl">
            I'm Rusan, a full stack developer who builds product-focused web
            applications from interface to server.
          </p>
          <p className="mt-5 leading-relaxed opacity-80">
            Over the past 3+ years I've shipped SaaS platforms, a
            document-generation tool, a language-learning platform and complete
            business websites. I like owning a project end to end: planning,
            building, launching and iterating. I write clean, responsive,
            SEO-conscious code, and I care about how a product feels to real
            users, including English and Japanese audiences.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-gray-300 bg-white/60 p-4 text-center backdrop-blur dark:border-gray-800 dark:bg-gray-900/60"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-bold md:text-3xl">{stat.value}</dd>
                <p
                  aria-hidden
                  className="mt-1 text-xs font-semibold tracking-wide uppercase opacity-60"
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: details card */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-gray-300 bg-white/60 p-6 backdrop-blur md:p-8 dark:border-gray-800 dark:bg-gray-900/60">
            <dl className="space-y-5">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-4 border-b border-gray-300/70 pb-5 last:border-0 last:pb-0 dark:border-gray-800"
                >
                  <dt className="text-xs font-semibold tracking-wider uppercase opacity-60">
                    {item.label}
                  </dt>
                  <dd className="text-right font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group inline-flex items-center gap-1 rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
