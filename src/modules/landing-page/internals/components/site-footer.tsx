import { ArrowUpRight, Camera, CirclePlay, MessageCircle, Music2 } from "lucide-react";
import { buttonVariants, Separator } from "@/modules/design-system";
import { cn } from "@/lib/utils";
import { OFFER } from "@/modules/offer";
import { PAGE_CONTAINER } from "../constants";
import { FOOTER_GROUPS, SOCIAL_LINKS } from "../content";

const SOCIAL_ICONS = {
  instagram: Camera,
  reddit: MessageCircle,
  tiktok: Music2,
  youtube: CirclePlay,
};

export function SiteFooter() {
  return (
    <footer className="border-t bg-card/35">
      <div className={`${PAGE_CONTAINER} py-14 sm:py-18`}>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <a href="#top" className="inline-flex items-center gap-3 font-semibold tracking-tight">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary font-mono text-xs font-bold text-primary-foreground">
                MR
              </span>
              {OFFER.membershipName}
            </a>
            <p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">
              A focused trading-day workflow for developing traders who want process, context, and
              review—not unexplained alerts.
            </p>
            <div className="mt-6 flex items-center gap-2" aria-label="Social media">
              {SOCIAL_LINKS.map((social) => {
                const SocialIcon = SOCIAL_ICONS[social.icon];

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "icon-lg" }),
                      "rounded-xl bg-background/40 text-muted-foreground hover:border-primary/40 hover:text-primary",
                    )}
                  >
                    <SocialIcon />
                  </a>
                );
              })}
            </div>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <nav key={group.title} aria-label={`${group.title} footer links`}>
              <p className="text-sm font-semibold text-foreground">{group.title}</p>
              <ul className="mt-5 grid gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                      <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <Separator className="my-10" />
        <div id="footer-disclaimer" className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="max-w-4xl text-xs leading-5 text-muted-foreground">
            All content is educational and informational only. Trading involves substantial risk,
            including possible loss of principal. Past performance does not guarantee future
            results. Examples and identities are illustrative for this fictional prototype.
          </p>
          <p className="text-xs text-muted-foreground">© 2026 {OFFER.membershipName}</p>
        </div>
      </div>
    </footer>
  );
}
