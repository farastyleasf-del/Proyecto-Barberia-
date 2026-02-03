import AdminSectionHeader from "../../../components/admin/AdminSectionHeader";

export default function AdminServicesPage() {
  return (
    <section className="space-y-6">
      <AdminSectionHeader
        eyebrow="Servicios"
        title="Gestión de servicios"
        description="Administra precios, duración y disponibilidad de cada servicio."
      />
      <div className="rounded-2xl border border-white/10 bg-graphite p-6 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold">Catálogo activo</h3>
            <p className="text-sm text-white/60">3 servicios en línea</p>
          </div>
          <button className="rounded-full bg-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-noir">
            Nuevo servicio
          </button>
        </div>
        <div className="mt-6 grid gap-4">
          {["Corte Premium", "Barba & Ritual", "Combo Elite"].map((service) => (
            <div key={service} className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm text-white/70">
              <span>{service}</span>
              <span className="text-white/50">45-75 min</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
