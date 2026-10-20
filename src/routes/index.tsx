import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResumeButton, seo } from "@/components/site";
import { AnalyticsVisual } from "@/components/analytics-visual";
import { AboutSection, SkillsSection, ExperienceSection, FeaturedProject, ResumeSection, ContactSection } from "@/components/portfolio-sections";
import { CertificationsSection } from "@/components/certificates";
import { profile } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => seo("Fidhin — Aspiring Data Analyst | Research & Insights", "Fidhin’s portfolio of data analytics, business research and subscription strategy. Based in Kerala and open to entry-level opportunities worldwide."), component: Index,
});
function Index() {
  return <>
    <section className="relative overflow-hidden border-b">
      <div className="hero-surface absolute inset-0 opacity-20" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-16 sm:px-8 sm:pb-10 sm:pt-24">
        <div className="hero-art"><AnalyticsVisual decorative /></div>
        <div className="relative z-10 max-w-3xl">
          <p className="animate-rise inline-flex max-w-full items-center gap-2 rounded-full border border-primary/20 bg-background/90 px-3 py-2 text-[11px] leading-5 text-primary"><span className="size-1.5 shrink-0 rounded-full bg-primary" />{profile.availability}</p>
          <p className="mt-10 font-mono text-sm text-muted-foreground">Hello, I’m</p>
          <h1 className="hero-name animate-rise mt-3 font-semibold">Fidhin<span className="text-primary">.</span></h1>
          <h2 className="mt-5 text-2xl font-medium sm:text-3xl">Aspiring Data Analyst</h2>
          <p className="mt-3 text-xs text-muted-foreground sm:text-sm">Data Analytics <span className="mx-2 text-primary">/</span> Business Intelligence <span className="mx-2 text-primary">/</span> Business Research</p>
          <p className="mt-7 max-w-lg text-base leading-8 text-muted-foreground">I turn data into meaningful insights — combining analytics, visualization and business research to support better decisions.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3"><Button asChild size="lg" className="h-12 px-5"><Link to="/projects">Explore My Work<ArrowUpRight /></Link></Button><ResumeButton label="View Resume" view /><Button variant="link" asChild className="px-2 text-foreground"><Link to="/contact">Contact Me<ArrowUpRight /></Link></Button></div>
          {!profile.resumeUrl && <p className="mt-3 text-xs text-muted-foreground">Resume PDF to be added</p>}
          <p className="mt-9 flex items-center gap-2 text-xs text-muted-foreground"><MapPin className="size-3.5" />Kerala, India<span className="mx-2 text-border">|</span>Open to worldwide opportunities</p>
        </div>
        <div className="relative mt-14 flex items-center justify-between border-t pt-5"><p className="font-mono text-[10px] text-muted-foreground">A PORTFOLIO OF RESEARCH, ANALYSIS & POSSIBILITY</p><a href="#about" aria-label="Scroll to about" className="ml-3 shrink-0 text-primary"><ArrowDown className="size-4" /></a></div>
      </div>
    </section>
    <div id="about" className="scroll-mt-20"><AboutSection /></div>
    <div className="border-y bg-card/30"><SkillsSection /></div>
    <FeaturedProject />
    <ExperienceSection />
    <CertificationsSection />
    <ResumeSection />
    <ContactSection />
  </>;
}
