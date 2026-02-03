import AdminSectionHeader from "../../components/admin/AdminSectionHeader";

export default function AdminHomePage() {
  return (
    <section className="space-y-8">
      <AdminSectionHeader
        eyebrow="Resumen"
        title="Panel de control"
        description="Estado general de la operación, citas y pagos del día."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { label: "Citas hoy", value: "24" },
          { label: "Pagos pendientes", value: "5" },
          { label: "Barberos activos", value: "3" }
        ].map((card) => (
          <div key={card.label} className="rounded-2xl border border-white/10 bg-graphite p-6 shadow-soft">
            <p className="text-sm text-white/60">{card.label}</p>
            <p className="mt-4 text-3xl font-semibold">{card.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
