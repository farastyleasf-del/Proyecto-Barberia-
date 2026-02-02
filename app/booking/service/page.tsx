import Link from "next/link";

import BookingLayout from "../../../components/BookingLayout";
import { services } from "../../../lib/mock-data";

export default function ServiceSelectionPage() {
  return (
    <BookingLayout
      title="Selecciona tu servicio"
      subtitle="Elige el ritual perfecto para tu visita. Mostramos duración y precio desde el inicio."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.id} className="rounded-2xl border border-white/10 bg-graphite p-6 shadow-soft">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p className="text-sm text-white/70">{service.duration} · {service.price}</p>
              <p className="text-xs text-white/50">Experiencia premium con asesoría personalizada.</p>
              <Link
                href="/booking/barber"
                className="inline-flex items-center text-sm font-semibold text-gold"
              >
                Continuar →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </BookingLayout>
  );
}
