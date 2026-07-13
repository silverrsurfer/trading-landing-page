const BILLING_INTERVAL_COPY = {
  day: { adjective: "daily", period: "day" },
  week: { adjective: "weekly", period: "week" },
  month: { adjective: "monthly", period: "month" },
  year: { adjective: "annual", period: "year" },
} as const;

const OFFER_SCHEDULE = {
  premarketPlan: {
    time: "8:45 a.m. ET",
    label: "Premarket plan",
    includedLabel: "Daily premarket momentum plan",
  },
  liveRoom: {
    time: "9:15 a.m. ET",
    label: "Live trading room",
    includedLabel: "Live trading room Monday-Friday",
  },
  recap: {
    time: "4:30 p.m. ET",
    label: "Replay and recap",
    includedLabel: "Session recordings and same-day recaps",
  },
  setupLab: {
    time: "Thursday",
    label: "Live Setup Lab",
    includedLabel: "Weekly live Setup Lab",
  },
} as const;

const OFFER_DELIVERY = {
  platform: "Discord",
  access: "private",
} as const;

export const OFFER = Object.freeze({
  id: "momentum-room-membership",
  trader: {
    name: "Mason Reed",
    initials: "MR",
    experienceYears: 6,
  },
  membershipName: "The Momentum Room",
  marketFocus: "US-listed momentum stocks",
  delivery: OFFER_DELIVERY,
  ctaLabel: `Join the ${OFFER_DELIVERY.platform}`,
  price: {
    amountCents: 7_900,
    currency: "usd",
    interval: "month" as const,
  },
  accessLabel: "Instant access",
  policies: {
    cancellation: {
      timing: "anytime",
      method: "online",
      accessContinuesThrough: "the paid billing period",
    },
    refund: {
      windowDays: 7,
      firstTimeMembersOnly: true,
      renewalsRefundable: false,
    },
  },
  included: [
    OFFER_SCHEDULE.premarketPlan.includedLabel,
    OFFER_SCHEDULE.liveRoom.includedLabel,
    OFFER_SCHEDULE.recap.includedLabel,
    OFFER_SCHEDULE.setupLab.includedLabel,
    "Direct setup feedback",
    "Complete member resource library",
    `Moderated ${OFFER_DELIVERY.platform} community`,
  ],
  schedule: OFFER_SCHEDULE,
});

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: OFFER.price.currency,
  maximumFractionDigits: 0,
});

export function formatOfferPrice() {
  return priceFormatter.format(OFFER.price.amountCents / 100);
}

export function getOfferBillingIntervalCopy() {
  return BILLING_INTERVAL_COPY[OFFER.price.interval];
}

export function getOfferBillingLabel() {
  return `${formatOfferPrice()}/${getOfferBillingIntervalCopy().period}`;
}

export function getOfferCancellationLabel() {
  return `Cancel ${OFFER.policies.cancellation.timing}`;
}

export function getOfferCancellationPolicy() {
  const cancellation = OFFER.policies.cancellation;

  return `Cancel ${cancellation.method} before the next renewal to prevent the next charge. Access continues through ${cancellation.accessContinuesThrough}.`;
}

export function getOfferDeliveryLabel() {
  return `${OFFER.delivery.access} ${OFFER.delivery.platform}`;
}

export function getOfferGuaranteeLabel() {
  const refund = OFFER.policies.refund;
  const eligibility = refund.firstTimeMembersOnly ? " for first-time members" : "";

  return `${refund.windowDays}-day money-back guarantee${eligibility}`;
}

export function getOfferRefundPolicy() {
  const refund = OFFER.policies.refund;
  const eligibleMembers = refund.firstTimeMembersOnly ? "First-time members" : "Members";
  const renewalPolicy = refund.renewalsRefundable
    ? "Renewals follow the same refund policy."
    : "Renewals are not refundable.";

  return `${eligibleMembers} may request a full refund within ${refund.windowDays} calendar days. ${renewalPolicy}`;
}

export function getOfferRenewalTerms() {
  const billingInterval = getOfferBillingIntervalCopy();

  return `Your membership renews ${billingInterval.adjective} until canceled. ${getOfferCancellationPolicy()} ${getOfferRefundPolicy()}`;
}

export function getOfferScheduleItems() {
  return Object.values(OFFER.schedule);
}

export function getOfferTermsSummary() {
  return `${getOfferBillingLabel()} · ${OFFER.accessLabel} · ${getOfferCancellationLabel()} · ${getOfferGuaranteeLabel()}`;
}
