import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { profile } from "@/content/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/certificates", label: "Certifications" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="glass sticky top-0 z-50 border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="font-display text-lg font-semibold">
          Fidhin<span className="text-gradient">.</span>
        </Link>
        <nav aria-label="Main" className="hidden gap-1 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground data-[status=active]:bg-secondary">
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="rounded-lg border px-3 py-2 text-sm md:hidden" aria-expanded={open}
          aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="flex flex-col border-t px-5 py-3 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: n.to === "/" }}
              className="py-2 text-muted-foreground data-[status=active]:text-foreground">{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Fidhin. Aspiring Data Analyst.</p>
        <a href={`mailto:${profile.email}`} className="hover:text-foreground">{profile.email}</a>
      </div>
    </footer>
  );
}

export function Section({ eyebrow, title, children, className = "" }: { eyebrow?: string; title?: string; children: ReactNode; className?: string }) {
  return (
    <section className={`mx-auto max-w-6xl px-5 py-16 ${className}`}>
      {eyebrow && <p className="font-mono text-xs uppercase tracking-[0.2em] text-azure">{eyebrow}</p>}
      {title && <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">{title}</h2>}
      <div className={title ? "mt-8" : ""}>{children}</div>
    </section>
  );
}

const btn = "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
export const btnPrimary = `${btn} bg-gradient-brand text-primary-foreground hover:shadow-[var(--shadow-glow)]`;
export const btnGhost = `${btn} border bg-secondary/40 text-foreground hover:border-primary/50`;

export function ResumeButton() {
  return (
    <a href={profile.resumeUrl} download className={btnGhost}>Download My Resume</a>
  );
}

export function Placeholder({ label }: { label: string }) {
  return (
    <div className="grid-bg flex aspect-video items-center justify-center rounded-lg border border-dashed bg-background/50">
      <span className="font-mono text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

export function seo(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
