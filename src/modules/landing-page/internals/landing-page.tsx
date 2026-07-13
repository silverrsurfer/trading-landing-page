import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ForumIcon from "@mui/icons-material/Forum";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutlined";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
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
import { CheckoutForm } from "./components/checkout-form";
import { DiscordPreview } from "./components/discord-preview";
import { FreeBreakdownDialog } from "./components/free-breakdown-dialog";
import { MobileStickyCheckout } from "./components/mobile-sticky-checkout";
import { SectionHeading } from "./components/section-heading";
import { SiteHeader } from "./components/site-header";

const pageContainer = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
const pageSection = `${pageContainer} py-16 sm:py-20`;

export function LandingPage() {
  const billingInterval = getOfferBillingIntervalCopy();
  const deliveryLabel = getOfferDeliveryLabel();

  return (
    <main id="top" className="min-h-screen pb-24 sm:pb-0">
      <Alert severity="info" variant="filled" icon={false} className="justify-center rounded-none">
        Fictional prototype · Stripe test mode · No real charges
      </Alert>
      <SiteHeader />

      <section className={`${pageContainer} py-12 sm:py-16 lg:py-20`} aria-labelledby="hero-title">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Chip label={`Paid ${deliveryLabel} for developing stock traders`} color="primary" />
            <Typography
              id="hero-title"
              component="h1"
              variant="h2"
              className="mt-5 mb-5 text-4xl! sm:text-5xl! lg:text-6xl!"
            >
              Watch the plan. See the trade. Learn the process.
            </Typography>
            <Typography color="text.secondary" variant="h6" className="mb-7 max-w-2xl">
              Join {OFFER.trader.name}&apos;s {deliveryLabel} for a momentum watchlist, live trade
              explanations, risk-first breakdowns, and trade recaps—even when work keeps you away
              from the market.
            </Typography>
            <div
              id="hero-checkout"
              className="flex flex-col items-start gap-3 sm:flex-row sm:items-center"
            >
              <CheckoutForm />
              <Button
                variant="outlined"
                size="large"
                href="#free-breakdown"
                startIcon={<PlayCircleOutlineIcon />}
              >
                Watch a Free Trade Breakdown
              </Button>
            </div>
            <Typography color="text.secondary" variant="body2" className="mt-3">
              {getOfferTermsSummary()}
            </Typography>
            <div className="mt-6 flex items-start gap-2">
              <ShieldOutlinedIcon color="action" fontSize="small" />
              <Typography color="text.secondary" variant="body2">
                Education and community support. No guaranteed returns or unexplained trade alerts.
              </Typography>
            </div>
          </div>
          <DiscordPreview />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {getOfferScheduleItems().map((item) => (
            <Paper key={item.label} className="p-4" variant="outlined">
              <ScheduleIcon color="primary" fontSize="small" />
              <Typography variant="subtitle2" className="mt-2">
                {item.time}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {item.label}
              </Typography>
            </Paper>
          ))}
        </div>
      </section>

      <MobileStickyCheckout />

      <section className={`${pageContainer} pb-8`} aria-label="Prototype proof">
        <Alert severity="warning" className="mb-4">
          Prototype proof claims are illustrative. Production claims must link to verifiable
          evidence.
        </Alert>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PROOF_ITEMS.map((item) => (
            <Paper key={item} className="flex items-start gap-3 p-4" variant="outlined">
              <CheckIcon color="success" fontSize="small" />
              <Typography variant="body2">{item}</Typography>
            </Paper>
          ))}
        </div>
      </section>

      <section id="whats-inside" className={pageSection} aria-labelledby="workflow-title">
        <SectionHeading
          eyebrow="One membership. A complete trading-day workflow."
          title="Know what to watch, what confirms the trade, and what makes it wrong."
          description="The membership organizes preparation, live decisions, review, and feedback around one repeatable process."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {WORKFLOW_STEPS.map((step, index) => (
            <Card key={step.title} variant="outlined">
              <CardContent className="p-6">
                <Chip label={`Step ${index + 1}`} size="small" className="mb-4" />
                <Typography component="h3" variant="h5" className="mb-2">
                  {step.title}
                </Typography>
                <Typography color="text.secondary">{step.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <CheckoutForm />
        </div>
      </section>

      <section id="free-breakdown" className={pageSection} aria-labelledby="breakdown-title">
        <Paper className="grid overflow-hidden md:grid-cols-2" variant="outlined">
          <div className="flex min-h-72 items-center justify-center p-8">
            <div className="text-center">
              <PlayCircleOutlineIcon color="primary" className="text-7xl" />
              <Typography variant="h5" className="mt-3">
                Complete Trade Breakdown
              </Typography>
              <Typography color="text.secondary">18 minutes · illustrative lesson</Typography>
            </div>
          </div>
          <div className="p-6 sm:p-10">
            <Typography color="primary" variant="overline">
              Inspect the teaching before you pay
            </Typography>
            <Typography id="breakdown-title" component="h2" variant="h3" className="mb-4">
              See the entire decision—not a profit screenshot.
            </Typography>
            <div className="grid gap-3">
              {[
                "Why the stock made the plan",
                "What confirmed the setup",
                "Where the idea failed",
                "What the review changed",
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <Chip label={`${index * 4}:00`} size="small" />
                  <Typography>{item}</Typography>
                </div>
              ))}
            </div>
            <FreeBreakdownDialog />
          </div>
        </Paper>
      </section>

      <section className={pageSection} aria-labelledby="discord-title">
        <SectionHeading
          eyebrow="See what you are paying for"
          title="Everything has a place. Nothing important gets buried in chat."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CHANNELS.map((channel) => (
            <Card key={channel.name} variant="outlined">
              <CardContent className="p-6">
                <ForumIcon color="primary" />
                <Typography component="h3" variant="h6" className="mt-3 mb-2 font-mono">
                  {channel.name}
                </Typography>
                <Typography color="text.secondary">{channel.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="how-it-works" className={pageSection} aria-labelledby="method-title">
        <SectionHeading
          eyebrow={`${OFFER.membershipName} process`}
          title="Prepare. Confirm. Protect. Review."
          description={`The goal is not to copy ${OFFER.trader.name}. It is to understand the process well enough to make your own decisions.`}
        />
        <div className="grid gap-4 md:grid-cols-4">
          {METHOD_STEPS.map(([title, description], index) => (
            <Paper key={title} className="p-6" variant="outlined">
              <Typography color="primary" variant="h4">
                {index + 1}
              </Typography>
              <Typography component="h3" variant="h6" className="mt-3 mb-2">
                {title}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {description}
              </Typography>
            </Paper>
          ))}
        </div>
      </section>

      <section id="meet-mason" className={pageSection} aria-labelledby="mason-title">
        <Paper className="grid gap-8 p-6 sm:p-10 md:grid-cols-[auto_1fr]" variant="outlined">
          <Avatar className="h-24 w-24 text-3xl">{OFFER.trader.initials}</Avatar>
          <div>
            <Typography color="primary" variant="overline">
              Learn from the complete record
            </Typography>
            <Typography id="mason-title" component="h2" variant="h3" className="mb-4">
              The wins show what worked. The losses show whether the process held up.
            </Typography>
            <Typography color="text.secondary" className="mb-6 max-w-4xl">
              {OFFER.trader.name} is a fictional educator with {OFFER.trader.experienceYears} years
              of prototype experience in {OFFER.marketFocus}. A production version must substantiate
              his identity, experience, and every performance claim with dated evidence.
            </Typography>
            <Alert severity="warning">
              Production requires verifiable identity, dated full-session examples, trading
              background, and a risk and performance disclosure before these proof links appear.
            </Alert>
          </div>
        </Paper>
      </section>

      <section id="pricing" className={pageSection} aria-labelledby="pricing-title">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow={`Simple ${billingInterval.adjective} membership`}
            title={`Get the complete ${OFFER.membershipName} for ${formatOfferPrice()} per ${billingInterval.period}.`}
          />
          <Card variant="outlined">
            <CardContent className="p-6 sm:p-8">
              <Typography id="pricing-title" component="h2" variant="h4">
                {OFFER.membershipName}
              </Typography>
              <div className="my-5 flex items-end gap-2">
                <Typography variant="h2">{formatOfferPrice()}</Typography>
                <Typography color="text.secondary" className="pb-3">
                  /{billingInterval.period}
                </Typography>
              </div>
              <Divider className="mb-6" />
              <div className="mb-7 grid gap-3">
                {OFFER.included.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckIcon color="success" fontSize="small" />
                    <Typography>{item}</Typography>
                  </div>
                ))}
              </div>
              <CheckoutForm fullWidth />
              <Typography color="text.secondary" variant="body2" className="mt-3 text-center">
                {getOfferTermsSummary()}
              </Typography>
              <Alert severity="info" className="mt-6">
                Membership provides education, analysis, and community access. It does not provide
                personalized financial advice or guarantee trading results.
              </Alert>
            </CardContent>
          </Card>
          <Typography color="text.secondary" variant="body2" className="mt-5">
            {getOfferRenewalTerms()}
          </Typography>
        </div>
      </section>

      <section id="faq" className={pageSection} aria-labelledby="faq-title">
        <SectionHeading
          eyebrow="Frequently asked questions"
          title="Know the terms before checkout."
        />
        <div className="mx-auto max-w-4xl">
          <Typography id="faq-title" component="h2" className="sr-only">
            Membership questions
          </Typography>
          {FAQ_ITEMS.map((item) => (
            <Accordion key={item.question} disableGutters>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography component="h3" variant="subtitle1">
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </section>

      <section className={`${pageContainer} py-20 text-center`} aria-labelledby="final-cta-title">
        <Typography id="final-cta-title" component="h2" variant="h3" className="mb-4">
          Stop chasing alerts. Start learning the decision.
        </Typography>
        <Typography color="text.secondary" variant="h6" className="mx-auto mb-7 max-w-2xl">
          Open today&apos;s plan, watch {OFFER.trader.name} explain the market, and review every
          decision on your schedule.
        </Typography>
        <div className="flex justify-center">
          <CheckoutForm />
        </div>
        <Typography color="text.secondary" variant="body2" className="mt-3">
          {getOfferTermsSummary()}
        </Typography>
      </section>

      <Divider />
      <footer className={`${pageContainer} py-10`}>
        <Typography color="text.secondary" variant="caption">
          All content is educational and informational only. Trading involves substantial risk,
          including possible loss of principal. Past performance does not guarantee future results.
          Examples and identities are illustrative for this fictional prototype.
        </Typography>
      </footer>
    </main>
  );
}
