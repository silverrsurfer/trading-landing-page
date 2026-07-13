import Image from "next/image";
import {
  BookOpenCheck,
  Check,
  ChevronDown,
  CircleAlert,
  Clock3,
  ExternalLink,
  History,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";
import {
  Alert,
  AlertDescription,
  Badge,
  buttonVariants,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/modules/design-system";
import { cn } from "@/lib/utils";
import {
  OFFER,
  formatOfferPrice,
  getOfferBillingIntervalCopy,
  getOfferDeliveryLabel,
  getOfferRenewalTerms,
  getOfferScheduleItems,
  getOfferTermsSummary,
} from "@/modules/offer";
import masonPortrait from "../../../../imgs/demo-trader.jpg";
import {
  BREAKDOWN_VIDEO,
  CHANNELS,
  FAQ_ITEMS,
  METHOD_STEPS,
  PROOF_ITEMS,
  WORKFLOW_STEPS,
} from "./content";
import { CTA_BUTTON_CLASS, PAGE_CONTAINER, PAGE_SECTION } from "./constants";
import { CardAccentGlow } from "./components/card-accent-glow";
import { CheckoutForm } from "./components/checkout-form";
import { FreeBreakdownLink } from "./components/free-breakdown-link";
import { HeroBackground } from "./components/hero-background";
import { MobileStickyCheckout } from "./components/mobile-sticky-checkout";
import { PriceLockup } from "./components/price-lockup";
import { SectionCtaCard } from "./components/section-cta-card";
import { SectionDetailCard } from "./components/section-detail-card";
import { SectionHeading } from "./components/section-heading";
import { SectionSeparator } from "./components/section-separator";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

export function LandingPage() {
  const billingInterval = getOfferBillingIntervalCopy();
  const deliveryLabel = getOfferDeliveryLabel();

  return (
    <main id="top" className="min-h-[100dvh] overflow-x-clip pb-24 sm:pb-0">
      <a
        href="#main-content"
        className="fixed top-3 left-3 z-50 -translate-y-20 rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground focus:translate-y-0"
      >
        Skip to content
      </a>

      <Alert className="rounded-none border-x-0 border-t-0 bg-muted/80 py-2 text-center">
        <CircleAlert className="hidden sm:block" />
        <AlertDescription className="text-xs sm:text-sm">
          Fictional prototype. Stripe test mode. No real charges.
        </AlertDescription>
      </Alert>
      <SiteHeader />

      <section
        id="main-content"
        className="relative isolate overflow-hidden"
        aria-labelledby="hero-title"
      >
        <HeroBackground />

        <div className={`${PAGE_CONTAINER} relative z-10 py-12 sm:py-16 lg:py-20`}>
          <div className="flex min-h-[25rem] items-center lg:min-h-[30rem]">
            <div className="max-w-2xl">
              <Badge variant="outline" className="mb-6 border-primary/25 bg-primary/8 text-primary">
                Paid {deliveryLabel} for developing stock traders
              </Badge>
              <h1
                id="hero-title"
                className="max-w-3xl text-5xl leading-[0.98] font-semibold tracking-[-0.055em] text-balance sm:text-6xl"
              >
                Watch the plan. Learn the decision.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Daily plans, live reasoning, and complete recaps for traders learning around a
                full-time job.
              </p>
              <div id="hero-checkout" className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
                <CheckoutForm className={CTA_BUTTON_CLASS} />
                <FreeBreakdownLink />
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {getOfferScheduleItems().map((item) => (
              <Card
                key={item.label}
                size="sm"
                className="min-h-32 justify-center bg-card/75 backdrop-blur-md sm:min-h-36"
              >
                <CardHeader className="gap-2 px-5 sm:px-6">
                  <Clock3 className="mb-1 size-4 text-muted-foreground" />
                  <CardTitle className="font-mono text-sm tabular-nums">{item.time}</CardTitle>
                  <CardDescription>{item.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <MobileStickyCheckout />

      <section className={`${PAGE_CONTAINER} pt-8 sm:pt-12 lg:pt-8`} aria-labelledby="proof-title">
        <Card className="overflow-hidden border-primary/20 bg-card/85 py-0 ring-primary/10">
          <CardContent className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:p-12">
            <div>
              <p className="text-sm font-medium text-primary">Evaluate before joining</p>
              <h2
                id="proof-title"
                className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-balance sm:text-4xl"
              >
                Evidence beats screenshots.
              </h2>
              <p className="mt-5 max-w-md leading-7 text-muted-foreground">
                A credible room shows the plan, the full session, the losing days, and the community
                rules before checkout.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2">
              {PROOF_ITEMS.map((item) => (
                <div key={item} className="flex min-h-28 items-start gap-3 bg-background/80 p-5">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <Check className="size-4" />
                  </span>
                  <p className="text-sm leading-6">{item}</p>
                </div>
              ))}
            </div>
          </CardContent>
          <Alert className="rounded-none border-x-0 border-b-0 bg-muted/55 px-7 sm:px-10 lg:px-12">
            <CircleAlert />
            <AlertDescription className="leading-6">
              Portfolio prototype. The educator, results, and proof points are illustrative. A
              production version must replace them with dated, verifiable evidence.
            </AlertDescription>
          </Alert>
        </Card>
      </section>

      <SectionSeparator />

      <section id="whats-inside" className={PAGE_SECTION} aria-labelledby="workflow-title">
        <SectionHeading
          id="workflow-title"
          eyebrow="One membership. A complete trading-day workflow."
          title="Know what to watch, what confirms the trade, and what makes it wrong."
          description="The membership organizes preparation, live decisions, review, and feedback around one repeatable process."
        />
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {WORKFLOW_STEPS.map((step) => (
            <SectionDetailCard key={step.title} {...step} />
          ))}
        </div>
        <SectionCtaCard
          title="Start with today’s plan, not another alert."
          description="Get immediate access to the latest replay, the daily watchlist, and the complete member library."
        />
      </section>

      <SectionSeparator />

      <section id="free-breakdown" className={PAGE_SECTION} aria-labelledby="breakdown-title">
        <Card className="grid gap-0 overflow-hidden bg-card/90 py-0 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="flex min-h-72 items-center bg-background lg:min-h-full">
            <iframe
              src={BREAKDOWN_VIDEO.embedUrl}
              title={BREAKDOWN_VIDEO.title}
              className="aspect-video w-full"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <h2
              id="breakdown-title"
              className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
            >
              Judge the teaching before you pay.
            </h2>
            <p className="mt-5 leading-7 text-muted-foreground">
              Use the sample to assess the explanation quality, risk framing, and fit with your
              schedule.
            </p>
            <div className="mt-7 grid gap-3">
              {[
                "Does the plan come before the trade?",
                "Are invalidation and risk explained?",
                "Can you follow the reasoning after work?",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a
              href={BREAKDOWN_VIDEO.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mt-8 w-fit rounded-xl",
              )}
            >
              Open on YouTube
              <ExternalLink data-icon="inline-end" />
            </a>
            <p className="mt-4 text-xs leading-5 text-muted-foreground">
              Third-party sample. Its title and claims are not product evidence.
            </p>
          </div>
        </Card>
      </section>

      <SectionSeparator />

      <section id="discord-preview" className={PAGE_SECTION} aria-labelledby="discord-title">
        <SectionHeading
          id="discord-title"
          title="Everything has a place. Nothing important gets buried in chat."
        />
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {CHANNELS.map((channel) => (
            <SectionDetailCard
              key={channel.name}
              title={channel.name}
              description={channel.description}
              titleClassName="font-mono text-base text-primary"
            />
          ))}
        </div>
        <SectionCtaCard
          title="See the room structure before you join."
          description="Review where the daily plan, live analysis, recaps, feedback, and member discussion each belong."
        />
      </section>

      <SectionSeparator />

      <section id="how-it-works" className={PAGE_SECTION} aria-labelledby="method-title">
        <SectionHeading
          id="method-title"
          title="Prepare. Confirm. Protect. Review."
          description={`The goal is not to copy ${OFFER.trader.name}. It is to understand the process well enough to make your own decisions.`}
        />
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {METHOD_STEPS.map(([title, description]) => (
            <SectionDetailCard key={title} title={title} description={description} />
          ))}
        </div>
      </section>

      <SectionSeparator />

      <section id="meet-mason" className={PAGE_SECTION} aria-labelledby="mason-title">
        <Card className="overflow-hidden bg-card/90 py-0">
          <CardContent className="grid p-0 lg:grid-cols-[0.72fr_1.28fr]">
            <figure className="relative min-h-96 bg-muted lg:min-h-[38rem]">
              <Image
                src={masonPortrait}
                alt="Illustrative portrait of a trading educator at a multi-monitor desk"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-center"
              />
            </figure>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <p className="text-sm font-medium text-primary">Meet the educator</p>
              <h2
                id="mason-title"
                className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl"
              >
                The wins show what worked. The losses show whether the process held up.
              </h2>
              <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
                {OFFER.trader.name} is a fictional educator with {OFFER.trader.experienceYears}{" "}
                years of prototype experience in {OFFER.marketFocus}. The concept teaches traders to
                evaluate the reasoning before the outcome.
              </p>
              <div className="mt-9 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2">
                <div className="bg-background/70 p-5">
                  <BookOpenCheck className="size-5 text-primary" />
                  <p className="mt-4 font-medium">Plan before outcome</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Show the thesis, confirmation, and invalidation before discussing the result.
                  </p>
                </div>
                <div className="bg-background/70 p-5">
                  <History className="size-5 text-primary" />
                  <p className="mt-4 font-medium">Keep the complete record</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Review wins, losses, rejected setups, and days when no trade was correct.
                  </p>
                </div>
              </div>
              <Alert className="mt-7 bg-muted/70">
                <ShieldCheck />
                <AlertDescription>
                  Portfolio prototype. Production requires verifiable identity, dated full-session
                  examples, trading background, and risk disclosures.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>
      </section>

      <SectionSeparator />

      <section id="pricing" className={PAGE_SECTION} aria-labelledby="pricing-title">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            id="pricing-title"
            eyebrow={`Simple ${billingInterval.adjective} membership`}
            title={`Join ${OFFER.membershipName} for ${formatOfferPrice()} per ${billingInterval.period}.`}
          />
          <Card className="relative overflow-hidden border-primary/30 bg-card/95 py-0 shadow-xl shadow-primary/5 ring-1 ring-primary/15">
            <CardAccentGlow />
            <CardHeader className="relative border-b border-primary/15 p-7 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <Badge className="mb-5">Built for part-time traders</Badge>
                  <CardTitle className="text-2xl font-semibold sm:text-3xl">
                    {OFFER.membershipName}
                  </CardTitle>
                  <CardDescription className="mt-3 max-w-lg text-base leading-7">
                    Full access to the daily workflow, live room, recordings, feedback, and member
                    library. Cancel online on your schedule.
                  </CardDescription>
                </div>
                <PriceLockup price={formatOfferPrice()} period={billingInterval.period} />
              </div>
            </CardHeader>
            <div className="relative grid lg:grid-cols-[1.15fr_0.85fr]">
              <CardContent className="grid gap-4 p-7 sm:grid-cols-2 sm:p-10 lg:border-r lg:border-primary/15">
                {OFFER.included.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-6">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                      <Check className="size-3.5" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex-col items-stretch justify-center gap-5 p-7 sm:p-10">
                <div>
                  <p className="font-semibold">Try the full room for seven days.</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Secure checkout takes less than a minute. Your Discord invitation appears after
                    payment.
                  </p>
                </div>
                <CheckoutForm
                  fullWidth
                  className="h-14 rounded-xl text-base hover:-translate-y-0.5"
                />
                <p className="text-center text-xs leading-5 text-muted-foreground">
                  {getOfferTermsSummary()}
                </p>
              </CardFooter>
            </div>
          </Card>
          <Alert className="mt-5 bg-card/55">
            <ShieldCheck />
            <AlertDescription className="leading-6">
              {getOfferRenewalTerms()} Membership provides education and community access. It does
              not guarantee trading results.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <SectionSeparator />

      <section id="faq" className={PAGE_SECTION} aria-labelledby="faq-title">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="faq-title"
              eyebrow="Frequently asked questions"
              title="Know the terms before checkout."
              description="Clear answers to the biggest concerns: schedule fit, real value, cancellation, and risk."
            />
            <a
              href="#pricing"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 rounded-xl px-5",
              )}
            >
              Review membership
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border bg-card/80 ring-1 ring-foreground/10">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="group not-last:border-b open:bg-muted/50">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-6 py-6 text-left font-sans text-base leading-6 font-medium transition-colors hover:bg-muted/30 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronDown className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <p className="max-w-3xl px-6 pb-6 font-sans leading-6 text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SectionSeparator />

      <section className={`${PAGE_CONTAINER} pb-20 sm:pb-28`} aria-labelledby="final-cta-title">
        <Card className="relative overflow-hidden border-primary/25 bg-primary/8 py-0 ring-primary/15">
          <div className="pointer-events-none absolute top-0 left-1/2 h-64 w-4/5 -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
          <CardContent className="relative px-6 py-16 text-center sm:px-12 sm:py-20">
            <MessageSquareText className="mx-auto mb-6 size-7 text-primary" />
            <h2
              id="final-cta-title"
              className="mx-auto max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl"
            >
              Stop chasing alerts. Start learning the decision.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Open today&apos;s plan, watch {OFFER.trader.name} explain the market, and review every
              decision on your schedule.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CheckoutForm className={CTA_BUTTON_CLASS} />
              <FreeBreakdownLink />
            </div>
            <p className="mt-5 text-sm text-muted-foreground">{getOfferTermsSummary()}</p>
          </CardContent>
        </Card>
      </section>

      <SiteFooter />
    </main>
  );
}
