import { createFileRoute } from "@tanstack/react-router";
import { Section, Placeholder, btnGhost, seo } from "@/components/site";
import { certificates } from "@/content/site";

export const Route = createFileRoute("/certificates")({
  head: () => seo("Certificates — Fidhin", "Internship experience and completion certificates of Fidhin."),
  component: Certificates,
});

function Certificates() {
  return (
    <Section eyebrow="Credentials" title="Certificates">
      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((c) => (
          <article key={c.title} className="glow-card p-6">
            {c.file && !c.file.endsWith(".pdf") ? (
              <img src={c.file} alt={c.title} loading="lazy" className="aspect-video w-full rounded-lg object-cover" />
            ) : (
              <Placeholder label={c.file ? "PDF certificate" : "Certificate upload pending"} />
            )}
            <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.issuer}</p>
            {c.file && <a href={c.file} target="_blank" rel="noreferrer" className={`${btnGhost} mt-4`}>View certificate</a>}
          </article>
        ))}
      </div>
    </Section>
  );
}
