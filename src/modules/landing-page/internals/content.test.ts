import { describe, expect, test } from "bun:test";
import { BREAKDOWN_VIDEO } from "./content";

describe("landing page media", () => {
  test("uses the selected YouTube video in privacy-enhanced mode", () => {
    expect(BREAKDOWN_VIDEO.sourceUrl).toContain("DyS79Eb92Ug");
    expect(BREAKDOWN_VIDEO.embedUrl).toBe(
      "https://www.youtube-nocookie.com/embed/DyS79Eb92Ug?rel=0",
    );
  });
});
