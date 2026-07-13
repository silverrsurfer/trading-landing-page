import { NextResponse } from "next/server";
import { createSubscriptionCheckout } from "@/modules/checkout";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const checkoutUrl = await createSubscriptionCheckout(request.url);
    return NextResponse.redirect(checkoutUrl, 303);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown checkout error";
    console.error("Unable to create Stripe Checkout session", { message });
    return NextResponse.redirect(new URL("/checkout/error", request.url), 303);
  }
}
