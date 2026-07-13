import { OFFER } from "@/modules/offer";
import type { CheckoutConfirmation } from "../types";
import { buildCheckoutSessionParams, resolveSiteUrl } from "./checkout-session-params";
import { getDiscordInviteUrl } from "./discord-invite";
import { getStripeClient } from "./stripe-client";

export async function createSubscriptionCheckout(requestUrl: string) {
  getDiscordInviteUrl();
  const siteUrl = resolveSiteUrl(requestUrl);
  const session = await getStripeClient().checkout.sessions.create(
    buildCheckoutSessionParams(siteUrl),
  );

  if (!session.url) {
    throw new Error("Stripe did not return a Checkout URL");
  }

  return session.url;
}

export async function getCheckoutConfirmation(
  sessionId: string | undefined,
): Promise<CheckoutConfirmation> {
  if (!sessionId?.startsWith("cs_test_") || sessionId.length > 255) {
    throw new Error("A valid Stripe test Checkout session ID is required");
  }

  const session = await getStripeClient().checkout.sessions.retrieve(sessionId);

  if (session.metadata?.offerId !== OFFER.id) {
    throw new Error("Checkout session does not belong to this offer");
  }

  return {
    status:
      session.status === "complete" && session.payment_status === "paid" ? "confirmed" : "pending",
    customerEmail: session.customer_details?.email ?? undefined,
  };
}
