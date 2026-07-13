import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { SectionCtaCard } from "./section-cta-card";

test("renders the shared horizontal section call to action", () => {
  const markup = renderToStaticMarkup(
    <SectionCtaCard title="Start with today’s plan." description="Get immediate access." />,
  );

  expect(markup).toContain("lg:flex-row");
  expect(markup).toContain("bg-primary/6");
  expect(markup).toContain("Join the Discord");
});
