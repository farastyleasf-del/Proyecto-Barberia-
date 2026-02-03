import AdminSectionHeader from "../../../components/admin/AdminSectionHeader";

export default function AdminBarbersPage() {
  return (
    <section className="space-y-6">
      <AdminSectionHeader
        eyebrow="Barberos"
        title="Gestión de barberos"
        description="Gestiona perfiles, especialidades y disponibilidad."
      />
      <div className="rounded-2xl border border-white/10 bg-graphite p-6 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold">Equipo activo</h3>
            <p className="text-sm text-white/60">3 barberos disponibles</p>
          </div>
          <button className="rounded-full bg-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-noir">
            Agregar barbero
          </button>
        </div>
        <div className="mt-6 grid gap-4">
          {["Mateo Vargas", "Lucas Pérez", "Sofía Herrera"].map((barber) => (
            <div key={barber} className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm text-white/70">
              <span>{barber}</span>
              <span className="text-white/50">Especialidad premium</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
