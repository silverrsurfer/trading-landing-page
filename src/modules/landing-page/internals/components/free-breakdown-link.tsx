import { PlayCircle } from "lucide-react";
import { buttonVariants } from "@/modules/design-system";
import { cn } from "@/lib/utils";
import { CTA_BUTTON_CLASS } from "../constants";

export function FreeBreakdownLink() {
  return (
    <a
      href="#free-breakdown"
      className={cn(buttonVariants({ variant: "outline", size: "lg" }), CTA_BUTTON_CLASS)}
    >
      <PlayCircle data-icon="inline-start" />
      Watch a free breakdown
    </a>
  );
}
