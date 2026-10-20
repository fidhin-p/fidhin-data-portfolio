import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { CertificationsSection, viewLabel } from "@/components/certificates";
import { certificates, profile } from "@/content/site";

describe("Certifications section", () => {
  it("shows every certificate scan with a View Certificate link that opens in a new tab", () => {
    render(<CertificationsSection />);

    expect(screen.getByRole("heading", { name: "Certifications" })).toBeInTheDocument();
    expect(certificates).toHaveLength(4);

    for (const c of certificates) {
      const img = screen.getByRole("img", { name: c.alt });
      expect(img).toHaveAttribute("src", c.image);
      // Original scan, never cropped: natural width/height drive the rendered ratio.
      expect(img).toHaveAttribute("width", String(c.width));
      expect(img).toHaveAttribute("height", String(c.height));

      const link = screen.getByRole("link", { name: viewLabel(c.title) });
      expect(link).toHaveAttribute("href", c.image);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link.getAttribute("rel")).toContain("noreferrer");
    }
  });

  it("shows the worldwide availability line, never an India-only one", () => {
    expect(profile.availability).toBe("Open to Entry-Level Data Analyst Opportunities Worldwide");
    expect(profile.availability).toMatch(/worldwide/i);
    expect(profile.availability).not.toMatch(/india-only|only in india/i);
  });
});
