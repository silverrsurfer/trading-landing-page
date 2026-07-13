import { describe, expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { LandingPage } from "./landing-page";

describe("LandingPage section rhythm", () => {
  test("keeps the hero-to-proof gap aligned with the shared section rhythm", () => {
    const markup = renderToStaticMarkup(<LandingPage />);
    const proofSection = markup.match(/<section class="([^"]+)" aria-labelledby="proof-title">/);

    expect(proofSection?.[1]).toContain("pt-8 sm:pt-12 lg:pt-8");
  });

  test("gives the hero schedule enough internal breathing room", () => {
    const markup = renderToStaticMarkup(<LandingPage />);
    const scheduleCard = markup.match(
      /<div data-slot="card"[^>]+class="([^"]*min-h-32[^"]*)"[^>]*>[\s\S]*?Premarket plan/,
    );

    expect(scheduleCard?.[1]).toContain("justify-center");
    expect(scheduleCard?.[1]).toContain("sm:min-h-36");
  });

  test("uses the shared spacious detail cards for the process", () => {
    const markup = renderToStaticMarkup(<LandingPage />);
    const methodSection = markup.match(/<section id="how-it-works"[\s\S]*?<\/section>/)?.[0];

    expect(methodSection).toContain("min-h-40");
    expect(methodSection).toContain("sm:min-h-44");
    expect(methodSection).toContain("lg:grid-cols-4");
  });

  test("renders FAQ answers inside native disclosure controls", () => {
    const markup = renderToStaticMarkup(<LandingPage />);
    const faqSection = markup.match(/<section id="faq"[\s\S]*?<\/section>/)?.[0];

    expect(faqSection?.match(/<details/g)).toHaveLength(7);
    expect(faqSection).toContain(
      "No. Every discussed setup includes context, confirmation, invalidation, and risk reasoning.",
    );
  });
});
