import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, seo } from "@/components/site";
import { StrategyFlow } from "@/components/analytics-visual";
import { caseStudySections, proposedForecast } from "@/content/case-study";
import { internship } from "@/content/site";

export const Route = createFileRoute("/projects/iqraa-mark-membership")({
  head: () => seo("Premium Membership Strategy for Iqraa Mark — Fidhin", "Case study: competitor research, segmentation, membership tiers, pricing research and revenue forecasting."),
  component: CaseStudy,
});

type Kind = "research" | "proposal" | "scope";
const kinds: Record<Kind, { label: string; cls: string }> = {
  research: { label: "Research activity", cls: "text-research border-research/30" },
  proposal: { label: "Proposed framework", cls: "text-proposal border-proposal/30" },
  scope: { label: "Verified project scope", cls: "text-primary border-primary/30" },
};

function Badge({ kind }: { kind: Kind }) {
  return <span className={`rounded border px-2.5 py-1 font-mono text-[10px] ${kinds[kind].cls}`}>{kinds[kind].label}</span>;
}

function CaseStudy() {
  return (
    <>
      <Section>
        <Button variant="link" asChild className="p-0 text-muted-foreground"><Link to="/projects"><ArrowLeft />All projects</Link></Button>
        <p className="mt-10 font-mono text-xs text-primary">IQRAA MARK / FEATURED CASE STUDY</p>
        <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">
          Premium Membership and Subscription Strategy for <span className="text-primary">Iqraa Mark</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">Business research and analytical planning for a proposed membership offering, completed during my Data Analytics internship.</p>
        <div className="mt-8 grid gap-6 border-y py-6 text-sm sm:grid-cols-3"><div><p className="text-xs text-muted-foreground">Role</p><p className="mt-2">{internship.role}</p></div><div><p className="text-xs text-muted-foreground">Period · certificate dates</p><p className="mt-2">{internship.dates}</p></div><div><p className="text-xs text-muted-foreground">Deliverable</p><p className="mt-2">Research & recommendations</p></div></div>
        <div className="mt-7">
          <div className="flex flex-wrap gap-2">
            {(Object.keys(kinds) as Kind[]).map((k) => <Badge key={k} kind={k} />)}
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground">{internship.scopeNote}</p>
        </div>
        <div className="mt-10"><StrategyFlow /></div>
      </Section>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[220px_1fr]">
        <nav aria-label="Case study sections" className="lg:self-start lg:sticky lg:top-28">
          <p className="mb-5 font-mono text-xs text-primary">IN THIS CASE STUDY</p>
          <ul className="grid grid-cols-2 gap-3 text-xs lg:grid-cols-1">
            {caseStudySections.map((s) => (
              <li key={s.id}><a href={`#${s.id}`} className="text-muted-foreground hover:text-foreground">{s.title}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          {caseStudySections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-28 border-t py-9 first:border-t-0 first:pt-0">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <Badge kind={s.kind} />
              </div>
              <h2 className="mt-4 text-2xl font-semibold">{s.title}</h2>
              <p className="mt-4 text-sm leading-8 text-muted-foreground">{s.body}</p>
              {s.id === "tiers" && <div className="mt-6 grid gap-3 sm:grid-cols-3">{["Customer need", "Benefit fit", "Pricing rationale"].map(t => <div key={t} className="rounded-md border p-4"><p className="text-sm text-proposal">{t}</p><p className="mt-2 text-xs leading-6 text-muted-foreground">Evidence and proposed recommendation to be added.</p></div>)}</div>}
              {s.id === "forecast" && <div className="mt-6 border-l-2 border-proposal bg-card p-5"><p className="font-mono text-[10px] text-proposal">PROPOSED MODEL / NO ACTUAL REVENUE</p><p className="mt-3 text-sm leading-7">{proposedForecast.formula}</p><p className="mt-3 text-xs leading-6 text-muted-foreground">Assumptions to document: conversion, tier mix, billing period, churn and discounts. No numeric projections supplied.</p></div>}
              {s.id === "kpis" && <div className="mt-6 grid gap-3 sm:grid-cols-2">{[["Acquisition", "Membership conversion"], ["Revenue", "Recurring subscription revenue"], ["Retention", "Renewal & cancellation"], ["Engagement", "Benefit usage"]].map(([a,b]) => <div key={a} className="rounded-md border p-4"><p className="text-xs text-proposal">Proposed · {a}</p><p className="mt-2 text-sm">{b}</p></div>)}</div>}
              {s.id === "workflows" && <div className="mt-6 flex flex-wrap gap-2 text-xs text-proposal">{["Enrolment", "Benefit access", "Renewal", "Cancellation"].map(t => <span key={t} className="flex items-center gap-3 rounded border px-3 py-2">{t}<ArrowUpRight className="size-3" /></span>)}</div>}
              {s.id === "recommendations" && <ol className="mt-6 space-y-3">{["Review the research and assumptions", "Validate customer needs and pricing", "Consider a controlled pilot after approval", "Review KPIs before any broader rollout"].map((t,j) => <li key={t} className="flex gap-4 border-b pb-3 text-sm text-muted-foreground"><span className="font-mono text-xs text-proposal">0{j+1}</span>{t}</li>)}</ol>}
              <p className="mt-5 border-l pl-4 text-xs leading-6 text-muted-foreground">{s.pending}</p>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
