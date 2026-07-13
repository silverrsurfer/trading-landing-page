"use client";

import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { getOfferBillingLabel } from "@/modules/offer";
import { CheckoutForm } from "./checkout-form";

export function MobileStickyCheckout() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroCheckout = document.getElementById("hero-checkout");

    if (!heroCheckout) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry ? !entry.isIntersecting : false),
      { rootMargin: "-64px 0px 0px" },
    );

    observer.observe(heroCheckout);
    return () => observer.disconnect();
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 p-3 sm:hidden">
      <Paper className="mx-auto max-w-sm p-3" elevation={8}>
        <CheckoutForm fullWidth />
        <Typography color="text.secondary" variant="caption" className="mt-1 block text-center">
          {getOfferBillingLabel()} · Test mode
        </Typography>
      </Paper>
    </div>
  );
}
