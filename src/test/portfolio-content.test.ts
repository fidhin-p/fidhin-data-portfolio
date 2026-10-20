import { describe, expect, it } from "vitest";
import { profile, showcase } from "@/content/site";
import { proposedForecast } from "@/content/case-study";

describe("Portfolio evidence boundaries", () => {
  it("has no resume download URL until the actual PDF is supplied", () => {
    expect(profile.resumeUrl).toBe("");
  });
  it("keeps additional Excel, Power BI, SQL and Tableau projects unlinked until supplied", () => {
    expect(showcase.map(project => project.tag)).toEqual(["Power BI", "Excel", "SQL", "Tableau"]);
    for (const project of showcase) {
      expect(project.url).toBe("");
      expect(project.image).toBe("");
    }
  });
  it("does not fabricate company revenue values for the proposed forecast", () => {
    expect(proposedForecast.status).toBe("proposed");
    expect(proposedForecast.values).toEqual([]);
  });
});