import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, seo } from "@/components/site";
import { CertificationsSection } from "@/components/certificates";
import { internship, skills } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => seo("About Fidhin — Aspiring Data Analyst", "Background, skills and internship experience of Fidhin, an aspiring Data Analyst in India."),
  component: About,
});

function About() {
  return (
    <>
      <Section eyebrow="About me" title="Turning data into decisions">
        <div className="max-w-3xl space-y-4 text-lg text-muted-foreground">
          <p>I'm Fidhin, an aspiring Data Analyst pursuing entry-level analytics opportunities in India and internationally.</p>
          <p>My interest lies where data analytics meets business research — cleaning and analysing data, building clear visualisations, and researching markets to help teams make better-informed decisions.</p>
        </div>
      </Section>

      <Section eyebrow="Toolkit" title="Skills">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <div key={s.name} className="glow-card p-6">
              <h3 className="text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Experience" title="Internship">
        <article className="glow-card p-8">
          <div className="flex flex-col justify-between gap-2 sm:flex-row">
            <div>
              <h3 className="text-xl font-semibold">{internship.role}</h3>
              <p className="text-azure">{internship.company}</p>
              <p className="text-sm text-muted-foreground">{internship.location}</p>
            </div>
            <div className="font-mono text-sm text-muted-foreground sm:text-right">
              <p>Internship</p>
              <p>{internship.dates || "Dates to be added"}</p>
              <p className="mt-1 text-xs">{internship.certificateRef}</p>
            </div>
          </div>

          <div className="mt-6 border-t pt-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Project</h4>
            <Link to={internship.project.to} className="mt-2 inline-block text-lg font-medium hover:text-azure">
              {internship.project.title} →
            </Link>
          </div>

          <div className="mt-6 border-t pt-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Research & analysis activities</h4>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
              {internship.responsibilities.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </div>

          <div className="mt-6 border-t pt-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Scope</h4>
            <p className="mt-3 text-sm italic text-muted-foreground">{internship.scopeNote}</p>
          </div>
        </article>
      </Section>

      <CertificationsSection />
    </>
  );
}
