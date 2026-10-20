import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, seo } from "@/components/site";

export const Route = createFileRoute("/projects/iqraa-mark-membership")({
  head: () => seo("Premium Membership Strategy for Iqraa Mark — Fidhin", "Case study: competitor research, segmentation, membership tiers, pricing research and revenue forecasting."),
  component: CaseStudy,
});

type Kind = "research" | "proposal" | "implemented";
const kinds: Record<Kind, { label: string; cls: string }> = {
  research: { label: "Research finding", cls: "text-research border-research/40 bg-research/10" },
  proposal: { label: "Proposed recommendation", cls: "text-proposal border-proposal/40 bg-proposal/10" },
  implemented: { label: "Implemented work", cls: "text-implemented border-implemented/40 bg-implemented/10" },
};

// Replace each `body` with your verified content. Keep the `kind` accurate.
const sections: { id: string; title: string; kind: Kind; body: string }[] = [
  { id: "overview", title: "Project overview & business objectives", kind: "research", body: "Describe the business context and the objectives of the membership project." },
  { id: "competitors", title: "Competitor research", kind: "research", body: "Summarise the competitors studied and what their membership offerings revealed." },
  { id: "segments", title: "Customer segmentation", kind: "research", body: "Outline the customer segments identified and how they were defined." },
  { id: "tiers", title: "Membership tier recommendations", kind: "proposal", body: "Detail the proposed tiers and the benefits included in each." },
  { id: "pricing", title: "Subscription pricing research", kind: "research", body: "Explain the pricing research approach and findings." },
  { id: "forecast", title: "Revenue forecasting", kind: "proposal", body: "Describe the forecasting method and assumptions. Label projections clearly as estimates." },
  { id: "workflows", title: "Subscription management workflows", kind: "proposal", body: "Document the proposed workflows for sign-up, renewal and cancellation." },
  { id: "recommendations", title: "Business recommendations", kind: "proposal", body: "List the final recommendations made to the business." },
  { id: "learnings", title: "Key learnings", kind: "implemented", body: "Reflect on what you learned through this project." },
];

function Badge({ kind }: { kind: Kind }) {
  return <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${kinds[kind].cls}`}>{kinds[kind].label}</span>;
}

function CaseStudy() {
  return (
    <>
      <Section>
        <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground">← All projects</Link>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-azure">Featured case study · Iqraa Mark</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold sm:text-5xl">
          Premium Membership and Subscription Strategy for <span className="text-gradient">Iqraa Mark</span>
        </h1>
        <div className="glow-card mt-10 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">How to read this case study</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {(Object.keys(kinds) as Kind[]).map((k) => <Badge key={k} kind={k} />)}
          </div>
        </div>
      </Section>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[220px_1fr]">
        <nav aria-label="Case study sections" className="hidden lg:block">
          <ul className="sticky top-24 space-y-2 text-sm">
            {sections.map((s) => (
              <li key={s.id}><a href={`#${s.id}`} className="text-muted-foreground hover:text-foreground">{s.title}</a></li>
            ))}
          </ul>
        </nav>
        <div className="space-y-6">
          {sections.map((s, i) => (
            <article key={s.id} id={s.id} className="glow-card scroll-mt-24 p-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <Badge kind={s.kind} />
              </div>
              <h2 className="mt-3 text-2xl font-semibold">{s.title}</h2>
              <p className="mt-3 italic text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
