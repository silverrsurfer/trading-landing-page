import { Hash } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from "@/modules/design-system";
import { OFFER } from "@/modules/offer";
import { DISCORD_CHANNELS } from "../content";

export function DiscordPreview() {
  return (
    <Card className="rotate-[0.4deg] bg-card/95 py-0 shadow-2xl shadow-foreground/10 ring-1 ring-foreground/10">
      <CardHeader className="flex flex-row items-center justify-between gap-3 p-5">
        <div className="flex min-w-0 items-center gap-3">
          <Avatar size="lg">
            <AvatarFallback>{OFFER.trader.initials}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <CardTitle className="truncate">Inside {OFFER.membershipName} today</CardTitle>
            <CardDescription>{OFFER.trader.name} · illustrative preview</CardDescription>
          </div>
        </div>
        <Badge variant="outline">Demo</Badge>
      </CardHeader>
      <Separator />
      <div className="flex items-center gap-2 px-5 py-3 text-sm font-medium">
        <Hash className="size-4 text-muted-foreground" />
        {DISCORD_CHANNELS.dailyPlan.name.slice(1)}
      </div>
      <Separator />
      <CardContent className="p-5">
        <div className="mb-4 flex items-center gap-3">
          <Avatar>
            <AvatarFallback>{OFFER.trader.initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{OFFER.trader.name}</p>
            <p className="text-xs text-muted-foreground">Today at 8:42 a.m.</p>
          </div>
        </div>
        <p className="mb-5 text-xl font-semibold tracking-tight">Watching above 4.80</p>
        <dl className="grid gap-4">
          <PreviewItem label="Why it is on the list">
            Strong premarket volume and a clean first-pullback structure.
          </PreviewItem>
          <PreviewItem label="Confirmation">Price reclaims VWAP and holds above 4.80.</PreviewItem>
          <PreviewItem label="Invalidation">
            Price loses 4.55. No confirmation means no trade.
          </PreviewItem>
        </dl>
      </CardContent>
      <Separator />
      <p className="p-5 text-sm leading-6 text-muted-foreground">
        Every setup includes the thesis, confirmation, invalidation, and review—not only an entry.
      </p>
    </Card>
  );
}

function PreviewItem({ label, children }: Readonly<{ label: string; children: React.ReactNode }>) {
  return (
    <div className="grid gap-1">
      <dt className="text-[0.68rem] font-semibold tracking-[0.15em] text-muted-foreground uppercase">
        {label}
      </dt>
      <dd className="text-sm leading-6">{children}</dd>
    </div>
  );
}
