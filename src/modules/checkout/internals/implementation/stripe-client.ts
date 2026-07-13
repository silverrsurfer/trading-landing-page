import Stripe from "stripe";
import { OFFER } from "@/modules/offer";

let stripeClient: Stripe | undefined;

export function getStripeClient() {
  if (stripeClient) {
    return stripeClient;
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is required");
  }

  if (!secretKey.startsWith("sk_test_")) {
    throw new Error("The prototype accepts Stripe test-mode keys only");
  }

  stripeClient = new Stripe(secretKey, {
    appInfo: {
      name: `${OFFER.membershipName} prototype`,
      version: "1.0.0",
    },
  });

  return stripeClient;
}
