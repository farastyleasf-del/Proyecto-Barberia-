# Modelo de datos

## Entidades principales

### Service
- `id` (PK)
- `name`
- `description`
- `duration_minutes`
- `price`
- `active`

### Barber
- `id` (PK)
- `full_name`
- `bio`
- `photo_url`
- `active`

### WorkingHours
- `id` (PK)
- `barber_id` (FK → Barber)
- `day_of_week` (0-6)
- `start_time`
- `end_time`

### Appointment
- `id` (PK)
- `service_id` (FK → Service)
- `barber_id` (FK → Barber, nullable)
- `client_name`
- `client_phone`
- `client_email`
- `start_time`
- `end_time`
- `status` (scheduled | cancelled | completed)
- `notes`
- `created_at`

### TimeBlock
- `id` (PK)
- `barber_id` (FK → Barber, nullable)
- `start_time`
- `end_time`
- `reason`
- `created_at`

## Reglas de integridad
- `Appointment` no debe solaparse con otro appointment o time block en el mismo barber.
- Si `barber_id` es null, se asigna automáticamente el primero disponible.
- `duration_minutes` se usa para calcular `end_time`.

## Índices recomendados
- `Appointment (barber_id, start_time)`
- `TimeBlock (barber_id, start_time)`
- `WorkingHours (barber_id, day_of_week)`
