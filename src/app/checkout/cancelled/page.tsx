import { OFFER } from "@/modules/offer";
import { ResultPage } from "@/modules/ui";

export default function CheckoutCancelledPage() {
  return (
    <ResultPage
      severity="info"
      eyebrow="Checkout cancelled"
      title="No payment was taken."
      description={`Review the ${OFFER.delivery.platform} preview, schedule, and membership terms before deciding whether to try again.`}
      primaryAction={{ label: "Review the membership", href: "/#whats-inside" }}
    />
  );
}
