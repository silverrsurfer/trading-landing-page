import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { WorkflowStepCard } from "./workflow-step-card";

test("gives each workflow step enough vertical space", () => {
  const markup = renderToStaticMarkup(
    <WorkflowStepCard title="Before the market: prepare" description="Open the daily plan." />,
  );

  expect(markup).toContain("min-h-40");
  expect(markup).toContain("sm:min-h-44");
  expect(markup).toContain("gap-3");
  expect(markup).toContain("sm:px-8");
});
