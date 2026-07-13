import { describe, expect, test } from "bun:test";
import { OFFER } from "@/modules/offer";
import { buildCheckoutSessionParams } from "./checkout-session-params";

describe("Stripe Checkout session parameters", () => {
  test("creates a recurring sandbox-ready membership checkout", () => {
    const params = buildCheckoutSessionParams(new URL("http://localhost:3000"));
    const firstLineItem = params.line_items?.[0];

    expect(params.mode).toBe("subscription");
    expect(params.locale).toBe("en");
    expect(params.submit_type).toBe("subscribe");
    expect(params.branding_settings).toMatchObject({
      display_name: OFFER.membershipName,
      font_family: "inter",
      border_style: "rounded",
    });
    expect(params.branding_settings?.background_color).toMatch(/^#[0-9A-F]{6}$/);
    expect(params.branding_settings?.button_color).toMatch(/^#[0-9A-F]{6}$/);
    expect(params.custom_text?.submit).toMatchObject({
      message: expect.stringContaining("private Discord invite"),
    });
    expect(params.custom_text?.after_submit).toMatchObject({
      message: expect.stringContaining(OFFER.membershipName),
    });
    expect(firstLineItem?.price_data?.unit_amount).toBe(OFFER.price.amountCents);
    expect(firstLineItem?.price_data?.recurring?.interval).toBe(OFFER.price.interval);
    expect(params.success_url).toContain("session_id={CHECKOUT_SESSION_ID}");
    expect(params.cancel_url).toBe("http://localhost:3000/checkout/cancelled");
    expect(params.metadata?.offerId).toBe(OFFER.id);
    expect(firstLineItem?.price_data?.product_data?.description).toContain("live reasoning");
  });
});
