"use client";

import { useState } from "react";
import { Button, Spinner } from "@/modules/design-system";
import { OFFER } from "@/modules/offer";

type CheckoutFormProps = {
  fullWidth?: boolean;
  size?: "default" | "lg";
};

export function CheckoutForm({ fullWidth = false, size = "lg" }: CheckoutFormProps) {
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
        className={fullWidth ? "w-full" : undefined}
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? <Spinner data-icon="inline-start" /> : null}
        {OFFER.ctaLabel}
      </Button>
    </form>
  );
}
