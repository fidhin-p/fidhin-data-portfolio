import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Placeholder, seo } from "@/components/site";
import { showcase } from "@/content/site";

export const Route = createFileRoute("/projects/")({
  head: () => seo("Projects — Fidhin", "Power BI, Excel, SQL and business research projects by Fidhin."),
  component: Projects,
});

function Projects() {
  return (
    <>
      <Section eyebrow="Featured" title="Case study">
        <Link to="/projects/iqraa-mark-membership" className="glow-card block p-8 sm:p-10">
          <p className="font-mono text-xs text-azure">Iqraa Mark · Business Research</p>
          <h3 className="mt-3 text-2xl font-semibold">Premium Membership and Subscription Strategy for Iqraa Mark</h3>
          <p className="mt-3 max-w-2xl text-muted-foreground">Research, segmentation, pricing and forecasting for a proposed membership model.</p>
          <span className="mt-6 inline-block text-sm font-semibold text-gradient">Read case study →</span>
        </Link>
      </Section>
      <Section eyebrow="Showcase" title="Project showcase">
        <div className="grid gap-6 sm:grid-cols-2">
          {showcase.map((p) => (
            <article key={p.title} className="glow-card p-5">
              {p.image ? <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="aspect-video w-full rounded-lg object-cover" /> : <Placeholder label="Screenshot coming soon" />}
              <p className="mt-4 font-mono text-xs text-azure">{p.tag}</p>
              <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
