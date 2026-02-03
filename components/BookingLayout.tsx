import Link from "next/link";
import type { ReactNode } from "react";

const steps = [
  { label: "Servicio", href: "/booking/service" },
  { label: "Barbero", href: "/booking/barber" },
  { label: "Fecha y hora", href: "/booking/datetime" },
  { label: "Confirmación", href: "/booking/confirm" }
];

export default function BookingLayout({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">Reserva premium</p>
        <h1 className="text-3xl font-semibold md:text-4xl">{title}</h1>
        <p className="text-base text-white/70">{subtitle}</p>
      </div>
      <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/50">
        {steps.map((step) => (
          <Link key={step.label} href={step.href} className="rounded-full border border-white/10 px-4 py-2 hover:text-white">
            {step.label}
          </Link>
        ))}
      </div>
      {children}
    </section>
  );
}
