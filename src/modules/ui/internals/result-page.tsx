import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

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

export function ResultPage({
  severity,
  eyebrow,
  title,
  description,
  primaryAction,
}: ResultPageProps) {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-16">
      <Paper className="w-full max-w-xl p-6 sm:p-10" elevation={4}>
        <Alert severity={severity} className="mb-6">
          {eyebrow}
        </Alert>
        <Typography component="h1" variant="h3" className="mb-4">
          {title}
        </Typography>
        <Typography color="text.secondary" className="mb-8">
          {description}
        </Typography>
        <Button variant="contained" size="large" href={primaryAction.href}>
          {primaryAction.label}
        </Button>
      </Paper>
    </main>
  );
}
