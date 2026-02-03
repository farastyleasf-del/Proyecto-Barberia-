import type { ReactNode } from "react";

export default function SectionTitle({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="space-y-3">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.4em] text-gold">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-base text-white/70">{description}</p>
      ) : null}
    </div>
  );
}
