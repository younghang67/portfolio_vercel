import Image from "next/image";

type SocialsProps = {
  className?: string;
};

type Social = {
  name: string;
  handle: string;
  href: string;
  iconLight: string; // shown in light mode (dark icon)
  iconDark: string; // shown in dark mode (white icon)
};

const socials: Social[] = [
  {
    name: "GitHub",
    handle: "younghang67",
    href: "https://github.com/younghang67",
    iconLight: "/logo/github-black.png",
    iconDark: "/logo/github-white.png",
  },
  {
    name: "LinkedIn",
    handle: "Rusan Limbu",
    href: "https://www.linkedin.com/in/rusan-limbu/",
    iconLight: "/logo/linkend-Black.png",
    iconDark: "/logo/linkend-White.png",
  },
  {
    name: "Instagram",
    handle: "@rusanhang",
    href: "https://www.instagram.com/rusanhang/",
    iconLight: "/logo/Instagram-Black.png",
    iconDark: "/logo/instagram-white.png",
  },
  {
    name: "Facebook",
    handle: "Rusan Limbu",
    href: "https://www.facebook.com/rusan.limbu.2025/",
    iconLight: "/logo/facebook-black.png",
    iconDark: "/logo/facebook-white.png",
  },
];

export default function SocialLinks({ className }: SocialsProps) {
  return (
    <section id="socials" className={`scroll-mt-16 ${className ?? ""}`}>
      <p className="uppercase font-semibold text-sm tracking-widest opacity-60 mb-2">Find me online</p>
      <h2 className="text-3xl md:text-4xl font-bold pb-6">Social Links</h2>

      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {socials.map((social) => (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.name}: ${social.handle} (opens in a new tab)`}
              className="group flex items-center gap-4 rounded-2xl border border-gray-300 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-500 dark:hover:border-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">
              {/* Icon tile */}
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-200 dark:bg-gray-800 transition-transform duration-300 group-hover:scale-105">
                {/* dark mode icon */}
                <Image src={social.iconDark} alt="" aria-hidden width={28} height={28} className="hidden dark:block" />
                {/* light mode icon */}
                <Image src={social.iconLight} alt="" aria-hidden width={28} height={28} className="block dark:hidden" />
              </span>

              {/* Text */}
              <span className="min-w-0 flex-1">
                <span className="block font-semibold leading-tight">{social.name}</span>
                <span className="block truncate text-sm opacity-60">{social.handle}</span>
              </span>

              {/* Arrow */}
              <span
                aria-hidden
                className="opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
