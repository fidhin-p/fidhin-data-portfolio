import { createFileRoute } from "@tanstack/react-router";
import { Section, btnPrimary, ResumeButton, seo } from "@/components/site";
import { profile } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact Fidhin — Aspiring Data Analyst", "Get in touch with Fidhin for entry-level data analyst opportunities."),
  component: Contact,
});

function Contact() {
  const links = [
    { label: "LinkedIn", href: profile.linkedin },
    { label: "GitHub", href: profile.github },
  ];
  return (
    <Section eyebrow="Contact" title="Let's work together">
      <div className="glow-card p-8 sm:p-12">
        <p className="max-w-xl text-lg text-muted-foreground">Open to entry-level data analyst opportunities in India. The best way to reach me is by email.</p>
        <a href={`mailto:${profile.email}`} className="mt-6 block break-all font-display text-2xl font-semibold text-gradient sm:text-4xl">{profile.email}</a>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className={btnPrimary}>Send an email</a>
          <ResumeButton />
        </div>
        <ul className="mt-10 grid gap-3 border-t pt-8 sm:grid-cols-2">
          {links.map((l) => (
            <li key={l.label} className="flex items-center justify-between rounded-xl border px-4 py-3">
              <span className="font-semibold">{l.label}</span>
              {l.href ? <a href={l.href} target="_blank" rel="noreferrer" className="text-sm text-azure hover:underline">Visit →</a>
                : <span className="font-mono text-xs text-muted-foreground">Link coming soon</span>}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
