import Link from "next/link";


export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center gap-6 px-6 py-16">
      <p className="text-xs uppercase tracking-[0.4em] text-gold">Barbería premium</p>
      <h1 className="text-4xl font-semibold">Barbería Premium</h1>
      <p className="text-base text-white/70">
        Bienvenido. Agenda tu próxima cita con una experiencia rápida, clara y elegante.
      </p>
      <Link
        href="/admin"
        className="w-fit rounded-full border border-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold"
      >
        Ir al panel admin
      </Link>
    </main>
import SectionTitle from "../components/SectionTitle";
import StepCard from "../components/StepCard";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-gold">Barbería premium</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Reserva tu cita en menos de un minuto.
            </h1>
            <p className="max-w-xl text-base text-white/70">
              Un servicio elegante, rápido y confiable. Selecciona tu servicio, elige tu barbero y confirma al instante.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/booking/service"
                className="rounded-full bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-noir"
              >
                Reservar cita
              </Link>
              <Link
                href="#servicios"
                className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white/80"
              >
                Ver servicios
              </Link>
            </div>
            <p className="text-sm text-white/50">Calificación 4.9 · Más de 1,200 clientes satisfechos.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-graphite p-8 shadow-soft">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-gold">Agenda rápida</p>
              <div className="space-y-2 text-sm text-white/70">
                <p>1. Selecciona servicio.</p>
                <p>2. Elige barbero o asignación automática.</p>
                <p>3. Escoge fecha y hora disponibles.</p>
                <p>4. Confirma y agrega a tu calendario.</p>
              </div>
              <Link href="/booking/service" className="inline-flex items-center text-sm font-semibold text-gold">
                Comenzar ahora →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle
          eyebrow="Servicios"
          title="Detalles precisos, estilo impecable."
          description="Selecciona el ritual que mejor se adapte a ti y conoce la duración exacta desde el inicio."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "Corte premium", description: "45 min · $20" },
            { title: "Barba & ritual", description: "30 min · $15" },
            { title: "Combo elite", description: "75 min · $30" }
          ].map((item) => (
            <StepCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      <section id="equipo" className="border-y border-white/10 bg-graphite/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionTitle
            eyebrow="Equipo"
            title="Barberos con precisión y estilo internacional."
            description="Selecciona tu experto o deja que el sistema recomiende al primero disponible."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { name: "Mateo Vargas", role: "Fade clásico" },
              { name: "Lucas Pérez", role: "Barba premium" },
              { name: "Sofía Herrera", role: "Diseño moderno" }
            ].map((member) => (
              <StepCard key={member.name} title={member.name} description={member.role} />
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle
          eyebrow="Contacto"
          title="Estamos listos para recibirte."
          description="Atención prioritaria, horarios amplios y confirmación inmediata."
        />
        <div className="mt-8 flex flex-col gap-4 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <p>Av. Principal 123 · Ciudad</p>
          <p>+57 320 000 0000 · reservas@barberiaimperial.com</p>
          <p>Lun-Sáb 9:00 - 20:00</p>
        </div>
      </section>
    </div>
  );
}
