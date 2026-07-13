import { getCheckoutConfirmation } from "@/modules/checkout";
import { OFFER } from "@/modules/offer";
import { ResultPage } from "@/modules/ui";

export const dynamic = "force-dynamic";

type CheckoutSuccessPageProps = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function CheckoutSuccessPage({ searchParams }: CheckoutSuccessPageProps) {
  const { session_id: sessionId } = await searchParams;
  const outcome = await loadCheckoutOutcome(sessionId);

  if (outcome.status === "unavailable") {
    return (
      <ResultPage
        severity="error"
        eyebrow="Confirmation unavailable"
        title="We could not verify this Checkout session."
        description="Use the return link from Stripe or start a new sandbox checkout from the landing page."
        primaryAction={{ label: "Return home", href: "/" }}
      />
    );
  }

  if (outcome.confirmation.status !== "confirmed") {
    return (
      <ResultPage
        severity="warning"
        eyebrow="Payment processing"
        title="Stripe has not confirmed the membership yet."
        description="Wait a moment, then refresh this page. Access appears only after Stripe confirms payment."
        primaryAction={{ label: "Return home", href: "/" }}
      />
    );
  }

  const discordInviteUrl = process.env.DISCORD_INVITE_URL;

  return (
    <ResultPage
      severity="success"
      eyebrow="Test payment confirmed"
      title={`Welcome to ${OFFER.membershipName}.`}
      description={
        discordInviteUrl
          ? `Stripe confirmed the membership${outcome.confirmation.customerEmail ? ` for ${outcome.confirmation.customerEmail}` : ""}. Continue to ${OFFER.delivery.platform} to finish onboarding.`
          : `Stripe confirmed the sandbox membership. Add DISCORD_INVITE_URL to connect the final ${OFFER.delivery.platform} onboarding step.`
      }
      primaryAction={
        discordInviteUrl
          ? { label: `Open ${OFFER.delivery.platform}`, href: discordInviteUrl }
          : { label: "Return home", href: "/" }
      }
    />
  );
}

async function loadCheckoutOutcome(sessionId: string | undefined) {
  try {
    return {
      status: "available" as const,
      confirmation: await getCheckoutConfirmation(sessionId),
    };
  } catch {
    return { status: "unavailable" as const };
  }
}
