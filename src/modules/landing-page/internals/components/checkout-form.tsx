"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button, Spinner } from "@/modules/design-system";
import { OFFER } from "@/modules/offer";

type CheckoutFormProps = {
  className?: string;
  fullWidth?: boolean;
  size?: "default" | "lg";
};

export function CheckoutForm({ className, fullWidth = false, size = "lg" }: CheckoutFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form
      action="/api/checkout"
      method="post"
      className={fullWidth ? "w-full" : undefined}
      onSubmit={() => setIsSubmitting(true)}
    >
      <Button
        type="submit"
        size={size}
        className={cn(fullWidth && "w-full", className)}
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? <Spinner data-icon="inline-start" /> : null}
        {OFFER.ctaLabel}
        {isSubmitting ? null : <ArrowRight data-icon="inline-end" />}
      </Button>
    </form>
  );
}
