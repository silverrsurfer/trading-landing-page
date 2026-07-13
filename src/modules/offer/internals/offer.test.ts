import { describe, expect, test } from "bun:test";
import {
  OFFER,
  formatOfferPrice,
  getOfferBillingLabel,
  getOfferCancellationPolicy,
  getOfferGuaranteeLabel,
  getOfferRefundPolicy,
  getOfferTermsSummary,
} from "./offer";

describe("offer source of truth", () => {
  test("derives displayed billing copy from the configured price", () => {
    const expectedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: OFFER.price.currency,
      maximumFractionDigits: 0,
    }).format(OFFER.price.amountCents / 100);

    expect(formatOfferPrice()).toBe(expectedPrice);
    expect(getOfferBillingLabel()).toBe(`${expectedPrice}/${OFFER.price.interval}`);
    expect(getOfferTermsSummary()).toContain(getOfferBillingLabel());
    expect(getOfferTermsSummary()).not.toContain("·");
  });

  test("derives customer-facing policy copy from the configured terms", () => {
    expect(getOfferCancellationPolicy()).toContain(
      OFFER.policies.cancellation.accessContinuesThrough,
    );
    expect(getOfferRefundPolicy()).toContain(`${OFFER.policies.refund.windowDays} calendar days`);
    expect(getOfferTermsSummary()).toContain(getOfferGuaranteeLabel());
  });
});
