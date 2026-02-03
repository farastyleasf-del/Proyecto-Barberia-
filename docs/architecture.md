# Arquitectura del sistema

## Visión general
Arquitectura modular orientada a servicios, enfocada en una experiencia de cliente rápida, estable y escalable.

**Capas:**
1. **Presentación (Frontend)**: Next.js con renderizado híbrido (SSR/ISR) y enfoque mobile-first.
2. **API (Backend)**: REST + validaciones + lógica de negocio.
3. **Persistencia**: PostgreSQL con consultas transaccionales y control de concurrencia.
4. **Integraciones (futuras)**: pasarela de pagos, WhatsApp/email, agente IA.

## Módulos principales
- **Agenda/Booking**
  - Disponibilidad por servicio y barbero
  - Bloqueos manuales
  - Reglas anti doble reserva
- **Usuarios/Clientes**
  - Perfil básico (nombre, email, teléfono)
  - Historial de citas
- **Administración**
  - Gestión de servicios, barberos, horarios
  - Reprogramación/cancelación

## API REST (propuesta)
- `GET /services` → lista de servicios
- `GET /barbers` → lista de barberos
- `GET /availability?serviceId=&barberId=&date=` → slots disponibles
- `POST /appointments` → crear cita
- `GET /appointments?date=&barberId=` → administración
- `PATCH /appointments/:id` → reprogramar/cancelar
- `POST /blocks` → bloquear horario

## Observabilidad y seguridad
- Validación de entrada (Zod/Joi/Pydantic)
- Rate limiting
- Logs estructurados
- Auditoría básica de cambios en citas

## Preparación para IA
- Endpoint `POST /assistant/faq` con base de conocimiento.
- Endpoint `POST /assistant/booking` para automatizar el flujo.
