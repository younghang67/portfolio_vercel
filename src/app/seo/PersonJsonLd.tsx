import { SITE_URL } from "@/lib/site";

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rusan Limbu",
  url: SITE_URL,
  worksFor: { "@type": "Organization", name: "Bridge Software Solutions" },
  jobTitle: "Full Stack Developer",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NP",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Purbanchal University" },

  knowsAbout: ["Web Development", "React", "Next.js", "TypeScript", "Laravel", "Node.js", "python", "SEO"],
  sameAs: ["https://github.com/younghang67", "https://www.linkedin.com/in/rusan-limbu/"],
};

export default function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(person).replace(/</g, "\\u003c"),
      }}
    />
  );
}
