import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { FreeBreakdownLink } from "./free-breakdown-link";

test("renders the shared free breakdown action as an outlined button", () => {
  const markup = renderToStaticMarkup(<FreeBreakdownLink />);

  expect(markup).toContain('href="#free-breakdown"');
  expect(markup).toContain('data-icon="inline-start"');
  expect(markup).toContain("Watch a free breakdown");
  expect(markup).toContain("border");
});
