import type Stripe from "stripe";
import { OFFER, getOfferRenewalTerms } from "@/modules/offer";
import { CHECKOUT_BRAND } from "../constants";

export function buildCheckoutSessionParams(siteUrl: URL): Stripe.Checkout.SessionCreateParams {
  return {
    mode: "subscription",
    locale: "en",
    submit_type: "subscribe",
    branding_settings: {
      background_color: CHECKOUT_BRAND.backgroundColor,
      button_color: CHECKOUT_BRAND.buttonColor,
      display_name: OFFER.membershipName,
      font_family: CHECKOUT_BRAND.fontFamily,
      border_style: CHECKOUT_BRAND.borderStyle,
    },
    custom_text: {
      submit: {
        message: `${getOfferRenewalTerms()} Your private ${OFFER.delivery.platform} invite appears after Stripe confirms payment.`,
      },
      after_submit: {
        message: `Payment received. We are confirming your ${OFFER.membershipName} membership and preparing your private ${OFFER.delivery.platform} invite.`,
      },
    },
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: OFFER.price.currency,
          unit_amount: OFFER.price.amountCents,
          recurring: { interval: OFFER.price.interval },
          product_data: {
            name: OFFER.membershipName,
            description: `Daily plans, live reasoning, complete recaps, and private ${OFFER.delivery.platform} access for traders learning ${OFFER.marketFocus}.`,
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
