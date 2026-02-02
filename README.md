# Sistema Web de Agendamiento – Barbería Premium

Proyecto base para construir una experiencia de reserva premium, rápida y confiable para una barbería.

## Objetivos clave
- Reservar en menos de 1 minuto con un flujo claro y sin fricción.
- Imagen moderna, elegante y profesional.
- Preparado para escalabilidad e integración futura con IA.

## Stack recomendado
- **Frontend:** Next.js (React) + Tailwind CSS + Headless UI.
- **Backend:** Node.js (NestJS/Express) o Python (FastAPI).
- **Base de datos:** PostgreSQL.
- **Infra:** Docker + CI/CD (GitHub Actions).

> Nota: el frontend vive en `app/` hoy; `apps/web` queda reservado si se migra a un monorepo completo.

## Estructura propuesta del proyecto
```
.
├── apps
│   └── api/               # Backend (API REST con Express)
├── app/                   # Frontend Next.js (incluye /admin)
├── apps/web/              # (Futuro) Frontend separado si se decide monorepo completo
├── packages
│   ├── ui/                # Componentes reutilizables
│   └── config/            # ESLint, Prettier, Tailwind
├── docs/                  # Documentación funcional y técnica
│   ├── architecture.md
│   ├── booking-logic.md
│   ├── data-model.md
│   ├── user-flows.md
│   ├── admin-panel.md
│   └── ux-ui-guidelines.md
└── README.md
```

## Entregables en esta fase
- **Modelo de datos** y relaciones principales.
- **Flujos de usuario** para el proceso de agendamiento.
- **Arquitectura propuesta** para el sistema.
- **Componentes principales** del frontend.
- **Lógica de agendamiento** y reglas de negocio.
- **Recomendaciones UX/UI** para un diseño premium.

Consulta el directorio `/docs` para el detalle.
