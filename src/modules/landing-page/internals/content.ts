import { OFFER, getOfferCancellationPolicy, getOfferRefundPolicy } from "@/modules/offer";

export const NAVIGATION_ITEMS = [
  { label: "What's Inside", href: "#whats-inside" },
  { label: "How It Works", href: "#how-it-works" },
  { label: `Meet ${OFFER.trader.name}`, href: "#meet-mason" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const PROOF_ITEMS = [
  `${OFFER.trader.experienceYears} years focused on ${OFFER.marketFocus}`,
  "Complete winning and losing trade reviews",
  "Public sample sessions before purchase",
  "Moderated community with published rules",
];

export const WORKFLOW_STEPS = [
  {
    title: "Before the market: prepare",
    description: `Open a focused watchlist with the catalyst, key levels, possible setup, and invalidation for each stock ${OFFER.trader.name} is watching.`,
  },
  {
    title: "During the market: watch the decision",
    description:
      "Hear why a planned setup qualifies, changes, or gets rejected—and how risk is defined before any entry.",
  },
  {
    title: "After the market: review the outcome",
    description:
      "Use the replay and concise recap to study the decision without searching through hours of chat messages.",
  },
  {
    title: "When you are stuck: get feedback",
    description: `Post your chart or plan for process-focused feedback within one trading day or during the ${OFFER.schedule.setupLab.label} on ${OFFER.schedule.setupLab.time}.`,
  },
];

export const DISCORD_CHANNELS = {
  startHere: {
    name: "#start-here",
    description: "Onboarding checklist and notification controls.",
  },
  dailyPlan: {
    name: "#daily-momentum-plan",
    description: "Focused watchlist, scenarios, key levels, and invalidation points.",
  },
  liveRoom: {
    name: "#live-trading-room",
    description: "Live analysis and questions while the market develops.",
  },
  recaps: {
    name: "#trade-recaps",
    description: "Replays and reviews of winning, losing, rejected, and missed setups.",
  },
  feedback: {
    name: "#setup-feedback",
    description: "Process-focused feedback on member charts and plans.",
  },
  lounge: {
    name: "#member-lounge",
    description: "Moderated discussion without hype or impersonation.",
  },
} as const;

export const CHANNELS = Object.values(DISCORD_CHANNELS);

export const METHOD_STEPS = [
  ["Prepare", "Identify the catalyst, levels, pattern, and required conditions."],
  ["Confirm", "Act only when price and volume confirm the plan."],
  ["Protect", "Define where the idea fails before considering reward."],
  ["Review", "Study the plan, decision, and outcome so every trade teaches."],
] as const;

export const FAQ_ITEMS = [
  {
    question: "Is this a signal group?",
    answer:
      "No. Every discussed setup includes context, confirmation, invalidation, and risk reasoning. You remain responsible for every decision.",
  },
  {
    question: "What if I work during market hours?",
    answer: `Every live session is recorded. A concise recap is posted by ${OFFER.schedule.recap.time}, so you can review the plan and lessons after work.`,
  },
  {
    question: `How much time should I spend inside ${OFFER.delivery.platform}?`,
    answer: `Start with the ${OFFER.schedule.premarketPlan.label.toLowerCase()} and ${OFFER.schedule.recap.label.toLowerCase()}. The core workflow takes about 30-45 minutes per trading day. Live participation is optional.`,
  },
  {
    question: "Which markets do you cover?",
    answer: `The membership focuses on ${OFFER.marketFocus}. It does not cover options, futures, forex, or crypto.`,
  },
  {
    question: "How does cancellation work?",
    answer: getOfferCancellationPolicy(),
  },
  {
    question: "What is the refund policy?",
    answer: getOfferRefundPolicy(),
  },
  {
    question: "Will joining make me profitable?",
    answer:
      "No. Trading involves substantial risk. The membership helps develop a decision process but cannot guarantee results.",
  },
];

export const FOOTER_GROUPS = [
  {
    title: "Explore",
    links: [
      { label: "What’s inside", href: "#whats-inside" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Free breakdown", href: "#free-breakdown" },
      { label: "Discord preview", href: "#discord-preview" },
    ],
  },
  {
    title: "Membership",
    links: [
      { label: "Meet Mason", href: "#meet-mason" },
      { label: "Daily schedule", href: "#main-content" },
      { label: "Pricing", href: "#pricing" },
      { label: "Join the Discord", href: "#pricing" },
    ],
  },
  {
    title: "Help & legal",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Cancellation", href: "#faq" },
      { label: "Refund policy", href: "#faq" },
      { label: "Risk disclosure", href: "#footer-disclaimer" },
    ],
  },
] as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
  { label: "Reddit", href: "https://www.reddit.com/", icon: "reddit" },
  { label: "TikTok", href: "https://www.tiktok.com/", icon: "tiktok" },
  { label: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
] as const;
