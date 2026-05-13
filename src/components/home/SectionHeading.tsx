import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="mb-5 inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-brand-soft before:block before:h-px before:w-8 before:bg-current before:content-['']">
          {eyebrow}
        </p>
        <h2 className="max-w-[52rem] text-balance font-display text-[clamp(2.5rem,6vw,5.25rem)] font-normal uppercase leading-[1.08] tracking-normal text-cream max-[640px]:tracking-[-0.02em]">
          {title}
        </h2>
      </div>
      {children ? <div className="max-w-sm text-cream-muted">{children}</div> : null}
    </div>
  );
}
