import Link from "next/link";

import BookingLayout from "../../../components/BookingLayout";
import { timeSlots } from "../../../lib/mock-data";

const days = ["Lun 12", "Mar 13", "Mié 14", "Jue 15", "Vie 16", "Sáb 17"];

export default function DateTimeSelectionPage() {
  return (
    <BookingLayout
      title="Selecciona fecha y hora"
      subtitle="Mostramos únicamente horarios disponibles para confirmar en segundos."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1.4fr]">
        <div className="rounded-2xl border border-white/10 bg-graphite p-6 shadow-soft">
          <h3 className="text-lg font-semibold">Calendario</h3>
          <p className="text-sm text-white/60">Semana actual</p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {days.map((day) => (
              <button
                key={day}
                type="button"
                className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/80 hover:border-gold hover:text-gold"
              >
                {day}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-graphite p-6 shadow-soft">
          <h3 className="text-lg font-semibold">Horarios disponibles</h3>
          <p className="text-sm text-white/60">Duración estimada: 45 min</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/80 hover:border-gold hover:text-gold"
              >
                {slot}
              </button>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-white/70">Próximo disponible: Hoy 4:30 PM</p>
            <Link
              href="/booking/confirm"
              className="rounded-full bg-gold px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-noir"
            >
              Continuar
            </Link>
          </div>
        </div>
      </div>
    </BookingLayout>
  );
}
