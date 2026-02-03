import type { ReactNode } from "react";

export default function AdminSectionHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.4em] text-gold">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold">{title}</h2>
      {description ? (
        <p className="mt-2 text-sm text-white/70">{description}</p>
      ) : null}
    </div>
  );
}
