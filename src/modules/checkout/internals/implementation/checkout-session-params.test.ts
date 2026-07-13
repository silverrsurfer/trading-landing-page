import { describe, expect, test } from "bun:test";
import { OFFER } from "@/modules/offer";
import { buildCheckoutSessionParams } from "./checkout-session-params";

describe("Stripe Checkout session parameters", () => {
  test("creates a recurring sandbox-ready membership checkout", () => {
    const params = buildCheckoutSessionParams(new URL("http://localhost:3000"));
    const firstLineItem = params.line_items?.[0];

    expect(params.mode).toBe("subscription");
    expect(firstLineItem?.price_data?.unit_amount).toBe(OFFER.price.amountCents);
    expect(firstLineItem?.price_data?.recurring?.interval).toBe(OFFER.price.interval);
    expect(params.success_url).toContain("session_id={CHECKOUT_SESSION_ID}");
    expect(params.cancel_url).toBe("http://localhost:3000/checkout/cancelled");
    expect(params.metadata?.offerId).toBe(OFFER.id);
  });
});
