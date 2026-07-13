import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { PriceLockup } from "./price-lockup";

test("announces the grouped price without repeating the visible lockup", () => {
  const markup = renderToStaticMarkup(<PriceLockup period="month" price="$79" />);

  expect(markup).toContain("$79 per month");
  expect(markup).toContain("/ month");
  expect(markup).toContain("No long-term contract");
  expect(markup).toContain('aria-hidden="true"');
});
