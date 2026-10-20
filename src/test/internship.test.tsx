import { describe, expect, it } from "vitest";

import { internship } from "@/content/site";

// The dates and certificate reference are transcribed from the Iqraamark
// Certificate of Live Project Experience, so they must stay exactly as issued.
describe("Internship details", () => {
  it("shows the duration printed on the live project certificate", () => {
    expect(internship.dates).toBe("06-07-2026 – 06-10-2026");
    expect(internship.certificateRef).toContain("IQM-DAT-2026-34");
    expect(internship.certificateRef).toContain("19-10-2026");
  });

  it("no longer falls back to the empty-dates placeholder", () => {
    expect(internship.dates.trim()).not.toBe("");
  });
});
