import { Card, CardDescription, CardHeader, CardTitle } from "@/modules/design-system";

type WorkflowStepCardProps = {
  title: string;
  description: string;
};

export function WorkflowStepCard({ title, description }: WorkflowStepCardProps) {
  return (
    <Card className="min-h-40 justify-center bg-card/80 sm:min-h-44">
      <CardHeader className="gap-3 px-7 sm:px-8">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="max-w-xl leading-7">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
