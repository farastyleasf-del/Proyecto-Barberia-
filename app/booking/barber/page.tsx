import Link from "next/link";

import BookingLayout from "../../../components/BookingLayout";
import { barbers } from "../../../lib/mock-data";

export default function BarberSelectionPage() {
  return (
    <BookingLayout
      title="Elige tu barbero"
      subtitle="Puedes seleccionar a tu especialista favorito o dejar que el sistema asigne el primero disponible."
    >
      <div className="rounded-2xl border border-gold/40 bg-noir p-6 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold">Sin preferencia</h3>
            <p className="text-sm text-white/70">Asignación automática para la cita más próxima.</p>
          </div>
          <Link
            href="/booking/datetime"
            className="rounded-full border border-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold"
          >
            Continuar
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {barbers.map((barber) => (
          <div key={barber.id} className="rounded-2xl border border-white/10 bg-graphite p-6 shadow-soft">
            <div className="space-y-3">
              <div className="h-24 w-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5" />
              <h3 className="text-xl font-semibold">{barber.name}</h3>
              <p className="text-sm text-white/70">{barber.specialty}</p>
              <p className="text-xs text-white/50">Disponible: {barber.availability}</p>
              <Link
                href="/booking/datetime"
                className="inline-flex items-center text-sm font-semibold text-gold"
              >
                Seleccionar →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </BookingLayout>
  );
}
