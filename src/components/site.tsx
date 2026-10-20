import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowUpRight, Download, FileText, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/site";

const nav = [
  { to: "/", label: "Home" }, { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" }, { to: "/certificates", label: "Certifications" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="glass sticky top-0 z-50 border-b">
    <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
      <Link to="/" aria-label="Fidhin home" className="flex items-center gap-3 font-display text-xl font-semibold"><span className="flex size-9 items-center justify-center rounded-md border border-primary/30 text-primary">f.</span>Fidhin<span className="text-primary">.</span></Link>
      <nav aria-label="Main" className="hidden items-center gap-6 md:flex">{nav.map(n => <Button key={n.to} variant="link" asChild className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground data-[status=active]:text-primary"><Link to={n.to} activeOptions={{ exact: n.to === "/" }}>{n.label}</Link></Button>)}</nav>
      <Button asChild variant="outline" className="hidden border-border text-xs lg:inline-flex"><Link to="/contact">Let's connect <ArrowUpRight /></Link></Button>
      <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav id="mobile-nav" aria-label="Mobile" className="flex flex-col border-t px-5 py-3 md:hidden">{nav.map(n => <Button key={n.to} variant="ghost" asChild className="justify-start text-muted-foreground data-[status=active]:text-primary"><Link to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: n.to === "/" }}>{n.label}</Link></Button>)}</nav>}
  </header>;
}

export function Footer() {
  return <footer className="mt-16 border-t"><div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8"><p>© {new Date().getFullYear()} Fidhin. <span className="ml-2">Data. Research. Decisions.</span></p><a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-primary">{profile.email}<ArrowUpRight className="size-3" /></a></div></footer>;
}

export function Section({ eyebrow, title, children, className = "" }: { eyebrow?: string; title?: string; children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 ${className}`}>
    {eyebrow && <p className="flex items-center gap-3 font-mono text-xs text-primary"><span className="h-px w-6 bg-primary" />{eyebrow}</p>}
    {title && <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>}
    <div className={title ? "mt-9" : ""}>{children}</div>
  </section>;
}

export const btnPrimary = "h-12 rounded-md px-6 text-sm font-semibold";
export const btnGhost = "h-12 rounded-md border-border bg-transparent px-6 text-sm font-semibold";

export function ResumeButton({ label = "Download Resume", view = false }: { label?: string; view?: boolean }) {
  if (!profile.resumeUrl) return <Button variant="outline" disabled className={btnGhost} title="Resume PDF to be added"><FileText />{label}</Button>;
  return <Button variant="outline" asChild className={btnGhost}><a href={profile.resumeUrl} download={view ? undefined : true} target={view ? "_blank" : undefined} rel={view ? "noreferrer" : undefined}>{view ? <FileText /> : <Download />}{label}</a></Button>;
}

export function Placeholder({ label }: { label: string }) {
  return <div className="flex aspect-video flex-col items-center justify-center gap-4 rounded-md border border-dashed bg-background/50"><FileText className="size-7 text-muted-foreground/50" /><span className="font-mono text-xs text-muted-foreground">{label}</span></div>;
}

export function seo(title: string, description: string) {
  return { meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] };
}
