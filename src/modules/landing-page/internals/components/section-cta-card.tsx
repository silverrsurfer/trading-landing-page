import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/modules/design-system";
import { CTA_BUTTON_CLASS } from "../constants";
import { CardAccentGlow } from "./card-accent-glow";
import { CheckoutForm } from "./checkout-form";

type SectionCtaCardProps = {
  title: string;
  description: string;
};

export function SectionCtaCard({ title, description }: SectionCtaCardProps) {
  return (
    <Card className="relative mt-8 overflow-hidden border-primary/20 bg-primary/6 py-0 shadow-xl shadow-primary/5 ring-primary/15">
      <CardAccentGlow />
      <CardContent className="relative flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-lg font-semibold">{title}</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{description}</p>
        </div>
        <CheckoutForm className={cn(CTA_BUTTON_CLASS, "shadow-lg shadow-primary/20")} />
      </CardContent>
    </Card>
  );
}
