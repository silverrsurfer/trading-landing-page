interface PriceLockupProps {
  period: string;
  price: string;
}

export function PriceLockup({ period, price }: PriceLockupProps) {
  return (
    <div className="justify-self-start lg:justify-self-end lg:text-right">
      <span className="sr-only">
        {price} per {period}
      </span>
      <div aria-hidden="true" className="flex items-baseline gap-2 lg:justify-end">
        <span className="text-6xl leading-none font-semibold tracking-[-0.055em] text-primary tabular-nums">
          {price}
        </span>
        <span className="text-base font-medium text-muted-foreground">/ {period}</span>
      </div>
      <p className="mt-3 text-sm font-medium text-muted-foreground">No long-term contract</p>
    </div>
  );
}
