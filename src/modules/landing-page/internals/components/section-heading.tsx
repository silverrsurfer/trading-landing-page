import Typography from "@mui/material/Typography";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <Typography color="primary" variant="overline">
        {eyebrow}
      </Typography>
      <Typography component="h2" variant="h3" className="mb-3">
        {title}
      </Typography>
      {description ? (
        <Typography color="text.secondary" variant="h6">
          {description}
        </Typography>
      ) : null}
    </div>
  );
}
