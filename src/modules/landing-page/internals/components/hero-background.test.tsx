import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { HeroBackground } from "./hero-background";

test("fades the hero media into the page background", () => {
  const markup = renderToStaticMarkup(<HeroBackground />);

  expect(markup).toContain(
    "mask-image:linear-gradient(to_bottom,black_0%,black_66%,transparent_100%)",
  );
  expect(markup).toContain('aria-hidden="true"');
  expect(markup).toContain("to-background");
});
