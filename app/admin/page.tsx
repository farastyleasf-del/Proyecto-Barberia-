import AdminSectionHeader from "../../components/admin/AdminSectionHeader";

export default function AdminHomePage() {
  const stats = [
    { label: "Citas hoy", value: "24", change: "+12%", trend: "up" },
    { label: "Pagos pendientes", value: "5", change: "-8%", trend: "down" },
    { label: "Barberos activos", value: "3", change: "0%", trend: "neutral" }
  ];

  const recentAppointments = [
    { client: "Juan Pérez", service: "Corte Signature", time: "10:00 AM", barber: "Alejandro Silva", status: "Confirmada" },
    { client: "Carlos Ruiz", service: "Barba Premium", time: "11:30 AM", barber: "Fernando Cruz", status: "En progreso" },
    { client: "Miguel Torres", service: "Experiencia Total", time: "2:00 PM", barber: "Sebastián Ríos", status: "Pendiente" },
  ];

  const todayRevenue = "$1,250.00";
  const monthRevenue = "$28,400.00";

  return (
    <section className="space-y-8">
      <AdminSectionHeader
        eyebrow="Resumen"
        title="Panel de control"
        description="Estado general de la operación, citas y pagos del día."
      />
      
      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((card) => (
          <div key={card.label} className="rounded-2xl border border-white/10 bg-graphite p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/60">{card.label}</p>
              <span className={`text-xs font-semibold ${
                card.trend === 'up' ? 'text-green-400' : 
                card.trend === 'down' ? 'text-red-400' : 
                'text-white/40'
              }`}>
                {card.change}
              </span>
            </div>
            <p className="mt-4 text-3xl font-semibold">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Revenue Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gold/10 to-transparent p-6 shadow-soft">
          <p className="text-sm text-white/60">Ingresos de hoy</p>
          <p className="mt-4 text-3xl font-semibold text-gold">{todayRevenue}</p>
          <p className="mt-2 text-xs text-white/50">Actualizado hace 5 minutos</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gold/10 to-transparent p-6 shadow-soft">
          <p className="text-sm text-white/60">Ingresos del mes</p>
          <p className="mt-4 text-3xl font-semibold text-gold">{monthRevenue}</p>
          <p className="mt-2 text-xs text-white/50">Meta mensual: $30,000</p>
        </div>
      </div>

      {/* Recent Appointments */}
      <div className="rounded-2xl border border-white/10 bg-graphite/50 p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-white">Citas de hoy</h3>
        <div className="mt-6 space-y-3">
          {recentAppointments.map((appointment, index) => (
            <div 
              key={index}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-noir/50 px-5 py-4"
            >
              <div className="flex-1">
                <p className="text-base font-semibold">{appointment.client}</p>
                <p className="text-xs text-white/50">{appointment.service} · {appointment.barber}</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gold">{appointment.time}</p>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  appointment.status === 'Confirmada' ? 'bg-green-500/20 text-green-400' :
                  appointment.status === 'En progreso' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {appointment.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-4">
        <button className="rounded-xl border border-white/10 bg-graphite p-4 text-left transition hover:border-gold hover:bg-graphite/70">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Nueva</p>
          <p className="mt-2 text-sm font-semibold">Agregar cita</p>
        </button>
        <button className="rounded-xl border border-white/10 bg-graphite p-4 text-left transition hover:border-gold hover:bg-graphite/70">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Ver</p>
          <p className="mt-2 text-sm font-semibold">Todos los pagos</p>
        </button>
        <button className="rounded-xl border border-white/10 bg-graphite p-4 text-left transition hover:border-gold hover:bg-graphite/70">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Gestionar</p>
          <p className="mt-2 text-sm font-semibold">Servicios</p>
        </button>
        <button className="rounded-xl border border-white/10 bg-graphite p-4 text-left transition hover:border-gold hover:bg-graphite/70">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Ver</p>
          <p className="mt-2 text-sm font-semibold">Reportes</p>
        </button>
      </div>
    </section>
  );
}
