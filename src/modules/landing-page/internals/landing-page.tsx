import {
  Check,
  CircleAlert,
  Clock3,
  Hash,
  MessageSquareText,
  PlayCircle,
  ShieldCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  Avatar,
  AvatarFallback,
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
import { CHANNELS, FAQ_ITEMS, METHOD_STEPS, PROOF_ITEMS, WORKFLOW_STEPS } from "./content";
import { PAGE_CONTAINER, PAGE_SECTION } from "./constants";
import { CheckoutForm } from "./components/checkout-form";
import { DiscordPreview } from "./components/discord-preview";
import { FreeBreakdownDialog } from "./components/free-breakdown-dialog";
import { MobileStickyCheckout } from "./components/mobile-sticky-checkout";
import { SectionHeading } from "./components/section-heading";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

export function LandingPage() {
  const billingInterval = getOfferBillingIntervalCopy();
  const deliveryLabel = getOfferDeliveryLabel();

  return (
    <main id="top" className="min-h-screen overflow-hidden pb-24 sm:pb-0">
      <a
        href="#main-content"
        className="fixed top-3 left-3 z-50 -translate-y-20 rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground focus:translate-y-0"
      >
        Skip to content
      </a>

      <Alert className="rounded-none border-x-0 border-t-0 bg-muted/80 py-2 text-center">
        <CircleAlert className="hidden sm:block" />
        <AlertDescription className="text-xs sm:text-sm">
          Fictional prototype · Stripe test mode · No real charges
        </AlertDescription>
      </Alert>
      <SiteHeader />

      <section
        id="main-content"
        className={`${PAGE_CONTAINER} relative py-16 sm:py-24 lg:py-32`}
        aria-labelledby="hero-title"
      >
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div>
            <Badge variant="outline" className="mb-6 border-primary/25 bg-primary/8 text-primary">
              Paid {deliveryLabel} for developing stock traders
            </Badge>
            <h1
              id="hero-title"
              className="max-w-4xl text-5xl leading-[0.98] font-semibold tracking-[-0.055em] text-balance sm:text-6xl lg:text-7xl"
            >
              Watch the plan. See the trade. Learn the process.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Join {OFFER.trader.name}&apos;s {deliveryLabel} for a momentum watchlist, live trade
              explanations, risk-first breakdowns, and trade recaps—even when work keeps you away
              from the market.
            </p>
            <div id="hero-checkout" className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <CheckoutForm className="h-12 rounded-xl px-6 text-base shadow-lg shadow-primary/20 hover:-translate-y-0.5" />
              <a
                href="#free-breakdown"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-xl px-6 text-base hover:-translate-y-0.5",
                )}
              >
                <PlayCircle data-icon="inline-start" />
                Watch a free breakdown
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{getOfferTermsSummary()}</p>
            <div className="mt-8 flex max-w-xl items-start gap-3 border-l-2 pl-4 text-sm leading-6 text-muted-foreground">
              <ShieldCheck className="mt-0.5 size-4 shrink-0" />
              <p>Education and community support. No guaranteed returns or unexplained alerts.</p>
            </div>
          </div>
          <DiscordPreview />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {getOfferScheduleItems().map((item) => (
            <Card key={item.label} size="sm" className="bg-card/75">
              <CardHeader>
                <Clock3 className="mb-3 size-4 text-muted-foreground" />
                <CardTitle className="font-mono text-sm tabular-nums">{item.time}</CardTitle>
                <CardDescription>{item.label}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <MobileStickyCheckout />

      <section className={`${PAGE_CONTAINER} pb-10`} aria-label="Prototype proof">
        <Alert className="mb-5 bg-background/80">
          <CircleAlert />
          <AlertDescription>
            Prototype proof claims are illustrative. Production claims must link to verifiable
            evidence.
          </AlertDescription>
        </Alert>
        <div className="grid overflow-hidden rounded-3xl border bg-card/70 sm:grid-cols-2 lg:grid-cols-4">
          {PROOF_ITEMS.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 border-b p-5 last:border-b-0 sm:border-r lg:border-b-0"
            >
              <Check className="mt-0.5 size-4 shrink-0" />
              <p className="text-sm leading-6">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="whats-inside" className={PAGE_SECTION} aria-labelledby="workflow-title">
        <SectionHeading
          id="workflow-title"
          eyebrow="One membership. A complete trading-day workflow."
          title="Know what to watch, what confirms the trade, and what makes it wrong."
          description="The membership organizes preparation, live decisions, review, and feedback around one repeatable process."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {WORKFLOW_STEPS.map((step, index) => (
            <Card key={step.title} className="bg-card/80">
              <CardHeader>
                <Badge variant="secondary" className="mb-4 font-mono">
                  0{index + 1}
                </Badge>
                <CardTitle className="text-xl">{step.title}</CardTitle>
                <CardDescription className="max-w-xl leading-6">{step.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <Card className="mt-6 border-primary/20 bg-primary/6 py-0 ring-primary/15">
          <CardContent className="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-lg font-semibold">Start with today’s plan, not another alert.</p>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                Get immediate access to the latest replay, the daily watchlist, and the complete
                member library.
              </p>
            </div>
            <CheckoutForm className="h-12 rounded-xl px-6 text-base shadow-lg shadow-primary/20" />
          </CardContent>
        </Card>
      </section>

      <section id="free-breakdown" className={PAGE_SECTION} aria-labelledby="breakdown-title">
        <Card className="grid gap-0 overflow-hidden bg-card/90 py-0 md:grid-cols-[0.8fr_1.2fr]">
          <div className="flex min-h-80 items-center justify-center bg-foreground p-8 text-background">
            <div className="text-center">
              <PlayCircle className="mx-auto size-16 stroke-[1.2]" />
              <p className="mt-5 text-xl font-medium">Complete trade breakdown</p>
              <p className="mt-2 text-sm text-background/65">18 minutes · illustrative lesson</p>
            </div>
          </div>
          <div className="p-7 sm:p-12">
            <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              Inspect the teaching before you pay
            </p>
            <h2
              id="breakdown-title"
              className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
            >
              See the entire decision—not a profit screenshot.
            </h2>
            <div className="mt-8 grid gap-4">
              {[
                "Why the stock made the plan",
                "What confirmed the setup",
                "Where the idea failed",
                "What the review changed",
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <Badge variant="secondary" className="font-mono tabular-nums">
                    {index * 4}:00
                  </Badge>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <FreeBreakdownDialog />
          </div>
        </Card>
      </section>

      <section id="discord-preview" className={PAGE_SECTION} aria-labelledby="discord-title">
        <SectionHeading
          id="discord-title"
          eyebrow="See what you are paying for"
          title="Everything has a place. Nothing important gets buried in chat."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CHANNELS.map((channel) => (
            <Card key={channel.name} size="sm" className="bg-card/75">
              <CardHeader>
                <Hash className="mb-3 size-4 text-muted-foreground" />
                <CardTitle className="font-mono text-sm">{channel.name}</CardTitle>
                <CardDescription className="leading-6">{channel.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section id="how-it-works" className={PAGE_SECTION} aria-labelledby="method-title">
        <SectionHeading
          id="method-title"
          eyebrow={`${OFFER.membershipName} process`}
          title="Prepare. Confirm. Protect. Review."
          description={`The goal is not to copy ${OFFER.trader.name}. It is to understand the process well enough to make your own decisions.`}
        />
        <div className="grid overflow-hidden rounded-3xl border bg-card/70 md:grid-cols-4">
          {METHOD_STEPS.map(([title, description], index) => (
            <article key={title} className="border-b p-6 last:border-b-0 md:border-r md:border-b-0">
              <p className="font-mono text-sm text-muted-foreground">0{index + 1}</p>
              <h3 className="mt-8 text-lg font-medium">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="meet-mason" className={PAGE_SECTION} aria-labelledby="mason-title">
        <Card className="bg-card/85">
          <CardContent className="grid gap-8 sm:grid-cols-[auto_1fr] sm:p-5">
            <Avatar className="size-20">
              <AvatarFallback className="text-2xl">{OFFER.trader.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                Learn from the complete record
              </p>
              <h2
                id="mason-title"
                className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
              >
                The wins show what worked. The losses show whether the process held up.
              </h2>
              <p className="mt-5 max-w-4xl leading-7 text-muted-foreground">
                {OFFER.trader.name} is a fictional educator with {OFFER.trader.experienceYears}{" "}
                years of prototype experience in {OFFER.marketFocus}. A production version must
                substantiate his identity, experience, and every performance claim with dated
                evidence.
              </p>
              <Alert className="mt-7 bg-muted/70">
                <ShieldCheck />
                <AlertDescription>
                  Production requires verifiable identity, dated full-session examples, trading
                  background, and a risk and performance disclosure.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="pricing" className={PAGE_SECTION} aria-labelledby="pricing-title">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            id="pricing-title"
            eyebrow={`Simple ${billingInterval.adjective} membership`}
            title={`The complete ${OFFER.membershipName} for ${formatOfferPrice()} per ${billingInterval.period}.`}
          />
          <Card className="relative overflow-hidden border-primary/30 bg-card/95 py-0 shadow-2xl shadow-black/30 ring-1 ring-primary/15">
            <div className="pointer-events-none absolute -top-32 right-0 size-80 rounded-full bg-primary/10 blur-3xl" />
            <CardHeader className="relative border-b border-primary/15 p-7 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
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
                <div>
                  <div className="flex items-end gap-2">
                    <span className="font-mono text-6xl font-semibold tracking-[-0.06em] text-primary tabular-nums sm:text-7xl">
                      {formatOfferPrice()}
                    </span>
                    <span className="pb-2 text-sm text-muted-foreground">
                      /{billingInterval.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">No long-term contract</p>
                </div>
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
                  className="h-14 rounded-xl text-base shadow-xl shadow-primary/20 hover:-translate-y-0.5"
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
          <Accordion className="bg-card/80 ring-1 ring-foreground/10">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={item.question} value={`question-${index + 1}`}>
                <AccordionTrigger className="px-5 py-5 text-left text-base sm:px-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-3xl px-5 pb-6 leading-6 text-muted-foreground sm:px-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className={`${PAGE_CONTAINER} py-20 sm:py-28`} aria-labelledby="final-cta-title">
        <Card className="relative overflow-hidden border-primary/25 bg-primary/8 py-0 ring-primary/15">
          <div className="pointer-events-none absolute top-0 left-1/2 h-64 w-4/5 -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
          <CardContent className="relative px-6 py-16 text-center sm:px-12 sm:py-20">
            <MessageSquareText className="mx-auto mb-6 size-7 text-primary" />
            <h2
              id="final-cta-title"
              className="mx-auto max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-6xl"
            >
              Stop chasing alerts. Start learning the decision.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Open today&apos;s plan, watch {OFFER.trader.name} explain the market, and review every
              decision on your schedule.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CheckoutForm className="h-14 rounded-xl px-8 text-base shadow-xl shadow-primary/20 hover:-translate-y-0.5" />
              <a
                href="#free-breakdown"
                className={cn(
                  buttonVariants({ variant: "link", size: "lg" }),
                  "h-12 text-foreground",
                )}
              >
                Watch a free breakdown first
              </a>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">{getOfferTermsSummary()}</p>
          </CardContent>
        </Card>
      </section>

      <SiteFooter />
    </main>
  );
}
