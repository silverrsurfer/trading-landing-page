import { Card, CardDescription, CardHeader, CardTitle } from "@/modules/design-system";
import { cn } from "@/lib/utils";

type SectionDetailCardProps = {
  title: string;
  description: string;
  titleClassName?: string;
};

export function SectionDetailCard({ title, description, titleClassName }: SectionDetailCardProps) {
  return (
    <Card className="min-h-40 justify-center bg-card/80 sm:min-h-44">
      <CardHeader className="gap-3 px-7 sm:px-8">
        <CardTitle className={cn("text-xl", titleClassName)}>{title}</CardTitle>
        <CardDescription className="max-w-xl leading-7">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
