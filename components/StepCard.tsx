import type { ReactNode } from "react";

export default function StepCard({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-graphite p-6 shadow-soft">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-white/70">{description}</p>
        {children ? <div className="pt-3">{children}</div> : null}
      </div>
    </div>
  );
}
