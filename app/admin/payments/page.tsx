import AdminSectionHeader from "../../../components/admin/AdminSectionHeader";

export default function AdminPaymentsPage() {
  return (
    <section className="space-y-6">
      <AdminSectionHeader
        eyebrow="Pagos"
        title="Seguimiento de pagos"
        description="Controla estados, métodos de pago y conciliaciones."
      />
      <div className="rounded-2xl border border-white/10 bg-graphite p-6 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold">Pagos recientes</h3>
            <p className="text-sm text-white/60">5 transacciones pendientes</p>
          </div>
          <button className="rounded-full border border-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Exportar
          </button>
        </div>
        <div className="mt-6 grid gap-4">
          {[
            { id: "#1024", amount: "$20", status: "Pendiente" },
            { id: "#1025", amount: "$30", status: "Pagado" },
            { id: "#1026", amount: "$15", status: "Pendiente" }
          ].map((payment) => (
            <div key={payment.id} className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm text-white/70">
              <span>{payment.id}</span>
              <span className="text-white/50">{payment.amount}</span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                {payment.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
