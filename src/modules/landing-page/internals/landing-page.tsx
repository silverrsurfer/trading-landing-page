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
  Separator,
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
            <Badge variant="outline" className="mb-6 bg-background/75">
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
              <CheckoutForm />
              <a
                href="#free-breakdown"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
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
        <div className="mt-8">
          <CheckoutForm />
        </div>
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

      <section className={PAGE_SECTION} aria-labelledby="discord-title">
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
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            id="pricing-title"
            eyebrow={`Simple ${billingInterval.adjective} membership`}
            title={`The complete ${OFFER.membershipName} for ${formatOfferPrice()} per ${billingInterval.period}.`}
          />
          <Card className="bg-foreground py-0 text-background shadow-2xl shadow-foreground/15 ring-0">
            <CardHeader className="p-7 sm:p-9">
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div>
                  <CardTitle className="text-xl text-background">{OFFER.membershipName}</CardTitle>
                  <CardDescription className="mt-2 text-background/60">
                    Full access. Cancel on your schedule.
                  </CardDescription>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-semibold tracking-tight tabular-nums">
                    {formatOfferPrice()}
                  </span>
                  <span className="pb-1 text-sm text-background/60">/{billingInterval.period}</span>
                </div>
              </div>
            </CardHeader>
            <Separator className="bg-background/15" />
            <CardContent className="grid gap-3 p-7 sm:grid-cols-2 sm:p-9">
              {OFFER.included.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-6">
                  <Check className="mt-1 size-4 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex-col items-stretch gap-4 border-t border-background/15 p-7 sm:p-9">
              <CheckoutForm fullWidth />
              <p className="text-center text-xs text-background/60">{getOfferTermsSummary()}</p>
            </CardFooter>
          </Card>
          <p className="mt-5 text-sm leading-6 text-muted-foreground">{getOfferRenewalTerms()}</p>
        </div>
      </section>

      <section id="faq" className={PAGE_SECTION} aria-labelledby="faq-title">
        <SectionHeading
          id="faq-title"
          eyebrow="Frequently asked questions"
          title="Know the terms before checkout."
        />
        <Accordion className="mx-auto max-w-4xl bg-card/80">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem key={item.question} value={`question-${index + 1}`}>
              <AccordionTrigger className="text-base">{item.question}</AccordionTrigger>
              <AccordionContent className="max-w-3xl leading-6 text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section
        className={`${PAGE_CONTAINER} py-24 text-center sm:py-32`}
        aria-labelledby="final-cta-title"
      >
        <MessageSquareText className="mx-auto mb-6 size-6 text-muted-foreground" />
        <h2
          id="final-cta-title"
          className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl"
        >
          Stop chasing alerts. Start learning the decision.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Open today&apos;s plan, watch {OFFER.trader.name} explain the market, and review every
          decision on your schedule.
        </p>
        <div className="mt-8 flex justify-center">
          <CheckoutForm />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{getOfferTermsSummary()}</p>
      </section>

      <Separator />
      <footer className={`${PAGE_CONTAINER} py-10`}>
        <p className="max-w-5xl text-xs leading-5 text-muted-foreground">
          All content is educational and informational only. Trading involves substantial risk,
          including possible loss of principal. Past performance does not guarantee future results.
          Examples and identities are illustrative for this fictional prototype.
        </p>
      </footer>
    </main>
  );
}
