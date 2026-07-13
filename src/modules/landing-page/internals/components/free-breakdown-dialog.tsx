import { CircleAlert, PlayCircle } from "lucide-react";
import {
  Alert,
  AlertDescription,
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Separator,
} from "@/modules/design-system";

const BREAKDOWN_CHAPTERS = [
  ["0:00", "Plan", "Premarket volume and structure put the stock on the watchlist."],
  ["4:00", "Confirmation", "Price reclaimed VWAP but still needed to hold above 4.80."],
  ["8:00", "Invalidation", "A loss of 4.55 would end the thesis before any entry."],
  ["12:00", "Review", "No confirmation appeared, so staying out was the correct process decision."],
] as const;

export function FreeBreakdownDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" size="lg" className="mt-7" />}>
        <PlayCircle data-icon="inline-start" />
        Watch a Free Trade Breakdown
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">Complete trade breakdown</DialogTitle>
          <DialogDescription>
            See the plan, confirmation, invalidation, and review in one illustrative lesson.
          </DialogDescription>
        </DialogHeader>
        <Alert className="bg-muted/70">
          <CircleAlert />
          <AlertDescription>
            Prototype content only. No trade or performance result is being claimed.
          </AlertDescription>
        </Alert>
        <div className="grid">
          {BREAKDOWN_CHAPTERS.map(([time, title, description], index) => (
            <div key={time}>
              {index > 0 ? <Separator /> : null}
              <div className="grid grid-cols-[3rem_1fr] gap-4 py-4">
                <p className="font-mono text-sm text-muted-foreground">{time}</p>
                <div>
                  <p className="font-medium">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
