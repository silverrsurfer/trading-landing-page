"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/modules/design-system";
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
      <Card className="mx-auto max-w-sm bg-card/95 py-0 shadow-2xl backdrop-blur-xl">
        <CardContent className="p-3">
          <CheckoutForm fullWidth />
          <p className="mt-2 text-center text-xs text-muted-foreground">
            {getOfferBillingLabel()}. Test checkout.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
