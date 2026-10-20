import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, btnPrimary, ResumeButton, seo } from "@/components/site";
import { profile, skills } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => seo("Fidhin — Aspiring Data Analyst", "Data analytics, visualisation and business research portfolio of Fidhin."),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0 -z-10" aria-hidden />
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-24 sm:pt-32">
          <p className="animate-rise inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-implemented" /> {profile.availability}
          </p>
          <h1 className="animate-rise mt-6 text-5xl font-semibold sm:text-7xl" style={{ animationDelay: ".08s" }}>
            Hi, I'm <span className="text-gradient">Fidhin.</span>
          </h1>
          <p className="animate-rise mt-5 font-mono text-sm text-azure sm:text-base" style={{ animationDelay: ".16s" }}>
            Aspiring Data Analyst | Business Intelligence | Business Research
          </p>
          <p className="animate-rise mt-6 max-w-2xl text-lg text-muted-foreground" style={{ animationDelay: ".24s" }}>
            I combine data analytics, visualisation, and business research to turn information into meaningful insights that support better decisions.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: ".32s" }}>
            <Link to="/projects" className={btnPrimary}>Explore My Work →</Link>
            <ResumeButton />
          </div>
        </div>
      </section>

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

      <Section eyebrow="Featured project">
        <Link to="/projects/iqraa-mark-membership" className="glow-card block p-8 sm:p-10">
          <p className="font-mono text-xs text-azure">Business Research · Strategy</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Premium Membership and Subscription Strategy for Iqraa Mark</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Competitor research, customer segmentation, tier and pricing recommendations, and revenue forecasting.</p>
          <span className="mt-6 inline-block text-sm font-semibold text-gradient">Read case study →</span>
        </Link>
      </Section>
    </>
  );
}
