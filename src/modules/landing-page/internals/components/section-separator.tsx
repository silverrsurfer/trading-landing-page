import { PAGE_CONTAINER } from "../constants";

export function SectionSeparator() {
  return (
    <div aria-hidden="true" className={`${PAGE_CONTAINER} py-10 sm:py-14`}>
      <div className="mx-auto h-px w-full max-w-5xl bg-border/70" />
    </div>
  );
}
