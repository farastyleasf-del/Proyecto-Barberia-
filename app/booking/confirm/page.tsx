import Link from "next/link";

import BookingLayout from "../../../components/BookingLayout";

export default function ConfirmationPage() {
  return (
    <BookingLayout
      title="Confirma tu cita"
      subtitle="Revisa cada detalle antes de finalizar."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-white/10 bg-graphite p-6 shadow-soft">
          <h3 className="text-lg font-semibold">Datos del cliente</h3>
          <p className="text-sm text-white/60">Solo necesitamos lo esencial.</p>
          <div className="mt-6 grid gap-4">
            <label className="text-sm text-white/70">
              Nombre completo
              <input
                type="text"
                placeholder="Ej: Andrés Gómez"
                className="mt-2 w-full rounded-xl border border-white/10 bg-noir px-4 py-3 text-sm text-white/80"
              />
            </label>
            <label className="text-sm text-white/70">
              Teléfono
              <input
                type="tel"
                placeholder="+57 320 000 0000"
                className="mt-2 w-full rounded-xl border border-white/10 bg-noir px-4 py-3 text-sm text-white/80"
              />
            </label>
            <label className="text-sm text-white/70">
              Email
              <input
                type="email"
                placeholder="tu@email.com"
                className="mt-2 w-full rounded-xl border border-white/10 bg-noir px-4 py-3 text-sm text-white/80"
              />
            </label>
            <p className="text-xs text-white/50">Recibirás la confirmación por email o WhatsApp.</p>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-noir p-6 shadow-soft">
          <h3 className="text-lg font-semibold">Resumen</h3>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <p>Servicio: Corte Premium</p>
            <p>Barbero: Mateo Vargas</p>
            <p>Fecha: Jue 15 · 4:30 PM</p>
            <p>Duración: 45 min</p>
            <p>Precio: $20</p>
          </div>
          <div className="mt-8 space-y-3">
            <button className="w-full rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-noir">
              Confirmar cita
            </button>
            <Link href="/booking/service" className="block text-center text-xs uppercase tracking-[0.3em] text-white/60">
              Modificar selección
            </Link>
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-graphite p-4 text-xs text-white/60">
            Tu tiempo es prioridad. Cancelación flexible hasta 3 horas antes.
          </div>
        </div>
      </div>
    </BookingLayout>
  );
}
