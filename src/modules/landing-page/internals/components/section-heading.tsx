type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
        {eyebrow}
      </p>
      <h2 id={id} className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
