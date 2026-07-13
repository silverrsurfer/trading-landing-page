import { CircleAlert, CircleCheck, Clock3, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Alert,
  AlertDescription,
  buttonVariants,
  Card,
  CardContent,
} from "@/modules/design-system";

type ResultAction = {
  label: string;
  href: string;
};

export type ResultPageProps = {
  severity: "success" | "info" | "warning" | "error";
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: ResultAction;
};

const SEVERITY_ICON = {
  success: CircleCheck,
  info: Info,
  warning: Clock3,
  error: CircleAlert,
} as const;

export function ResultPage({
  severity,
  eyebrow,
  title,
  description,
  primaryAction,
}: ResultPageProps) {
  const SeverityIcon = SEVERITY_ICON[severity];

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-16">
      <Card className="w-full max-w-xl bg-card/95 py-0 shadow-xl ring-1 ring-foreground/10">
        <CardContent className="p-6 sm:p-10">
          <Alert className="mb-8 bg-muted/70">
            <SeverityIcon />
            <AlertDescription>{eyebrow}</AlertDescription>
          </Alert>
          <h1 className="max-w-lg text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-lg leading-7 text-muted-foreground">{description}</p>
          <a href={primaryAction.href} className={cn(buttonVariants({ size: "lg" }), "mt-8")}>
            {primaryAction.label}
          </a>
        </CardContent>
      </Card>
    </main>
  );
}
