const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rusan Limbu",
  url: "https://rusan-limbu.vercel.app/",
  jobTitle: "Full Stack Developer",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NP",
  },
  knowsAbout: ["Web Development", "React", "Next.js", "TypeScript", "Laravel", "Node.js", "python"],
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
