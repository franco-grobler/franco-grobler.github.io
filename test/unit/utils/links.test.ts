import { describe, expect, it } from "vitest";
import { navLinks } from "../../../app/utils/links";

describe("Links utility", () => {
  it("has the correct number of links", () => {
    expect(navLinks).toHaveLength(6);
  });

  it("contains required links", () => {
    const labels = navLinks.map((link) => link.label);
    expect(labels).toContain("Home");
    expect(labels).toContain("Projects");
    expect(labels).toContain("Blog");
    expect(labels).toContain("Research");
    expect(labels).toContain("About");
    expect(labels).toContain("Contact");
  });
});
