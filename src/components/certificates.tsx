import { Section, btnGhost } from "@/components/site";
import { certificates } from "@/content/site";

export function viewLabel(title: string) {
  return `View ${title} in a new tab`;
}

// Each certificate is shown as the original scan, at its own aspect ratio,
// with the full image opening in a new browser tab.
export function CertificationsSection() {
  return (
    <Section eyebrow="Credentials" title="Certifications">
      <div className="columns-1 gap-6 md:columns-2">
        {certificates.map((c) => (
          <article key={c.id} className="glow-card mb-6 flex break-inside-avoid flex-col p-5">
            <div className="overflow-hidden rounded-lg border bg-background/60">
              <img
                src={c.image}
                alt={c.alt}
                width={c.width}
                height={c.height}
                loading="lazy"
                className="block h-auto w-full"
              />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
            <p className="mt-1 text-sm text-azure">{c.issuer}</p>
            <p className="mt-2 text-sm text-muted-foreground">{c.detail}</p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">{c.meta}</p>
            <a
              href={c.image}
              target="_blank"
              rel="noreferrer"
              aria-label={viewLabel(c.title)}
              className={`${btnGhost} mt-5 self-start`}
            >
              View Certificate ↗
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
