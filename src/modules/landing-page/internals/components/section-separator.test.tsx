import { describe, expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { SectionSeparator } from "./section-separator";

describe("SectionSeparator", () => {
  test("creates equal vertical rhythm around one subtle hairline", () => {
    const markup = renderToStaticMarkup(<SectionSeparator />);

    expect(markup).toContain('aria-hidden="true"');
    expect(markup).toContain("py-10 sm:py-14");
    expect(markup).toContain("h-px");
    expect(markup).toContain("max-w-5xl");
    expect(markup).toContain("bg-border/70");
  });
});
