import Image from "next/image";
import {
  BookOpenCheck,
  Check,
  CircleAlert,
  Clock3,
  ExternalLink,
  History,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
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
import heroTraderImage from "../../../../imgs/hero-img-trader.jpg";
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
import { CheckoutForm } from "./components/checkout-form";
import { FreeBreakdownLink } from "./components/free-breakdown-link";
import { MobileStickyCheckout } from "./components/mobile-sticky-checkout";
import { SectionHeading } from "./components/section-heading";
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
        className="relative isolate overflow-hidden border-b"
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <Image
            src={heroTraderImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[64%_center] opacity-75"
          />
          <div className="absolute inset-0 bg-linear-to-b from-background/15 via-background/45 to-background" />
          <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/65 to-background/5" />
        </div>

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
              <Card key={item.label} size="sm" className="bg-card/75 backdrop-blur-md">
                <CardHeader>
                  <Clock3 className="mb-3 size-4 text-muted-foreground" />
                  <CardTitle className="font-mono text-sm tabular-nums">{item.time}</CardTitle>
                  <CardDescription>{item.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <MobileStickyCheckout />

      <section className={`${PAGE_CONTAINER} pt-16 sm:pt-20`} aria-labelledby="proof-title">
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

      <section id="whats-inside" className={PAGE_SECTION} aria-labelledby="workflow-title">
        <SectionHeading
          id="workflow-title"
          eyebrow="One membership. A complete trading-day workflow."
          title="Know what to watch, what confirms the trade, and what makes it wrong."
          description="The membership organizes preparation, live decisions, review, and feedback around one repeatable process."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {WORKFLOW_STEPS.map((step) => (
            <Card key={step.title} className="bg-card/80">
              <CardHeader>
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
            <CheckoutForm className={cn(CTA_BUTTON_CLASS, "shadow-lg shadow-primary/20")} />
          </CardContent>
        </Card>
      </section>

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

      <section id="discord-preview" className={PAGE_SECTION} aria-labelledby="discord-title">
        <SectionHeading
          id="discord-title"
          title="Everything has a place. Nothing important gets buried in chat."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CHANNELS.map((channel) => (
            <Card key={channel.name} size="sm" className="bg-card/75">
              <CardHeader>
                <CardTitle className="font-mono text-sm text-primary">{channel.name}</CardTitle>
                <CardDescription className="leading-6">{channel.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section id="how-it-works" className={PAGE_SECTION} aria-labelledby="method-title">
        <SectionHeading
          id="method-title"
          title="Prepare. Confirm. Protect. Review."
          description={`The goal is not to copy ${OFFER.trader.name}. It is to understand the process well enough to make your own decisions.`}
        />
        <div className="grid overflow-hidden rounded-3xl border bg-card/70 md:grid-cols-4">
          {METHOD_STEPS.map(([title, description]) => (
            <article
              key={title}
              className="border-b p-6 last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0"
            >
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </section>

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

      <section id="pricing" className={PAGE_SECTION} aria-labelledby="pricing-title">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            id="pricing-title"
            eyebrow={`Simple ${billingInterval.adjective} membership`}
            title={`Join ${OFFER.membershipName} for ${formatOfferPrice()} per ${billingInterval.period}.`}
          />
          <Card className="relative overflow-hidden border-primary/30 bg-card/95 py-0 shadow-xl shadow-primary/5 ring-1 ring-primary/15">
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
