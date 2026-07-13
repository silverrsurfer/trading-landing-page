import type Stripe from "stripe";
import { OFFER, getOfferDeliveryLabel } from "@/modules/offer";

export function buildCheckoutSessionParams(siteUrl: URL): Stripe.Checkout.SessionCreateParams {
  return {
    mode: "subscription",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: OFFER.price.currency,
          unit_amount: OFFER.price.amountCents,
          recurring: { interval: OFFER.price.interval },
          product_data: {
            name: OFFER.membershipName,
            description: `${getOfferDeliveryLabel()} for developing traders focused on ${OFFER.marketFocus}.`,
          },
        },
      },
    ],
    success_url: new URL("/checkout/success?session_id={CHECKOUT_SESSION_ID}", siteUrl).toString(),
    cancel_url: new URL("/checkout/cancelled", siteUrl).toString(),
    metadata: { offerId: OFFER.id },
    subscription_data: { metadata: { offerId: OFFER.id } },
  };
}

export function resolveSiteUrl(requestUrl: string) {
  const configuredUrl = process.env.APP_URL;

  if (configuredUrl) {
    return new URL(configuredUrl);
  }

  if (process.env.NODE_ENV === "production") {
    throw new Error("APP_URL is required in production");
  }

  return new URL(new URL(requestUrl).origin);
}
