"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { OFFER } from "@/modules/offer";

type CheckoutFormProps = {
  fullWidth?: boolean;
  size?: "medium" | "large";
};

export function CheckoutForm({ fullWidth = false, size = "large" }: CheckoutFormProps) {
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
        variant="contained"
        size={size}
        fullWidth={fullWidth}
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        startIcon={isSubmitting ? <CircularProgress size={18} color="inherit" /> : undefined}
      >
        {OFFER.ctaLabel}
      </Button>
    </form>
  );
}
