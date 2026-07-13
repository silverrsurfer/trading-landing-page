import { ResultPage } from "@/modules/ui";

export default function CheckoutErrorPage() {
  return (
    <ResultPage
      severity="error"
      eyebrow="Checkout unavailable"
      title="The sandbox checkout could not start."
      description="Confirm that STRIPE_SECRET_KEY contains a Stripe test-mode key, then try again."
      primaryAction={{ label: "Return home", href: "/" }}
    />
  );
}
