import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { SectionDetailCard } from "./section-detail-card";

test("gives section details one shared card size", () => {
  const markup = renderToStaticMarkup(
    <SectionDetailCard title="Before the market: prepare" description="Open the daily plan." />,
  );

  expect(markup).toContain("min-h-40");
  expect(markup).toContain("sm:min-h-44");
  expect(markup).toContain("gap-3");
  expect(markup).toContain("sm:px-8");
});
