# Lógica de agendamiento

## Entrada
- `serviceId`
- `barberId` (opcional)
- `date` (día)

## Algoritmo base
1. Obtener `duration_minutes` del servicio.
2. Calcular slots posibles según `WorkingHours`.
3. Excluir slots que solapan `Appointment` activos.
4. Excluir slots dentro de `TimeBlock`.
5. Ordenar por hora y devolver lista.

## Reglas de negocio
- Evitar doble reserva con locks transaccionales.
- Permitir bloqueos manuales globales o por barbero.
- Duración por servicio determina `end_time`.

## Consideraciones técnicas
- Respuesta en intervalos de 15 minutos.
- Validar zona horaria local.
- Confirmación atómica de la reserva.
