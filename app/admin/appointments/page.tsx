import AdminSectionHeader from "../../../components/admin/AdminSectionHeader";

export default function AdminAppointmentsPage() {
  return (
    <section className="space-y-6">
      <AdminSectionHeader
        eyebrow="Citas"
        title="Administración de citas"
        description="Visualiza y gestiona el estado de cada reserva."
      />
      <div className="rounded-2xl border border-white/10 bg-graphite p-6 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold">Agenda de hoy</h3>
            <p className="text-sm text-white/60">24 citas confirmadas</p>
          </div>
          <button className="rounded-full border border-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Filtrar
          </button>
        </div>
        <div className="mt-6 grid gap-4">
          {[
            { name: "Corte Premium", time: "10:15 AM", status: "Confirmada" },
            { name: "Barba & Ritual", time: "12:30 PM", status: "Pendiente" },
            { name: "Combo Elite", time: "04:30 PM", status: "Confirmada" }
          ].map((appointment) => (
            <div key={appointment.time} className="flex flex-col gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
              <span>{appointment.name}</span>
              <span className="text-white/50">{appointment.time}</span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                {appointment.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
